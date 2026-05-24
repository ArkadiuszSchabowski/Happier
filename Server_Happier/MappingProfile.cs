using AutoMapper;
using Server_Happier.Models;
using Server_Happier_Database.Entities;

namespace Server_Happier
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<AddSubscribeDto, Subscribe>();
        }
    }
}
