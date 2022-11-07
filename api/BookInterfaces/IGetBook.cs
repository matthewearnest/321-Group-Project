using api.BookModels;
namespace api.BookInterfaces
{
    public interface IGetBook
    {
         Book GetBook(Book value);
    }
}