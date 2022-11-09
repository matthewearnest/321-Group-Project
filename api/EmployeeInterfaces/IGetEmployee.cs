using api.EmployeeModels;
namespace api.EmployeeInterfaces
{
    public interface IGetEmployee
    {
         Employee GetEmployee(int id);
    }
}