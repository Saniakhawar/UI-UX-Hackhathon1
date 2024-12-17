import React from 'react';

const Footer = () => {
  return (
    <footer
      className="bg-white dark:bg-gray-900"
      style={{
        width: "1440px",  // Set width to 1440px
        height: "480px",  // Set height to 480px
      }}
    >
      {/* Top Section with Bandage and Social Icons - Gray Background */}
      <div className="bg-gray-100 dark:bg-gray-800">
        <div className="mx-auto w-full max-w-screen-xl px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-white">Bandage</h1>
          <div className="flex space-x-4 rtl:space-x-reverse">
            {/* Social Media Icons */}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 8 19"
              >
                <path
                  fillRule="evenodd"
                  d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook</span>
            </a>

            {/* Twitter Icon */}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M23.944 4.569c-.883.391-1.83.656-2.818.777a4.928 4.928 0 0 0 2.164-2.723c-.925.548-1.957.94-3.052 1.153a4.92 4.92 0 0 0-8.457 4.492A13.98 13.98 0 0 1 1.67 3.149a4.918 4.918 0 0 0 1.522 6.571c-.786-.024-1.528-.242-2.173-.605v.061a4.918 4.918 0 0 0 3.949 4.827c-.528.145-1.08.222-1.648.222-.403 0-.796-.039-1.184-.114.794 2.482 3.103 4.29 5.85 4.335a9.864 9.864 0 0 1-6.125 2.115c-.398 0-.79-.023-1.176-.069a13.98 13.98 0 0 0 7.548 2.212c9.053 0 14.016-7.537 14.016-14.034 0-.214 0-.426-.014-.638.962-.697 1.798-1.566 2.45-2.564z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Twitter</span>
            </a>

            {/* Instagram Icon */}
            <a href="#" className="text-blue-500 hover:text-blue-700">
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2.163c3.204 0 3.574.012 4.826.07 1.239.059 2.226.248 3.09.512a5.96 5.96 0 0 1 2.17 1.364 5.963 5.963 0 0 1 1.365 2.17c.264.864.453 1.851.512 3.09.057 1.252.07 1.622.07 4.826s-.013 3.574-.07 4.826c-.059 1.239-.248 2.226-.512 3.09a5.963 5.963 0 0 1-1.365 2.17 5.96 5.96 0 0 1-2.17 1.364c-.864.264-1.851.453-3.09.512-1.252.057-1.622.07-4.826.07s-3.574-.013-4.826-.07c-1.239-.059-2.226-.248-3.09-.512a5.96 5.96 0 0 1-2.17-1.364 5.963 5.963 0 0 1-1.365-2.17c-.264-.864-.453-1.851-.512-3.09-.057-1.252-.07-1.622-.07-4.826s.013-3.574.07-4.826c.059-1.239.248-2.226.512-3.09a5.963 5.963 0 0 1 1.365-2.17 5.96 5.96 0 0 1 2.17-1.364c.864-.264 1.851-.453 3.09-.512 1.252-.058 1.622-.07 4.826-.07zm0 1.9c-3.178 0-3.512.01-4.736.068-1.133.057-2.092.247-2.883.539-.792.292-1.478.68-2.17 1.365-.693.692-1.073 1.478-1.365 2.17-.292.791-.482 1.75-.539 2.883-.058 1.224-.068 1.558-.068 4.736s.01 3.512.068 4.736c.057 1.133.247 2.092.539 2.883.292.792.68 1.478 1.365 2.17.692.693 1.478 1.073 2.17 1.365.791.292 1.75.482 2.883.539 1.224.058 1.558.068 4.736.068s3.512-.01 4.736-.068c1.133-.057 2.092-.247 2.883-.539.792-.292 1.478-.68 2.17-1.365.693-.692 1.073-1.478 1.365-2.17.292-.791.482-1.75.539-2.883.058-1.224.068-1.558.068-4.736s-.01-3.512-.068-4.736c-.057-1.133-.247-2.092-.539-2.883-.292-.792-.68-1.478-1.365-2.17-.692-.693-1.478-1.073-2.17-1.365-.791-.292-1.75-.482-2.883-.539-1.224-.058-1.558-.068-4.736-.068zm0 4.314c2.072 0 3.75 1.678 3.75 3.75s-1.678 3.75-3.75 3.75-3.75-1.678-3.75-3.75 1.678-3.75 3.75-3.75zm0 1.9c-.989 0-1.75.76-1.75 1.85s.76 1.85 1.75 1.85 1.85-.76 1.85-1.85-.76-1.85-1.85-1.85z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Sections - White Background */}
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 grid grid-cols-2 gap-8 md:grid-cols-4">
        {/* Company Info */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Company Info</h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">About Us</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Careers</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">We are hiring</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Blog</a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Licensing</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Features</h2>
          <ul className="text-gray-500 dark:text-gray-400">
            <li className="mb-4">
              <a href="#" className="hover:underline">Business Marketing</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">User Analytics</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Live Chat</a>
            </li>
            <li className="mb-4">
              <a href="#" className="hover:underline">Unlimited Support</a>
            </li>
          </ul>
        </div>

        {/* Get in Touch */}
        <div>
          <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Get in Touch</h2>
          <p className="text-gray-500 mb-4 dark:text-gray-400">
            Subscribe to our newsletter for the latest updates and news.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-sm rounded-l-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none dark:bg-gray-700 dark:text-white"
            />
            <button
              type="submit"
              className="p-2 bg-sky-500 text-white text-sm rounded-r-lg hover:bg-sky-600 focus:ring focus:ring-sky-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="px-4 py-6 bg-gray-100 dark:bg-gray-700 text-center">
        <span className="text-sm text-gray-500 dark:text-gray-300">
          © 2024 <a href="#" className="hover:underline"></a>. Made with Love by Finland. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
