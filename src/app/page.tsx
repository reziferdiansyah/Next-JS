import Header from "./components/Header";
import HomePage from "./pages/home";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="bg-green-500">
   {/* Header */}
    <Header/>
   
   {/* Home */}
    <HomePage/>

   {/* Footer */}
    <Footer/>
    </div>
  );
}
