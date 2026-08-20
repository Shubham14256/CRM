import supabase from '../config/supabaseClient.js';

// get appointment from database
export const getAllAppointments = async (doctorId) =>{
    try{
        console.log('📥 Fetching appointments...');
        const {data,error} =await suphabase
        .from('appointments')
        .eq(doctorId, doctorId)
        .select('*')
        .order('created_at', { ascending: false });


        if(error){
            console.error('❌ Database Error:', error.message);
            throw error;

        }
        console.log(`✅ Found ${data.length} appointments`);
        return data;
    }catch(error){
        console.error('❌ Error fetching appointments:', error.message);
        return [];
    }
}



//createappointments function 

export const createappointments = async (patientId, doctorId, appointmentTime) => {
    try{

        if (!patientId || !doctorId || !appointmentTime) {
        console.warn('⚠️  Patient ID, Doctor ID, and appointment time are required');
        return null;
        }
        
        console.log(`📅 Creating appointment for patient: ${patientId}`);


        const {data,error} = await suphabase
        .from('appointments')
        .insert([{
            patientId: patientId,
            doctorId : doctorId,
            appointmentTime : appointmentTime,
            status : 'pending',
            notes : notes,
            created_at : new Date().toISOString(),

        }])
        .select()
        .single();

        if (error) {
        console.error('❌ Error creating appointment:', error);

        return null;
       }

       console.log(`✅ Appointment created (ID: ${data.id})`);
       return data;

    }catch(error){
        console.error('Exception in apointment Creation :' , error);
        return[];

    }
}