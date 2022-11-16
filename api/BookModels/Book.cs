namespace api.BookModels
{
    public class Book
    {
        public int Isn{get; set;}
        public string Condition {get; set;}
        public double Price {get; set;}
        public string Title {get; set;}
        public string Author {get; set;}
        public int NumberCopies {get; set;}
        
        public string Barcode {get; set;}

        public int OrderItemizedId {get; set;}

    }
}