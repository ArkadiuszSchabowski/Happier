using Microsoft.EntityFrameworkCore;
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

        public async Task AddNewsletterAsync(Newsletter entity)
        {
            await _context.Newsletters.AddAsync(entity);
            _context.SaveChanges();
        }

        public async Task AddSubscriberAsync(Subscribe dto)
        {
            await _context.Subscribers.AddAsync(dto);
            _context.SaveChanges();
        }

        public async Task<bool> ExistsNewsletterAsync(Month month, int year)
        {
            return await _context.Newsletters.AnyAsync(x => x.Month == month && x.Year == year);
        }
    }
}
