using api.EmployeeDatabase;
using api.EmployeeInterfaces;
using api.EmployeeModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.EmployeeDatabase
{
    public class DeleteEmployee : IDeleteEmployee //how else do we "fire" them, by what attribute
    {
        public void DeleteMyEmployee(Employee value)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE employee SET employee_username = @employee_username where employee_username = @employee_username";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@employee_username", value.EmployeeUsername);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}