// *for more details about the debounce and other things refer "https://medium.com/nerd-for-tech/debounce-your-search-react-input-optimization-fd270a8042b"

import { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
//icons
import SerachInput from "./input/search/SerachInput";

const SearchPatient = ({ setPatientToDisplay, patientData }) => {
  const [search, setSearch] = useState("");

  const handelChange = (e) => setSearch(e.target.value);
  //handeling clear search functionality
  const handelClearSearch = () => setSearch("");

  const handlePatientSearch = (searchText) => {
    if (search) {
      const searchWords = searchText.toLowerCase().split(" ");

      const filtredPatient = patientData.filter((patient) => {
        const patientName = patient.name.toLowerCase();
        return searchWords.every((word) => patientName.includes(word));
      });
      setPatientToDisplay(filtredPatient);
    } else {
      setPatientToDisplay(patientData);
    }
  };

  //?unning this function on envery patientData changes so if user delete the patient patient it automatically updates the patient table.
  const debouncedResults = useMemo(() => {
    return debounce(() => handlePatientSearch(search), 300);
  }, [search, debounce, patientData.length]);

  //useEffect to clean up any side effects from debounce when our component gets unmounted;
  useEffect(() => {
    debouncedResults();
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <>
      <SerachInput
        value={search}
        onChangeAction={handelChange}
        clearInput={handelClearSearch}
      />
    </>
  );
};

export default SearchPatient;
