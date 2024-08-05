using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Portfolio.Data;
using Portfolio.Models;

namespace LikeApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LikesController : ControllerBase
    {
        private readonly LikeContext _context;

        public LikesController(LikeContext context)
        {
            _context = context;
        }

        [HttpGet("{projectName}")]
        public async Task<ActionResult<Like>> GetLike(string projectName)
        {
            var like = await _context.Likes.SingleOrDefaultAsync(l => l.ProjectName == projectName);

            if (like == null)
            {
                return NotFound();
            }

            return like;
        }

        [HttpPost]
        public async Task<ActionResult<Like>> PostLike([FromBody] Like like)
        {
            var existingLike = await _context.Likes.SingleOrDefaultAsync(l => l.ProjectName == like.ProjectName);
            if (existingLike != null)
            {
                return BadRequest("Project already exists.");
            }

            like.Count = 1;
            _context.Likes.Add(like);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetLike), new { projectName = like.ProjectName }, like);
        }

        [HttpPut("{projectName}")]
        public async Task<IActionResult> PutLike(string projectName)
        {
            var like = await _context.Likes.SingleOrDefaultAsync(l => l.ProjectName == projectName);
            if (like == null)
            {
                return NotFound();
            }

            like.Count++;
            _context.Entry(like).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LikeExists(projectName))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{projectName}")]
        public async Task<IActionResult> DeleteLike(string projectName)
        {
            var like = await _context.Likes.SingleOrDefaultAsync(l => l.ProjectName == projectName);
            if (like == null)
            {
                return NotFound();
            }

            if (like.Count > 0)
            {
                like.Count--;
                _context.Entry(like).State = EntityState.Modified;

                try
                {
                    await _context.SaveChangesAsync();
                }
                catch (DbUpdateConcurrencyException)
                {
                    if (!LikeExists(projectName))
                    {
                        return NotFound();
                    }
                    else
                    {
                        throw;
                    }
                }
            }

            return NoContent();
        }

        private bool LikeExists(string projectName)
        {
            return _context.Likes.Any(e => e.ProjectName == projectName);
        }
    }
}
