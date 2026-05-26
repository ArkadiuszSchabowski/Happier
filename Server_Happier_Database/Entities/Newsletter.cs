using Server_Shared.Enums;

namespace Server_Happier_Database.Entities
{
    public class Newsletter
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;

        public Month Month { get; set; }
        public int Year { get; set; }
    }
}
