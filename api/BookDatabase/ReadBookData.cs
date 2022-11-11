using api.BookDatabase;
using api.BookInterfaces;
using api.BookModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.BookDatabase
{
    public class ReadBookData : IGetBook
    {
        public Book GetBook(Book value)
        {
            string cs = new ConnectionString().cs;
            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = "SELECT * FROM book WHERE title = @title";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@title", value.Title);
            cmd.Prepare();
            using MySqlDataReader rdr = cmd.ExecuteReader();
            con.Close();
            rdr.Read();
            return new Book(){Isn = rdr.GetInt32(0), Condition = rdr.GetString(1), Title = rdr.GetString(2), Author = rdr.GetString(3), NumberCopies = rdr.GetInt32(4), Barcode = rdr.GetString(5), OrderItemizedId = rdr.GetInt32(6)};
        }
    }
}