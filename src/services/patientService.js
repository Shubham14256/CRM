import supabase from '../config/supabaseClient.js';

// TASK: getAllPatients function लिखो
// यह database से सब patients को निकाल्ना चाहिए
export const getAllpatients = async () =>{
    try {

         console.log('📥 Fetching patients...');
        // fetched the data from suphabase database
        const { data,error} = await suphabase.
        from('patients')
        .select('*')
        .order('created_at', { ascending: false });


        if(error){
            console.error('❌ Database Error:', error.message);
            throw error;
        }

         console.log(`✅ Found ${data.length} patients`);
         return data;


    }catch(error){
        console.error('❌ Error fetching patients:', error.message);

        return[];
    }
};


/// creating the new patient 

export const createPatient = async (name,phoneNumber,doctorId) => {
    try{
        const {data, error} = await suphabase
        .from('patients')
        .insert([{ 
            name:name, 
            phone_number: phoneNumber, 
            doctor_id: doctorId }])
           .select()
           .single();// converting thethe return array in one object

    }
    catch (error) {
    console.error('❌ Error in createPatient:', error);
    return [];
  }
};