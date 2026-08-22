//API routing decide karti hai ki kaunsi request par kaunsa code execute hoga.
import express from 'express';
import { getAllAppointments,createAppointment } from '../services/appointmentService';
import { getAllpatients,createPatient } from '../services/patientService';

const router = express.Router();

//

//Express में अलग-अलग API routes को organize करने के लिए इस्तेमाल होता है।

// GET REQUEST FOR TAKNG PACIENTS 
router.get('./patients') = async(req, res)=>{
    //call the service for taking the data from data base
    const patients = getAllpatients();
    try{

    //response pathava 
    res.json({
        success:true,
        count : patients.length,
        data : patients
    });
    }catch(error){
        res.status(500).json({
            success: false,
            error: error.message
        });
            
        
    }

};
export default router;


// adding new patient 
router.post('/patients' , async(req,res)=>{
    try{

    
    // take the data from req.body that coming fromfrontend 
    const {name,phoneNumber,doctorId} = req.body;
    //validation checking 
    if(!phoneNumber||!doctorId||!name){
        return res.json({
            success : false,
            error : 'name ,phoneNumber , or doctorId is important'
        });
    }
    }catch(error){

    }
})

