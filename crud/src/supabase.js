import { createClient } from "@supabase/supabase-js";
const supabaseUrl='https://bqxqlwjrafgqrqoykwpr.supabase.co';
const supabaseKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJxeHFsd2pyYWZncXJxb3lrd3ByIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyNTkyMTY1NCwiZXhwIjoyMDQxNDk3NjU0fQ.VtgI2yh3ZhCV10ck9HJ9R9pTPaaj8r4A5193dNLPM6c';
export const supabase= createClient(supabaseUrl,supabaseKey);