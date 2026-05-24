using AutoMapper;
using Server_Happier.Interfaces;
using Server_Happier.Models;
using Server_Happier_Database.Entities;

namespace Server_Happier.Services
{
    public class NewsletterService : INewsletterService
    {
        private readonly ITextNormalizer _textNormalizer;
        private readonly INewsletterRepository _newsletterRepository;
        private readonly IMapper _mapper;

        public NewsletterService(ITextNormalizer textNormalizer, INewsletterRepository newsletterRepository, IMapper mapper)
        {
            _textNormalizer = textNormalizer;
            _newsletterRepository = newsletterRepository;
            _mapper = mapper;
        }
        public Task SubscribeAsync(AddSubscribeDto dto)
        {
            _textNormalizer.Normalize(dto.Email);

            Subscribe subscribeEntity = _mapper.Map<Subscribe>(dto);

            _newsletterRepository.AddSubscriberAsync(subscribeEntity);

            return Task.CompletedTask;
        }
    }
}
