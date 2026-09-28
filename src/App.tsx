import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Support from "./pages/Support";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";
import UfabcNext from "./pages/UfabcNext";
import UfabcParser from "./pages/UfabcParser";
import TamanduAi from "./pages/TamanduAi";
import AuloesNext from "./pages/AuloesNext";
import UfabcCronos from "./pages/UfabcCronos";
import Status from "./pages/Status";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Communications from "./pages/Communications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/ufabc-next" element={<UfabcNext />} />
          <Route path="/ufabc-parser" element={<UfabcParser />} />
          <Route path="/ufabc-cronos" element={<UfabcCronos />} />
          <Route path="/auloes-next" element={<AuloesNext />} />
          <Route path="/tamanduai" element={<TamanduAi />} />
          <Route path="/communications" element={<Communications />} />
          <Route path="/status" element={<Status />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;