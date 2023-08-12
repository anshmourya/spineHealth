// *for more details about the debounce and other things refer "https://medium.com/nerd-for-tech/debounce-your-search-react-input-optimization-fd270a8042b"

import { useEffect, useState, useMemo } from "react";
import debounce from "lodash.debounce";
//icons
import { BiSearchAlt } from "react-icons/bi";

const SearchPatient = ({ setPatientToDisplay, patientData }) => {
  const [search, setSearch] = useState("");

  const handlePatientSearch = (searchText) => {
    const filteredPatients = patientData.filter((patient) =>
      patient.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setPatientToDisplay(filteredPatients);
  };

  const debouncedResults = useMemo(() => {
    return debounce(() => handlePatientSearch(search), 300);
  }, [search, debounce]);

  //useEffect to clean up any side effects from debounce when our component gets unmounted;
  useEffect(() => {
    debouncedResults();
    return () => {
      debouncedResults.cancel();
    };
  }, [debouncedResults]);

  return (
    <>
      <BiSearchAlt className="absolute m-[11px] " />
      <input
        type="text"
        className="border outline-none px-[35px] py-[10px] h-[37px] rounded-lg capitalize"
        placeholder="Search Patient"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </>
  );
};

export default SearchPatient;
