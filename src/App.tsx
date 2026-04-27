import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuoteModalProvider } from "./components/QuoteModal";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Review from "./pages/Review";
import ServicePage from "./pages/ServicePage";
import ServiceAreaPage from "./pages/ServiceAreaPage";
import GetYourDiscount from "./pages/GetYourDiscount";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <QuoteModalProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/review" element={<Review />} />
            <Route path="/services/:slug" element={<ServicePage />} />
            <Route path="/service-areas/:slug" element={<ServiceAreaPage />} />
            <Route path="/get-your-discount" element={<GetYourDiscount />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </QuoteModalProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
