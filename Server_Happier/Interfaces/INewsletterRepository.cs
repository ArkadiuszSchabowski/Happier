using Server_Happier_Database.Entities;
using Server_Shared.Enums;

namespace Server_Happier.Interfaces
{
    public interface INewsletterRepository
    {
        void AddNewsletterAsync(Newsletter entity);
        void AddSubscriberAsync(Subscribe entity);
        void ExistsNewsletterAsync(Month month, int year);
    }
}
