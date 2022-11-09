using api.EmployeeModels;
namespace api.EmployeeInterfaces
{
    public interface IGetAllEmployees
    {
         List<Employee> GetAllEmployees();
    }
}