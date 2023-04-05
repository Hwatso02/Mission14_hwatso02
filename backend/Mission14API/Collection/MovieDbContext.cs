using Microsoft.EntityFrameworkCore;

namespace Mission14API.Collection
{
    //Inherits from DbContext file
    public class MovieDbContext : DbContext
    {
        public MovieDbContext(DbContextOptions<MovieDbContext> options) : base(options) { }

        public DbSet<HiltonMovies> Movies { get; set; }
    }
}
