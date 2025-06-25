import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8 w-full">
        {children}
      </main>
      <Footer />
    </div>
  );
} 