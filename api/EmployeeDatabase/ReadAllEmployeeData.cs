using api.EmployeeDatabase;
using api.EmployeeInterfaces;
using api.EmployeeModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.EmployeeDatabase
{
    public class ReadAllEmployeeData : IGetAllEmployees
    {
        public List<Employee> GetAllEmployees()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * from employee";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            List<Employee> allEmployees = new List<Employee>();
            while(rdr.Read()){
                allEmployees.Add(new Employee(){EmployeeUsername = rdr.GetString(0), EmployeePassword = rdr.GetString(1), FirstName = rdr.GetString(2), LastName = rdr.GetString(3), IsAdmin = rdr.GetBoolean(4)});
            }
            con.Close();
            return allEmployees;
        }
    }
}