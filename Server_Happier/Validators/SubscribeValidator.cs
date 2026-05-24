using Server_Happier.Exceptions;
using Server_Happier.Interfaces;
using Server_Happier.Models;

namespace Server_Happier.Validators
{
    public class SubscribeValidator : ISubscribeValidator
    {
        public void Validate(AddSubscribeDto dto)
        {
            if(dto.Consent == false)
            {
                throw new BadRequestException("You must accept the consent.");
            }
        }
    }
}
