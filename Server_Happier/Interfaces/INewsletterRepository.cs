using Server_Happier_Database.Entities;
using Server_Shared.Enums;

namespace Server_Happier.Interfaces
{
    public interface INewsletterRepository
    {
        Task AddNewsletterAsync(Newsletter entity);
        Task AddSubscriberAsync(Subscribe entity);
        Task<bool> ExistsNewsletterAsync(Month month, int year);
    }
}
