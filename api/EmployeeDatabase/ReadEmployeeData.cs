using api.EmployeeDatabase;
using api.EmployeeInterfaces;
using api.EmployeeModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.EmployeeDatabase
{
    public class ReadEmployeeData : IGetEmployee
    {
        public Employee GetEmployee(Employee value)
        {
            
            string cs = @"mysql://sifctgglmb98l2ns:p20bsk98rfgzhjmr@migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/f6546l75wjqbfhwv";
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM employee WHERE employee_username = @employee_username";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@employee_username", value.EmployeeUsername);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();
            con.Close();
            rdr.Read();
            return new Employee(){EmployeeID = rdr.GetInt32(0), EmployeeUsername = rdr.GetString(1), EmployeePassword = rdr.GetString(2), FirstName = rdr.GetString(3), LastName = rdr.GetString(4), IsAdmin = rdr.GetBoolean(5)};
        }
    }
}