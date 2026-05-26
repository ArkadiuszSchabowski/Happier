using Server_Happier.Exceptions;
using Server_Happier.Interfaces;
using Server_Happier.Models;
using Server_Shared.Enums;

namespace Server_Happier.Validators
{
    public class NewsletterValidator : INewsletterValidator
    {
        public void Validate(CreateNewsletterDto dto)
        {
            if (dto == null)
            {
                throw new BadRequestException(
                    "Newsletter data was not provided.");
            }

            if (string.IsNullOrWhiteSpace(dto.Name))
            {
                throw new BadRequestException(
                    "Please enter a newsletter title.");
            }

            if (dto.Name.Length < 3 || dto.Name.Length > 50)
            {
                throw new BadRequestException(
                    "Newsletter title must contain between 3 and 50 characters.");
            }

            if (string.IsNullOrWhiteSpace(dto.Content))
            {
                throw new BadRequestException(
                    "Please enter newsletter content.");
            }

            if (dto.Content.Length < 200 || dto.Content.Length > 5000)
            {
                throw new BadRequestException(
                    "Newsletter content must contain between 200 and 5000 characters.");
            }

            if (string.IsNullOrWhiteSpace(dto.Author))
            {
                throw new BadRequestException(
                    "Please enter the author name.");
            }

            if (dto.Author.Length < 3 || dto.Author.Length > 50)
            {
                throw new BadRequestException(
                    "Author name must contain between 3 and 50 characters.");
            }

            if (!Enum.IsDefined(typeof(Month), dto.Month))
            {
                throw new BadRequestException(
                    "Please select a valid month.");
            }

            if (dto.Year < 2020 || dto.Year > 2100)
            {
                throw new BadRequestException(
                    "Please enter a valid year.");
            }
        }
    }
}
