namespace Server_Happier_Database.Entities
{
    public class Subscribe
    {
        public int Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public bool IsSubscribed { get; set; } = true;
    }
}
