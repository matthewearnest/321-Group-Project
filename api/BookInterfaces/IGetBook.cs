using api.BookModels;
namespace api.BookInterfaces
{
    public interface IGetBook
    {
         Book GetBook(int id);
    }
}