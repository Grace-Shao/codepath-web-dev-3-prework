import { createClient } from '@supabase/supabase-js';

const URL = 'https://pavnnuwutfhdqtpoypri.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBhdm5udXd1dGZoZHF0cG95cHJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyOTcwMTcsImV4cCI6MjAzOTg3MzAxN30.v6vAvGzivAZ23baN87y6yfZPvH3wevh5UujhQeRASFQ';

export const supabase = createClient(URL, API_KEY);

// // Function to test the connection
// async function testConnection() {
//     const { data, error } = await supabase
//       .from('creators') // Replace 'your_table_name' with an actual table name in your Supabase database
//       .select('*');
  
//     if (error) {
//       console.error('Error:', error);
//     } else {
//       console.log('Data:', data);
//     }
//   }
  
//   // Call the test function
//   testConnection();