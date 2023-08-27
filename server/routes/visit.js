const express = require('express');
const router = express.Router();

//database modules
const user = require("../database/firebaseConfig")


//helper functions
const { getCurrentTimeAndDate } = require("../helper/helperFunction")
const uniqid = require('uniqid'); //user to generate unique identifier key


//get all the visit of the particular patient
router.get("/visit/:id", async (req, res) => {

    try {
        const { id: patientId } = req.params

        const patientRef = await user.doc(patientId).collection("visit").get();
        const response = patientRef.docs.map((doc) => doc.data())

        res.status(200).json({
            error: null,
            message: "successfully retrived patient visit",
            data: response
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error,
            message: "Failed to get visit of the patient try again.",
            data: null
        })
    }
});

//get particular visit of the particular patient
router.get("/visit/:id/:visitId", async (req, res) => {
    try {
        const { id: patientId, visitId } = req.params
        const response = (await user.doc(patientId).collection("visit").doc(visitId).get()).data()

        res.status(200).json({
            error: null,
            message: "successfully retrived patient visit",
            data: response
        })


    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error,
            message: "Failed to get visit of this patient try again.",
            data: null
        })
    }
});


//add new vist to the database
router.post("/visit", async (req, res) => {
    console.log(req.body);
    try {
        const { id: patientId, ...visitData } = req.body
        //vistData is consist of {nature of disease , medication given , note[if any]}
        const visitId = uniqid()
        const newVisit = {
            visitId: visitId,
            ...visitData,
            timeOfVisit: getCurrentTimeAndDate()
        }

        const vistRef = user.doc(patientId).collection("visit") //creating the new collection
        await vistRef.doc(visitId).set(newVisit)

        res.status(200).json({
            error: null,
            message: "successfully added visit of the patient",
            data: null,
        })

    } catch (error) {
        console.error(error)
        res.status(500).json({
            error: error,
            message: "Failed to new visit of the patient try again.",
            data: null
        })
    }

});

//edit the existing visit or update the existing of the patient
router.put("/visit/:patientId/:visitId", async (req, res) => {
    try {
        const { patientId, visitId } = req.params


        const patientRef = user.doc(patientId).collection("visit").doc(visitId);
        await patientRef.update(req.body);

        res.status(200).json({
            error: null,
            message: "successfully updated visit of the patient",
            data: null,
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: "Failed to update visit of the patient try again.",
            data: null
        });
    }
});

//deleting the vist of the existing patient
router.delete("/visit/:id/:visitId", async (req, res) => {

    try {
        const { id: patientId, visitId } = req.params;
        console.log(patientId, visitId);
        const pateintRef = user.doc(patientId).collection("visit").doc(visitId);
        await pateintRef.delete();

        res.status(200).json({
            error: null,
            message: "Patient visit was successfully deleted.",
            data: null,
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            error: error,
            message: "Failed to delete visit of the patient try again.",
            data: null
        });
    }

});
module.exports = router;