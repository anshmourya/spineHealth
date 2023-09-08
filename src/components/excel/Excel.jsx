import * as React from "react";
import DataFormat from "../../assets/patientFormat.xlsx";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
//components
import { CreateButton } from "../../pages/dashboard/Dashboard";
//hooks
import * as XLSX from "xlsx";
import { useForm } from "react-hook-form";
import TableStructure2 from "../table/TableStructure2";
import ButtonOne from "../../generalComponents/buttons/ButtonOne/ButtonOne";
import axios from "axios";
import { alert, success } from "../../helper/notification";
import LoaderTwo from "../loader/loaderTwo/LoaderTwo";

const Excel = () => {
  const [loading, setloading] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [excelData, setExcelData] = React.useState([]);
  //hooks
  const {
    handleSubmit,
    formState: { errors },
    register,
  } = useForm();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handelSubmit = (data) => {
    const reader = new FileReader();
    reader.readAsBinaryString(data.excel[0]);
    reader.onload = (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const pasrsedData = XLSX.utils.sheet_to_json(sheet);
      setExcelData(pasrsedData);
    };
  };

  const handelUpload = async () => {
    try {
      setloading(true);
      if (excelData.length > 0) {
        const response = await axios.post(
          `${import.meta.env.VITE_SERVER_URL}/upload`,
          excelData,
          { withCredentials: true }
        );
        if (response) {
          setloading(false);
          setExcelData([]);
          success(response.data.message);
        }
      }
    } catch (error) {
      setloading(false);
      console.error(error);
      alert("Error uploading patient");
      throw error;
    }
  };
  const columns = [
    { field: "name", header: "Name" },
    { field: "age", header: "age" },
    { field: "gender", header: "Gender" },
    { field: "phoneNumber", header: "Phone Number" },
    { field: "natureOfWorking", header: "Nature Of Working" },
    { field: "designation", header: "Designation" },
    { field: "historyOfIllness", header: "History Of Illness" },
    { field: "chiefComplaint", header: "Chief Complaint" },
  ];

  return (
    <div>
      <ButtonOne handelClick={handleClickOpen} />
      <Dialog fullScreen open={open} onClose={handleClose}>
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              {/* <CloseIcon /> */}
              close
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Import Patient
            </Typography>
            <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button>
          </Toolbar>
        </AppBar>
        {!loading ? (
          <div className="p-4">
            <div className="flex float-right gap-3 format">
              <div className="loadData" onClick={handelUpload}>
                {excelData.length > 0 && <CreateButton title={"Import"} />}
              </div>
              <a href={DataFormat} download={"PatientFormat"}>
                <CreateButton title={"download format"} />
              </a>
            </div>
            <div className="form">
              <form onChange={handleSubmit(handelSubmit)}>
                <div className="fileUpload">
                  <input
                    type="file"
                    className="upload"
                    {...register("excel", {
                      required: "enter the excel data",
                    })}
                  />
                  <span>Upload</span>
                </div>
                {errors.excel && <p>{errors.excel}</p>}
              </form>
              <div className="my-6">
                <TableStructure2 columns={columns} data={excelData} />
              </div>
            </div>
          </div>
        ) : (
          // <h1>ansh</h1>
          <LoaderTwo />
        )}
      </Dialog>
    </div>
  );
};

export default Excel;
