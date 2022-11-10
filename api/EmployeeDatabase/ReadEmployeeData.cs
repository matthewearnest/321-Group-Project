using api.EmployeeDatabase;
using api.EmployeeInterfaces;
using api.EmployeeModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.EmployeeDatabase
{
    public class ReadEmployeeData : IGetEmployee
    {
        public Employee GetEmployee(int id)
        {
            string cs = @"mysql://sifctgglmb9812ns:p20bsk98rfgzhjmr@migae5o25m2psr4q.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/f6546175wjqbfhwv";
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM employee WHERE employee_username = @employee_username";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@employee_username", id);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();
            con.Close();
            rdr.Read();
            return new Employee(){EmployeeUsername = rdr.GetString(0), EmployeePassword = rdr.GetString(1), FirstName = rdr.GetString(2), LastName = rdr.GetString(3), IsAdmin = rdr.GetBoolean(4)};
        }
    }
}