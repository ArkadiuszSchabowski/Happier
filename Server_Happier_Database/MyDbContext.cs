using Microsoft.EntityFrameworkCore;
using Server_Happier_Database.Entities;

namespace Server_Happier_Database
{
    public class MyDbContext : DbContext
    {
        public DbSet<Subscribe> Subscribers { get; set; }

        public MyDbContext(DbContextOptions<MyDbContext> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Subscribe>(entity =>
            {
                entity.Property(x => x.Email)
                    .IsRequired();

                entity.HasIndex(x => x.Email)
                    .IsUnique();
            });
        }
    }
}
