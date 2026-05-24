using Server_Happier.Interfaces;

namespace Server_Happier.Helpers
{
    public class TextNormalizer : ITextNormalizer
    {
        public string Normalize(string text)
        {
            return text.Normalize().ToLowerInvariant();
        }
    }
}
