using api.BookDatabase;
using api.BookInterfaces;
using api.BookModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.BookDatabase
{
    public class EditBook : IEditBook
    {
        public void EditMyBook(Book value)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"UPDATE book SET num_of_copies = @num_of_copies where title = @title";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@num_of_copies", value.NumberCopies);
            cmd.Parameters.AddWithValue("@title", value.Title);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}