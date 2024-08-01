import Navbar from "./components/Navbar";

export default function Form() {
  return (
    <>
      <Navbar />
      <main className="bg-black w-full min-h-svh text-white">
        <section className="max-w-screen-sm mx-auto w-full px-3 py-40">
          <h1 className="text-5xl text-center font-bold">
            Apply for a Request
          </h1>
          <form className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-5">
            <div>
              <label>Your name</label>
              <br />
              <input
                type="text"
                required
                placeholder="Your Name"
                className="mt-2 w-full bg-black outline-2 outline-white focus:outline-dashed outline-offset-2 border border-white p-2"
              />
            </div>
            <div>
              <label>Email</label>
              <br />
              <input
                type="text"
                required
                placeholder="Your Email"
                className="mt-2 w-full bg-black outline-2 outline-white focus:outline-dashed outline-offset-2 border border-white p-2"
              />
            </div>
            <div>
              <label>Contact Number</label>
              <br />
              <input
                type="text"
                required
                placeholder="Your Number"
                className="mt-2 w-full bg-black outline-2 outline-white focus:outline-dashed outline-offset-2 border border-white p-2"
              />
            </div>
            <div>
              <label>How di you find Us?</label>
              <br />
              <select
                required
                className="mt-2 w-full bg-black outline-2 outline-white focus:outline-dashed outline-offset-2 border border-white p-2"
              >
                <option className="py-1">Facebook</option>
                <option className="py-1">LinkedIn</option>
                <option className="py-1">Instagram</option>
                <option className="py-1">TikTok</option>
              </select>
            </div>
            <div className="lg:col-span-2">
              <label>Requirements</label>
              <div className="flex flex-wrap gap-5 mt-3">
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Recruitment</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Payroll Service</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Administrative Support</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Immigration / Visa Processing</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Business Registration</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Accounting & Taxation</label>
                </div>
                <div>
                  <input type="checkbox" />
                  <label className="ml-4">Business Consultancy</label>
                </div>
              </div>
            </div>
            <div className="lg:col-span-2">
              <label>Description Brief</label>
              <br />
              <textarea
                rows={8}
                className="mt-2 w-full bg-black outline-2 outline-white focus:outline-dashed outline-offset-2 border border-white p-2"
              />
            </div>
            <button
              className="lg:col-span-2 w-full bg-white px-3 py-2 text-black"
              type="submit"
            >
              Submit
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
