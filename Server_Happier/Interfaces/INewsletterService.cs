using Server_Happier.Models;

namespace Server_Happier.Interfaces
{
    public interface INewsletterService
    {
        Task SubscribeAsync(AddSubscribeDto dto);
    }
}
