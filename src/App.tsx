import { Layout } from "./components/Layout";
import { useHashRoute } from "./hooks/useHashRoute";
import { HomePage } from "./pages/HomePage";
import { RoutesPage } from "./pages/RoutesPage";
import { OnDemandPage } from "./pages/OnDemandPage";
import { AboutPage } from "./pages/AboutPage";
import { PricingPage } from "./pages/PricingPage";
import { ContactPage } from "./pages/ContactPage";

export default function App() {
  const { path, navigate } = useHashRoute("");
  const playClick = () => {};

  const renderPage = () => {
    switch (path) {
      case "trasy":
        return <RoutesPage />;
      case "na-zamowienie":
        return <OnDemandPage onNavigate={navigate} playClick={playClick} />;
      case "o-nas":
        return <AboutPage />;
      case "cennik":
        return <PricingPage onNavigate={navigate} playClick={playClick} />;
      case "kontakt":
        return <ContactPage />;
      default:
        return <HomePage onNavigate={navigate} playClick={playClick} />;
    }
  };

  return (
    <Layout path={path} navigate={navigate}>
      {renderPage()}
    </Layout>
  );
}
