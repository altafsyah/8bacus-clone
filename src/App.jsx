/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <aside className="fixed left-5 text-gray-300 z-20 top-1/2 -translate-y-1/2">
        <ul className="flex flex-col gap-3">
          <li className="hover:translate-x-3 transition-transform duration-300"><img src="/facebook-brands-solid.svg" className="h-6"/></li>
          <li className="hover:translate-x-3 transition-transform duration-300"><img src="/instagram-brands-solid.svg" className="h-6"/></li>
          <li className="hover:translate-x-3 transition-transform duration-300"><img src="/linkedin-brands-solid.svg" className="h-6"/></li>
        </ul>
      </aside>
      <main className="min-h-svh">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
