const express = require('express');
const router = express.Router();
const uniqid = require('uniqid');
const { user, db } = require("../database/firebaseConfig");
router.post('/upload', async (req, res) => {
    console.log(req.user);
    try {
        const patientData = req.body; // Assuming you're sending an array of patient data in the request body
        const patientCollection = user.doc(req.user).collection('patient');

        const batch = db.batch(); // Create a Firestore batch

        patientData.forEach((singlePatient) => {
            const patientId = uniqid('', `-${singlePatient.phoneNumber}`);
            const newPatientRef = patientCollection.doc(patientId);
            const newPatient = {
                id: patientId,
                ...singlePatient,
            };
            batch.set(newPatientRef, newPatient);
        });

        await batch.commit(); // Commit the batch

        res.status(200).json({
            message: 'Bulk patient data uploaded successfully.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Failed to upload bulk patient data.',
            error: error.message, // Return the error message
        });
    }
});

module.exports = router;