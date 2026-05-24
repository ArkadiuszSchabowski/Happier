using System.ComponentModel.DataAnnotations;

namespace Server_Happier.Models
{
    public class AddSubscribeDto
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; } = string.Empty;

        [Required]
        public bool Consent { get; set; } = false;
    }
}
