using Server_Happier.Models;

namespace Server_Happier.Interfaces
{
    public interface INewsletterValidator
    {
        void Validate(CreateNewsletterDto dto);
    }
}
