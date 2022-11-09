using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.BookDatabase;
using api.BookInterfaces;
using api.BookModels;
using api.Controllers;
using Microsoft.AspNetCore.Cors;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class booksController : ControllerBase
    {
        // GET: api/books
        [EnableCors("OpenPolicy")]
        [HttpGet]
        public List<Book> Get()
        {
            IGetAllBooks readObject = new ReadAllBooksData();
            return readObject.GetAllBooks();
        }

        // GET: api/books/5
        [EnableCors("OpenPolicy")]
        [HttpGet("{id}", Name = "Get")]
        public Book Get(int id)
        {
            IGetBook readObject = new ReadBookData();
            return readObject.GetBook(id);
        }

        // POST: api/books
        [EnableCors("OpenPolicy")]
        [HttpPost]
        public void Post(Book value)
        {
            ICreateBook createObject = new CreateBook();
            createObject.NewCreateBook(value);
        }

        // PUT: api/books/5
        [EnableCors("OpenPolicy")]
        [HttpPut("{id}")]
        public void Put([FromBody] Book value)
        {
            IEditBook editBook = new EditBook();
            editBook.EditMyBook(value);
        }

        // DELETE: api/books/5
        [EnableCors("OpenPolicy")]
        [HttpDelete("{id}")]
        public void Delete(Book value)
        {
            IDeleteBook deleteBook = new DeleteBook();
            deleteBook.DeleteMyBook(value);
        }
    }
}
