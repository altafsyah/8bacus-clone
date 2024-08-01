/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function CareerModal({ toggle }) {
  return (
    <motion.div
      initial={{
        scale: 0,
      }}
      animate={{
        scale: 1,
      }}
      exit={{
        scale: 0,
      }}
        onClick={toggle}
      className="w-screen h-screen top-0 left-0 fixed bg-black/30 backdrop-blur-sm z-[99] flex justify-center items-center p-5"
      id="modalll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="layout p-5 bg-white rounded w-full max-h-[60vh] overflow-y-scroll"
      >
        <h2 className="font-bold">Job Title</h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          suscipit lacus eu est placerat convallis. Nullam dapibus elit at
          auctor blandit. Nullam a consectetur sapien.
        </p>
        <h2 className="font-bold mt-3">Job Description</h2>
        <p className="text-sm mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          suscipit lacus eu est placerat convallis. Nullam dapibus elit at
          auctor blandit. Nullam a consectetur sapien.
        </p>
        <ul className="text-sm list-disc list-inside mt-3">
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
        <div className="flex justify-between items-center mt-10">
          <button className="px-5 py-2 bg-orange-400 border border-orange-600 hover:border-white hover:text-white font-semibold rounded">
            Apply now
          </button>
          <ul className="flex gap-3">
            <li>
              <img src="/facebook.png" className="h-10" />
            </li>
            <li>
              <img src="/linkedin.png" className="h-10" />
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
