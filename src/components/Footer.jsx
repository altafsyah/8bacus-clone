export default function Footer() {
  return (
    <footer className="w-full bg-white">
      <div className="bg-white w-full p-10">
        <ul className="layout grid grid-cols-1 lg:grid-cols-4 place-items-center gap-10 p-10 text-center lg:text-left">
          <li className="text-sm self-start">
            <div className="w-fit h-[70px] relative">
              <img
                src="/top-logo-head.png"
                alt="Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <p className="text-sm font-medium mt-4">
              We go beyond services; we provide solutions that empower your
              business to thrive.
            </p>
            <h2 className="mt-3 font-bold">Company landline number</h2>
            <p>02-53104708</p>
          </li>
          <li>
            <h2 className="text-lg font-bold">Our Services</h2>
            <ul className="mt-5 text-sm flex flex-col gap-1">
              <li>
                <a href="/request">Recruitment</a>
              </li>
              <li>
                <a href="/request">Payroll Services</a>
              </li>
              <li>
                <a href="/request">Administrative Support</a>
              </li>
              <li>
                <a href="/request">Immigration / Visa Processing</a>
              </li>
              <li>
                <a href="/request">Business Registration</a>
              </li>
              <li>
                <a href="/request">Accounting & Taxation</a>
              </li>
              <li>
                <a href="/request">Business Consultacy</a>
              </li>
            </ul>
          </li>
          <li className="self-start">
            <h2 className="text-lg font-bold">Legal</h2>
            <ul className="mt-5 text-sm flex flex-col gap-1">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms-and-condition/request">Terms and Conditions</a>
              </li>
            </ul>
          </li>
          <li className="self-start">
            <ul className="flex flex-row lg:flex-col gap-3">
              <li>
                <a href="https://www.facebook.com/8Bacusinc/">
                  <img src="/icon-fb.png" className="h-7 w-auto" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/8bacus/">
                  <img src="/icon-insta.png" className="h-7 w-auto" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/8bacus-inc/">
                  <img src="/icon-link.png" className="h-7 w-auto" />
                </a>
              </li>
              <li>
                <a href="https://www.tiktok.com/@8bacus.inc">
                  <img src="/icon-tik.png" className="h-7 w-auto" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
      <div className="bg-orange-400 w-full pt-16 pb-5 text-center text-sm font-bold">
        <p>©8Bacus Corporation 2024, All rights reserved.</p>
      </div>
      <div className="w-full py-5 bg-black"></div>
    </footer>
  );
}
