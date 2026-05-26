using Microsoft.AspNetCore.Mvc;
using Server_Happier.Interfaces;
using Server_Happier.Models;

namespace Server_Happier.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class NewsletterController : ControllerBase
    {
        private readonly INewsletterService _service;

        public NewsletterController(INewsletterService service)
        {
            _service = service;
        }
        [HttpPost]
        public async Task<ActionResult> Create(
            [FromBody] CreateNewsletterDto dto)
        {
            await _service.CreateAsync(dto);

            return Ok(new
            {
                message = $"Newsletter for month {dto.Month} created successfully."
            });
        }

        [HttpPost("subscribe")]
        public async Task<ActionResult> Subscribe([FromBody] AddSubscribeDto dto)
        {
            await _service.SubscribeAsync(dto);

            return Ok(new
            {
                message = "Subscribed successfully"
            });
        }
    }
}
