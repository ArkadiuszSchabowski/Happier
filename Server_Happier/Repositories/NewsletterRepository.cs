using Server_Happier.Interfaces;
using Server_Happier_Database;
using Server_Happier_Database.Entities;
using Server_Shared.Enums;

namespace Server_Happier.Repositories
{
    public class NewsletterRepository : INewsletterRepository
    {
        private readonly MyDbContext _context;

        public NewsletterRepository(MyDbContext context)
        {
            _context = context;
        }

        public void AddNewsletterAsync(Newsletter entity)
        {
            _context.Newsletters.Add(entity);
            _context.SaveChanges();
        }

        public void AddSubscriberAsync(Subscribe dto)
        {
            _context.Subscribers.AddAsync(dto);
            _context.SaveChanges();
        }

        public void ExistsNewsletterAsync(Month month, int year)
        {
            throw new NotImplementedException();
        }
    }
}
