using api.BookDatabase;
using api.BookInterfaces;
using api.BookModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.BookDatabase
{
    public class ReadAllBooksData : IGetAllBooks
    {
        public List<Book> GetAllBooks()
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * from book";
            using var cmd = new MySqlCommand(stm, con);

            using MySqlDataReader rdr = cmd.ExecuteReader();

            List<Book> allBooks = new List<Book>();
            while(rdr.Read()){
                allBooks.Add(new Book(){Isn = rdr.GetInt32(0), Condition = rdr.GetString(1), Title = rdr.GetString(2), Author = rdr.GetString(3), NumberCopies = rdr.GetInt32(4), Barcode = rdr.GetString(5), OrderItemizedId = rdr.GetInt32(6)});
            }
            con.Close();
            return allBooks;
        }
    }
}