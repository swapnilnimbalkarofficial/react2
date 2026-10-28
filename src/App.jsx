import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />
      <main>
        <Home />
      </main>
      <Footer />
    </div>
  );
}
