using AutoMapper;
using Server_Happier.Exceptions;
using Server_Happier.Interfaces;
using Server_Happier.Models;
using Server_Happier_Database.Entities;

namespace Server_Happier.Services
{
    public class NewsletterService : INewsletterService
    {
        private readonly ITextNormalizer _textNormalizer;
        private readonly INewsletterRepository _newsletterRepository;
        private readonly ISubscribeValidator _subscribeValidator;
        private readonly INewsletterValidator _newsletterValidator;
        private readonly IMapper _mapper;

        public NewsletterService(ITextNormalizer textNormalizer, INewsletterRepository newsletterRepository, ISubscribeValidator subscribeValidator, INewsletterValidator newsletterValidator, IMapper mapper)
        {
            _textNormalizer = textNormalizer;
            _newsletterRepository = newsletterRepository;
            _subscribeValidator = subscribeValidator;
            _newsletterValidator = newsletterValidator;
            _mapper = mapper;
        }

        public Task CreateAsync(CreateNewsletterDto dto)
        {
            _newsletterValidator.Validate(dto);

            bool exists = await _repository.ExistsNewsletterAsync(dto.Month, dto.Year);

            if (exists)
            {
                throw new BadRequestException(
                    $"A newsletter for {dto.Month} {dto.Year} already exists.");
            }

            Newsletter entity = _mapper.Map<Newsletter>(dto);

            _newsletterRepository.AddNewsletterAsync(entity);

            return Task.CompletedTask;
        }

        public Task SubscribeAsync(AddSubscribeDto dto)
        {
            _textNormalizer.Normalize(dto.Email);

            _subscribeValidator.Validate(dto);

            Subscribe entity = _mapper.Map<Subscribe>(dto);

            _newsletterRepository.AddSubscriberAsync(entity);

            return Task.CompletedTask;
        }
    }
}
