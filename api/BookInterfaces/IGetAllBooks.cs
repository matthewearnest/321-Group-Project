using api.BookModels;
namespace api.BookInterfaces
{
    public interface IGetAllBooks
    {
         List<Book> GetAllBooks();
    }
}