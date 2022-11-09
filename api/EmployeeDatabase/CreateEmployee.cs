using api.EmployeeDatabase;
using api.EmployeeInterfaces;
using api.EmployeeModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.EmployeeDatabase
{
    public class CreateEmployee : ICreateEmployee
    {
        public void CreateNewEmployee(Employee value)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO employee(employee_username, employee_password, first_name, last_name, is_admin) VALUES(@employee_username, @employee_password, @first_name, @last_name, @is_admin)";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@employee_username", value.EmployeeUsername);
            cmd.Parameters.AddWithValue("@employee_password", value.EmployeePassword);
            cmd.Parameters.AddWithValue("@first_name", value.FirstName);
            cmd.Parameters.AddWithValue("@last_name", value.LastName);
            cmd.Parameters.AddWithValue("@is_admin", value.IsAdmin);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}