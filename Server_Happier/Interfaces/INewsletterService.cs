using Server_Happier.Models;

namespace Server_Happier.Interfaces
{
    public interface INewsletterService
    {
        Task CreateAsync(CreateNewsletterDto dto);
        Task SubscribeAsync(AddSubscribeDto dto);
    }
}
