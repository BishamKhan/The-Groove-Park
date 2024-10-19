import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t text-white py-8 px-6 md:py-12 md:px-12">
      <div className="container mx-auto">
        <div className="md:grid md:grid-cols-3 md:gap-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-primaryFont md:text-4xl  mb-6">
              Join us for an
              <br />
              unforgettable experience
            </h2>
            <div className="hidden md:grid md:grid-cols-3 font-secondaryFont  md:gap-8 mt-14">
              <div>
                <h3 className="text-sm mb-4">LOCATION</h3>
                <p className="text-sm">
                  Al-Hizam Park
                  <br />
                  Al-Sunaidi, Yanbu Al Bahr 46455
                  <br />
                  Riyadh Saudi Arabia
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-4">WORKING HOURS</h3>
                <p className="text-sm">
                  Sun until Thurs: 4:00PM
                  <br />
                  Fri & Sat: 2:30PM
                  <br />
                  <br />
                  Gates Close at:
                  <br />
                  Sat until Wed: 12:00AM
                  <br />
                  Thu & Fri: 12:30AM
                </p>
              </div>
              <div>
                <h3 className="text-sm mb-4">GUEST SERVICE CALL</h3>
                <p className="text-sm">
                  cc@thegroves-sa.com
                  <br />
                  920001672
                  <br />
                  <br />
                  +966556631309
                </p>
              </div>
            </div>
          </div>
          <div className="mt-8 md:mt-0">
            <h3 className="text-sm font-secondaryFont mb-2">DOWNLOAD THE GROVES APP</h3>
            <div className="flex space-x-4 mb-6">
              <Link
                href="#"
                className="bg-white text-black px-3 py-2 rounded-md flex items-center space-x-2"
              >
                <svg
                  viewBox="0 0 384 512"
                  className="w-6 h-6 text-black fill-current"
                >
                  {" "}
                  <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />{" "}
                </svg>
                <div className="font-secondaryFont " >
                  <p className="text-[10px] md:text-[12px] leading-tight">
                    Download on the
                  </p>
                  <p className="text-[14px] md:text-[18px] font-semibold">
                    App Store
                  </p>
                </div>
              </Link>
              <Link
                href="#"
                className="bg-white text-black px-3 py-2 rounded-md flex items-center space-x-2"
              >
                <img
                  src="/assets/google-play.png"
                  alt="Google Play logo"
                  width={24}
                  height={24}
                />
                <div className="font-secondaryFont " >
                  <p className="text-[10px] md:text-[12px] leading-tight">
                    GET IT ON
                  </p>
                  <p className="text-[14px] md:text-[18px] font-semibold">
                    Google Play
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile-only sections */}
        <div className="md:hidden space-y-8 mt-8 font-secondaryFont ">
          <div>
            <h3 className="text-sm mb-2">LOCATION</h3>
            <p className="text-sm">
              Al-Hizam Park
              <br />
              Al-Sunaidi, Yanbu Al Bahr 46455
              <br />
              Riyadh Saudi Arabia
            </p>
          </div>
          <div>
            <h3 className="text-sm mb-2">WORKING HOURS</h3>
            <p className="text-sm">
              Sun until Thurs: 4:00PM
              <br />
              Fri & Sat: 2:30PM
            </p>
            <p className="text-sm mt-2">
              Gates Close at:
              <br />
              Sat until Wed: 12:00AM
              <br />
              Thu & Fri: 12:30AM
            </p>
          </div>
          <div>
            <h3 className="text-sm mb-2">GUEST SERVICE CALL</h3>
            <p className="text-sm">
              cc@thegroves-sa.com
              <br />
              920001672
              <br />
              +966556631309
            </p>
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
          </div>
          <div className="flex space-x-4 mb-6 md:mb-0">
            <img src="/assets/tiktok.png" alt="TikTok" width={24} height={24} />
            <img
              src="/assets/insta.png"
              alt="Instagram"
              width={24}
              height={24}
            />
            <img
              src="/assets/twitter x.png"
              alt="Twitter/X"
              width={24}
              height={24}
            />
            <img
              src="/assets/snapchat.png"
              alt="Snapchat"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div className="mt-8 md:mt-12 flex flex-col md:flex-row justify-between  md:items-center items-left">
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 font-secondaryFont  text-sm text-left">
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <p className="" >© 2023 The Groves for Entertainment</p>
          </div>
          <div className="flex space-x-2 mt-8 md:mt-0 ">
            <img src="/assets/visa.png" alt="Visa" width={40} height={24} />
            <img
              src="/assets/mastercard.png"
              alt="Mastercard"
              width={24}
              height={24}
            />
            <img
              src="/assets/express.png"
              alt="American Express"
              width={24}
              height={24}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
