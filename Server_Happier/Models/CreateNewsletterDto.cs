using Server_Shared.Enums;

namespace Server_Happier.Models
{
    public class CreateNewsletterDto
    {
        public string Name { get; set; } = string.Empty;
        public string Content { get; set; } = string.Empty;
        public string Author { get; set; } = string.Empty;

        public Month Month { get; set; }
        public int Year { get; set; }
    }
}
