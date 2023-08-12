const express = require('express');
const router = express.Router();

//database modules
const user = require("../database/firebaseConfig")

//helper functions
const { getCurrentTimeAndDate } = require("../helper/helperFunction")
const uniqid = require('uniqid'); //user to generate unique identifier key

//getting all the patient from the database
router.get("/patient", async (req, res) => {
    try {
        const userRef = await user.get(); //getting all the user references id from the database

        const respsone = userRef.docs.map((doc) => {
            return { id: doc.id, ...doc.data() }
        });
        res.status(200).json({
            error: null,
            message: "data is sucessfully retrived.",
            data: respsone,
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error,
            message: "Failed to get the data.",
            data: null
        })
    }

})

//router to get the specfic pateint data.
router.get("/patient/:id", async (req, res) => {
    try {

        const { id: patientId } = req.params
        const response = (await user.doc(patientId).get()).data()


        res.status(200).json({
            error: null,
            message: "data is successfully retrieved.",
            data: response,
        })

    } catch (error) {

        console.error(error)
        res.status(500).json({
            error: error,
            message: "Failed to get the data",
            data: null,

        })
    }
})
//add data to the database
router.post("/patient", async (req, res) => {
    const { name, ...patientData } = req.body;

    //patientData is consists of {name , age , phoneNumber , gender , nature of disease , medication given , history of disease[if any], note[if any]}    

    const PatientId = uniqid("", `-${name}`)
    const newPatient = {
        id: PatientId,
        name,
        ...patientData,
        timeOfVisit: getCurrentTimeAndDate(),
    };

    try {
        //waiting for the patient to be added [using phoneNumber as id cuz it always be unique]
        await user.doc(PatientId).set(newPatient);

        res.status(200).json({
            error: null,
            message: `${name} is added to the database.`,
            data: null
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: "Failed to add the patient.",
            error: error,
        });
    }
});

//updating the existing patient information / adding new vist of the existing patient
router.put("/patient", async (req, res) => {
    try {
        const { id: PatientId, ...updatedData } = req.body;
        await user.doc(PatientId).update(updatedData);
        res.status(200).json({
            error: null,
            message: "Patient updated successfully.",
            data: null
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: null,
            message: "something went wrong while updating the patient.",
            data: null
        });
    }
});

//delete the existing patient information from the database
router.delete("/:id", async (req, res) => {
    try {
        const { id: PatientId } = req.params
        await user.doc(PatientId).delete()

        res.status(200).json({
            error: null,
            message: "Patient deleted successfully.",
            data: null
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: "something went wrong while deleteing the patient.",
            data: null
        })
    }
})

module.exports = router