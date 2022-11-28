using api.BookDatabase;
using api.BookInterfaces;
using api.BookModels;
using MySql.Data.MySqlClient;
using System.Collections.Generic;
namespace api.BookDatabase
{
    public class CreateBook : ICreateBook
    {
        public void NewCreateBook(Book value)
        {
            ConnectionString myConnection = new ConnectionString();
            string cs = myConnection.cs;

            using var con = new MySqlConnection(cs);
            con.Open();

            string stm = @"INSERT INTO book(isn, condition_of_book, price, author, num_of_copies, title, barcode, order_itemized_id) VALUES(@isn, @condition_of_book, @price, @author, @num_of_copies, @title, @barcode, @order_itemized_id)";
            using var cmd = new MySqlCommand(stm, con);
            cmd.Parameters.AddWithValue("@isn", value.Isn);
            cmd.Parameters.AddWithValue("@condition_of_book", value.Condition);
            cmd.Parameters.AddWithValue("@price", value.Price);
            cmd.Parameters.AddWithValue("@author", value.Author);
            cmd.Parameters.AddWithValue("@num_of_copies", value.NumberCopies);
            cmd.Parameters.AddWithValue("@title", value.Title);
            cmd.Parameters.AddWithValue("@barcode", value.Barcode);
            cmd.Parameters.AddWithValue("@order_itemized_id", value.OrderItemizedId);

            cmd.Prepare();
            cmd.ExecuteNonQuery();
        }
    }
}