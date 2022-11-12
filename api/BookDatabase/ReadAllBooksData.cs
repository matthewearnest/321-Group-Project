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
            try
            {
                con.Open();

                string stm = "SELECT * from book";
                using var cmd = new MySqlCommand(stm, con);

                MySqlDataReader rdr = cmd.ExecuteReader();

                List<Book> allBooks = new List<Book>();
                while (rdr.Read())
                {
                    Console.WriteLine(rdr.GetInt32(0));
                    allBooks.Add(new Book()
                    {
                        Isn = rdr.GetInt32(0),
                        Condition = rdr.GetString(1),
                        Author = rdr.GetString(2),
                        NumberCopies = rdr.GetInt32(3),
                        Title = rdr.GetString(4),
                        Barcode = rdr.GetString(5),
                        OrderItemizedId = rdr.GetInt32(6)
                    });
                }
                return allBooks;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return new List<Book>();
            }
            finally
            {
                con.Close();
            }
        }
    }
}