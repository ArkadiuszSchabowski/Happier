# 🌟 Happier - Badanie naukowe o małych nawykach i szczęściu

Witaj w projekcie **Happier**! To kompleksowe badanie naukowe zbudowane na bazie najnowszych odkryć neurobiologii i psychologii, którego celem jest pokazanie, że mały nawyk zmieniający 60% naszego dobrostanu może być tak prosty jak **10 minut dziennie**.

## 📚 O projekcie

Happier to inicjatywa badawcza, która bada wpływ mikro-nawyków na samopoczucie i jakość życia. Projekt łączy:

- Interfejs webowy (React)
- Formularz darowizn
- Newsletter
- Galeria ambasadorów badania
- Publikacje naukowe

## 🎯 Główne cele

- ✅ Pokazać, że systematyczne małe kroki prowadzą do dużych zmian
- ✅ Edukować na temat nawyków i zdrowia psychicznego
- ✅ Zbierać dane z badań prowadzonych przez uczestników
- ✅ Wspierać inicjatywę poprzez donacje

## 🏗️ Struktura projektu

```
Happier/
├── WebClient_Happier/          # Frontend aplikacji
│   ├── src/
│   │   ├── Components/
│   │   │   ├── Sections/       # Sekcje strony
│   │   │   │   ├── StartSection.tsx
│   │   │   │   ├── TestResultsSection.tsx
│   │   │   │   ├── HabitSection.tsx
│   │   │   │   ├── EbookSection.tsx
│   │   │   │   ├── NewsletterSection.tsx
│   │   │   │   ├── DotationsSection.tsx
│   │   │   │   ├── AmbassadorsSection.tsx
│   │   │   │   └── PatronitesSection.tsx
│   │   │   ├── layout/         # Komponenty layoutu
│   │   │   └── shared/         # Komponenty wspólne
│   │   ├── lib/                # Utility i konfiguracja
│   │   └── public/             # Assets (obrazy, ikony)
│   ├── package.json
│   ├── tailwind.config.js
│   └── tsconfig.json
└── Server_Happier/             # Backend aplikacji
    ├── Program.cs
    └── Server_Happier.csproj
```

## 🚀 Szybki start

### Wymagania

- Node.js 18+
- npm lub yarn
- .NET 6+ (do backendu)

### Instalacja i uruchomienie

```bash
# Przejdź do folderu projektu
cd WebClient_Happier

# Zainstaluj zależności
npm install

# Uruchom serwer entwickarki
npm run dev

# Aplikacja będzie dostępna na http://localhost:5173
```

## 📦 Zależności główne

- **React** - UI framework
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety
- **Swiper** - Carousel komponent
- **React Hook Form** - Zarządzanie formularzami
- **React Icons** - Popularne ikony SVG

## 🎨 Dostępne sekcje

| Sekcja             | Opis                                 |
| ------------------ | ------------------------------------ |
| **Start**          | Strona tytułowa z animowanym tekstem |
| **Wyniki Badania** | Statystyki i odkrycia naukowe        |
| **Nawyki**         | Karuzela przebadanych mikro-nawyków  |
| **Newsletter**     | Formularz subskrypcji                |
| **Ebook**          | Pobranie bezpłatnego przewodnika     |
| **Donacje**        | Formularz wsparcia finansowego       |
| **Ambasadorzy**    | Galeria ambasadorów projektu         |
| **Partnerzy**      | Patroni medialni i merytoryczni      |

## 🔧 Dostępne skrypty

```bash
# Frontend
npm run dev      # Uruchom server developmentu
npm run build    # Build do produkcji
npm run preview  # Podgląd build'u
npm run lint     # Sprawdzenie kodu ESLint
npm run format   # Formatowanie kodu

## 🎯 Responsywność

Projekt został zaprojektowany z myślą o **mobile-first** podejściu:
- ✅ Mobilne urządzenia (< 640px)
- ✅ Tablety (640px - 1024px)
- ✅ Komputery (> 1024px)
- ✅ Duże monitory (> 1920px)

Wszystkie komponenty wykorzystują Tailwind CSS breakpoints:
```

sm: 640px
md: 768px
lg: 1024px
xl: 1280px
2xl: 1536px

```

## 📱 Dostępne kolory brandowe

```

brandPurple: #8A38F5
brandBlue: #3D38F5
brandGreen: #198F51
brandYellow: #F3C11B

````

## 🔐 Zmienne środowiskowe

Utwórz plik `.env.local` w katalogu `WebClient_Happier`:

```env
VITE_API_URL=http://localhost:5000
VITE_APP_NAME=Happier
````

## 📄 Licencja

Ten projekt jest własnością Fundacji Szczęśliwsi. Proszę skontaktować się z zespołem projektowym w celu uzyskania informacji dotyczących licencji.

## #MałymiKrokami możemy być #Szczęśliwsi

---

**Dziękuję za zainteresowanie naszym projektem!** 🚀

Pamiętaj: Szczęście to umiejętność. Wystarczy 10 minut celowego działania dziennie, by wpłynąć na swoje środowisko, biologię i relacje.
