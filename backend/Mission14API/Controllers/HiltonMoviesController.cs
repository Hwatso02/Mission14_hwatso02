using Microsoft.AspNetCore.Mvc;
using Mission14API.Collection;

namespace Mission14API.Controllers
{
    //setup API and path to controller
    [ApiController]
    [Route("[controller]")]
    public class HiltonMoviesController : Controller
    {
        private MovieDbContext context;
        public HiltonMoviesController(MovieDbContext temp) {
            context = temp;
        }

        public IEnumerable<HiltonMovies> Get()
        {
            return context.Movies
                //Filter movies shown
                .Where(m => m.Edited == "Yes")
                .OrderBy(m => m.Title)
                .ToArray();
        }
    }
}
