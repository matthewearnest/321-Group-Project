namespace api.EmployeeModels
{
    public class Employee
    {
        public int EmployeeID {get; set;}
        public string EmployeeUsername {get; set;}
        public string EmployeePassword {get; set;}
        public string FirstName {get; set;}
        public string LastName {get; set;}
        public bool IsAdmin {get; set;}
    }
}