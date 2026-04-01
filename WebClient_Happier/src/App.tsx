import { AmbassadorsSection } from "./Components/Sections/AmbassadorsSection";
import { EbookSection } from "./Components/Sections/EbookSection";
import { HabitSection } from "./Components/Sections/HabitSection";
import { DotationsSection } from "./Components/Sections/Dotations/DotationsSection";
import { NewsletterSection } from "./Components/Sections/Newsletter/NewsletterSection";
import { PatronitesSections } from "./Components/Sections/PatronitesSection";
import { StartSection } from "./Components/Sections/StartSection";
import { TestResultsSection } from "./Components/Sections/TestResultsSection";
import Footer from "./Components/layout/Footer/Footer";
import Header from "./Components/layout/Header/Header";

const App = () => {
  return (
    <>
      <Header />
      <StartSection />
      <TestResultsSection />
      <HabitSection />
      <NewsletterSection />
      <EbookSection />
      <DotationsSection />
      <AmbassadorsSection />
      <PatronitesSections />
      <Footer />
    </>
  );
};

export { App };
