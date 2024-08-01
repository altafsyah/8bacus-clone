import clsx from "clsx";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = useLocation();
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    try {
      if (pathname.hash) {
        document.getElementById(`${pathname.hash}`).scrollIntoView();
      }
    } catch (e) {
      // console.log(e);
    }
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname.hash]);

  return (
    <>
      <nav
        className={clsx(
          "w-full bg-black text-white",
          "flex justify-between items-center",
          "p-5 2xl:px-28",
          "fixed top-0 z-50"
        )}
      >
        <a href="/" className="text-5xl">
          <img src="/top-logo-head.png" className="h-8 lg:h-12" />
        </a>
        <ul className="lg:flex hidden">
          <li>
            <a href="/" className="p-5 block">
              HOME
            </a>
          </li>
          <li>
            <a href="/#services" className="p-5 block">
              SERVICES
            </a>
          </li>
          <li>
            <a href="/#about" className="p-5 block">
              ABOUT US
            </a>
          </li>
          <li>
            <a href="/#events" className="p-5 block">
              EVENTS
            </a>
          </li>
          <li>
            <a href="/#careers" className="p-5 block">
              CAREERS
            </a>
          </li>
          <li>
            <a href="/#news" className="p-5 block">
              NEWS
            </a>
          </li>
          <li>
            <a href="/request" className="p-5 block">
              CONTACT US
            </a>
          </li>
        </ul>
        <button className="block lg:hidden" onClick={toggle}>
          <img src="/bars-solid.svg" className="h-6" />
        </button>
      </nav>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ left: -100, opacity: 0 }}
            animate={{ left: 0, opacity: 1 }}
            exit={{ left: -100, opacity: 0 }}
            className=" text-white lg:hidden max-w-sm w-full fixed top-0 left-0 h-screen flex flex-col justify-center gap-5 bg-black z-40"
          >
            <ul>
              <li>
                <a href="/" className="p-5 block">
                  HOME
                </a>
              </li>
              <li>
                <a href="/#services" className="p-5 block">
                  SERVICES
                </a>
              </li>
              <li>
                <a href="/#about" className="p-5 block">
                  ABOUT US
                </a>
              </li>
              <li>
                <a href="/#events" className="p-5 block">
                  EVENTS
                </a>
              </li>
              <li>
                <a href="/#careers" className="p-5 block">
                  CAREERS
                </a>
              </li>
              <li>
                <a href="/#news" className="p-5 block">
                  NEWS
                </a>
              </li>
              <li>
                <a href="/request" className="p-5 block">
                  CONTACT US
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
