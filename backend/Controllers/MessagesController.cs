using Microsoft.AspNetCore.Mvc;
using backend.Data;
using backend.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagesController : ControllerBase
    {
        private readonly AppDbContext _context;

        public MessagesController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Message>>> GetMessages()
        {
            return await _context.Messages.OrderBy(m => m.CreatedAt).ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Message>> PostMessage(Message message)
        {
            if (string.IsNullOrWhiteSpace(message.Text))
                return BadRequest("Message cannot be empty.");

            _context.Messages.Add(message);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMessages), new { id = message.Id }, message);
        }
    }
}