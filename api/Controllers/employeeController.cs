using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.EmployeeDatabase;
using api.EmployeeInterfaces;
using api.EmployeeModels;
using api.Controllers;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class employeeController : ControllerBase
    {
        // GET: api/employee
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Employee> Get()
        {
            IGetAllEmployees readObject = new ReadAllEmployeeData();
            return readObject.GetAllEmployees();
        }

        // GET: api/employee/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "Get")]
        public Employee Get(Employee value)
        {
            IGetEmployee readObject = new ReadEmployeeData();
            return readObject.GetEmployee(value);
        }

        // POST: api/employee
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post(Employee value)
        {
            ICreateEmployee createObject = new CreateEmployee();
            createObject.CreateNewEmployee(value);
        }

        // PUT: api/employee/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put([FromBody] Employee value)
        {
            IEditEmployee editEmployee = new EditEmployee();
            editEmployee.EditMyEmployee(value);
        }

        // DELETE: api/employee/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(Employee value)
        {
            IDeleteEmployee deleteEmployee = new DeleteEmployee();
            deleteEmployee.DeleteMyEmployee(value);
        }
    }
}
