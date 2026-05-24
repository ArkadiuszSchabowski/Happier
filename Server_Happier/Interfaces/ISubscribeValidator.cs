using Server_Happier.Models;

namespace Server_Happier.Interfaces
{
    public interface ISubscribeValidator
    {
        void Validate(AddSubscribeDto dto);
    }
}
