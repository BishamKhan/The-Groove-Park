import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t text-white py-12 px-6 md:px-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Join us for an<br />unforgettable experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-bold mb-2">LOCATION</h3>
                <p className="text-sm">
                  Al-Hizam Park<br />
                  Al-Sunaidi, Yanbu Al Bahr 46455<br />
                  Riyadh Saudi Arabia
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">WORKING HOURS</h3>
                <p className="text-sm">
                  Sun until Thurs: 4:00PM<br />
                  Fri & Sat: 2:30PM<br /><br />
                  Gates Close at:<br />
                  Sat until Wed: 12:00AM<br />
                  Thu & Fri: 12:30AM
                </p>
              </div>
              <div>
                <h3 className="text-sm font-bold mb-2">GUEST SERVICE CALL</h3>
                <p className="text-sm">
                  cc@thegroves-sa.com<br />
                  920001672<br /><br />
                  +966556631309
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold mb-2">DOWNLOAD THE GROVES APP</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="#" className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
                <svg viewBox="0 0 384 512" className="w-6 h-6 fill-current">
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
                <span>App Store</span>
              </Link>
              <Link href="#" className="bg-black text-white px-4 py-2 rounded-md flex items-center space-x-2">
                <svg viewBox="0 0 512 512" className="w-6 h-6 fill-current">
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"/>
                </svg>
                <span>Google Play</span>
              </Link>
            </div>
            <div className="flex space-x-4 mb-6">
            <img
                src="/assets/tiktok.png"
                className=" h-6 w-6 text-gray-400  "
              />
              <img
                src="/assets/insta.png"
                className=" h-6 w-6 text-gray-400  "
              />
              <img
                src="/assets/twitter x.png"
                className=" h-6 w-6 text-gray-400  "
              />
              <img
                src="/assets/snapchat.png"
                className=" h-6 w-6 text-gray-400  "
              />
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
          <img
              src="/assets/logo.png"
              alt="The Groves Logo"
              width={100}
              height={40}
              className="h-10 w-auto"
            />
            {/* <svg viewBox="0 0 100 30" className="w-32 h-12 fill-current text-[#c5a880]">
              <path d="M0 0h100v30H0z"/>
              <text x="10" y="20" fontFamily="serif" fontSize="16">The Groves</text>
            </svg> */}
          </div>
          <div className="flex space-x-4 text-sm">
            <Link href="#" className="hover:underline">Terms & Conditions</Link>
            <Link href="#" className="hover:underline">Privacy Policy</Link>
          </div>
          <div className="text-sm mt-4 md:mt-0">© 2023 The Groves for Entertainment</div>
          <div className="flex space-x-2 mt-4 md:mt-0">
          <img
                src="/assets/visa.png"
                className=" h-6 w-10  "
              />
          <img
                src="/assets/mastercard.png"
                className=" h-6 w-8  "
              />
          <img
                src="/assets/express.png"
                className=" h-6 w-6  "
              />
            {/* <svg viewBox="0 0 38 24" className="w-8 h-5"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#1a1f71"/></svg>
            <svg viewBox="0 0 38 24" className="w-8 h-5"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#eb001b"/><path d="M21.7 12c0-2.4-1.9-4.3-4.3-4.3-2.4 0-4.3 1.9-4.3 4.3 0 2.4 1.9 4.3 4.3 4.3 2.4 0 4.3-1.9 4.3-4.3z" fill="#f79e1b"/></svg>
            <svg viewBox="0 0 38 24" className="w-8 h-5"><path d="M35 0H3C1.3 0 0 1.3 0 3v18c0 1.7 1.4 3 3 3h32c1.7 0 3-1.3 3-3V3c0-1.7-1.4-3-3-3z" fill="#fff"/><path d="M35 1c1.1 0 2 .9 2 2v18c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3c0-1.1.9-2 2-2h32" fill="#006fcf"/></svg> */}
          </div>
        </div>
      </div>
    </footer>
  )
}