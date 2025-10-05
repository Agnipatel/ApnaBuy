import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-6 border-b border-gray-700">
        <div className="mb-4 md:mb-0">
          <Image
            src="/amazon-logo.png"
            alt="Amazon Logo"
            width={120}
            height={40}
          />
        </div>

        <div className="flex space-x-2">
          <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition">
            🌐 English
          </button>
          <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition">
            $ USD - U.S. Dollar
          </button>
          <button className="bg-gray-800 px-3 py-1 rounded hover:bg-gray-700 transition">
            🇺🇸 United States
          </button>
        </div>
      </div>

      {/* Link Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-6 px-6 py-8 border-b border-gray-700">
        <div>
          <h4 className="font-semibold mb-1">Amazon Music</h4>
          <p className="text-gray-400 text-sm">Stream millions of songs</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Amazon Ads</h4>
          <p className="text-gray-400 text-sm">
            Reach customers wherever they spend their time
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">6pm</h4>
          <p className="text-gray-400 text-sm">Score deals on fashion brands</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">AbeBooks</h4>
          <p className="text-gray-400 text-sm">Books, art & collectibles</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">ACX</h4>
          <p className="text-gray-400 text-sm">Audiobook Publishing Made Easy</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Sell on Amazon</h4>
          <p className="text-gray-400 text-sm">Start a Selling Account</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Amazon Business</h4>
          <p className="text-gray-400 text-sm">Everything For Your Business</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">AmazonGlobal</h4>
          <p className="text-gray-400 text-sm">Ship Orders Internationally</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">AWS</h4>
          <p className="text-gray-400 text-sm">Scalable Cloud Computing Services</p>
        </div>
        <div>
          <h4 className="font-semibold mb-1">Audible</h4>
          <p className="text-gray-400 text-sm">
            Listen to Books & Original Audio Performances
          </p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-4 text-gray-400 text-sm">
        <div className="flex flex-wrap gap-4 mb-2 md:mb-0">
          <a href="#" className="hover:underline">
            Conditions of Use
          </a>
          <a href="#" className="hover:underline">
            Privacy Notice
          </a>
          <a href="#" className="hover:underline">
            Consumer Health Data Privacy Disclosure
          </a>
          <a href="#" className="hover:underline">
            Your Ads Privacy Choices
          </a>
        </div>
        <p>© 1996-2025, Amazon.com, Inc. or its affiliates</p>
      </div>
    </footer>
  );
}
