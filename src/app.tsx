import { Toaster } from "#components/ui/toaster";
import { Toaster as Sonner } from "#components/ui/sonner";
import { TooltipProvider } from "#components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DynamicTitle from "#components/dynamic-title";
import Index from "./pages/index";
import NotFound from "./pages/not-found";
import Team from "./pages/team";
import UfabcNext from "./pages/projects/ufabc-next";
import UfabcParser from "./pages/projects/ufabc-parser";
import TamanduAi from "./pages/projects/tamandu-ai";
import AuloesNext from "./pages/projects/auloes-next";
import UfabcCronos from "./pages/projects/ufabc-cronos";
import Status from "./pages/status";
import Blog from "./pages/blog";
import BlogPost from "./pages/blog-post";
import Communications from "./pages/projects/communications";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DynamicTitle />
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
