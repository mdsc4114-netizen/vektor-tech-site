import { Toaster } from "sonner";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import NotFound from "./pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";
import CriadoresConteudo from "./pages/CriadoresConteudo";
import ProfissionaisLiberais from "./pages/ProfissionaisLiberais";
import PequenasMediasEmpresas from "./pages/PequenasMediasEmpresas";


function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/criadores-de-conteudo" component={CriadoresConteudo} />
      <Route path="/profissionais-liberais" component={ProfissionaisLiberais} />
      <Route path="/pequenas-e-medias-empresas" component={PequenasMediasEmpresas} />
      <Route path="/404" component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <LanguageProvider>
          <TooltipProvider>
            <Toaster />
            <Router />
            <WhatsAppButton />
          </TooltipProvider>
        </LanguageProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
