using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using api.BookDatabase;
using api.BookInterfaces;
using api.BookModels;
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
        [HttpGet("{value}" , Name = "Gets")]
        public Book Get(Book value)
        {
            IGetBook readObject = new ReadBookData();
            return readObject.GetBook(value);
        }

        // POST: api/books
        [EnableCors("OpenPolicy")]
        [HttpPost (Name = "PostBooks")]
        public void Post(Book value)
        {
            ICreateBook createObject = new CreateBook();
            createObject.NewCreateBook(value);
        }

        // PUT: api/books/5
        [EnableCors("OpenPolicy")]
        [HttpPut (Name = "PutBooks")]
        public void Put([FromBody] Book value)
        {
            IEditBook editBook = new EditBook();
            editBook.EditMyBook(value);
        }

        // DELETE: api/books/5
        [EnableCors("OpenPolicy")]
        [HttpDelete]
        public void Delete(Book value)
        {
            IDeleteBook deleteBook = new DeleteBook();
            deleteBook.DeleteMyBook(value);
        }
    }
}
