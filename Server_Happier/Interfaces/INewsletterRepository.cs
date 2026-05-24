using Server_Happier_Database.Entities;

namespace Server_Happier.Interfaces
{
    public interface INewsletterRepository
    {
        void AddSubscriberAsync(Subscribe entity);
    }
}
