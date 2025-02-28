import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#19525A] text-white py-10 px-4 md:px-8 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* For Customers Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              For Customers
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="hover:underline border-l-2 border-teal-600 pl-2"
                >
                  Find a Practitioner
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Book an Appointment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Make Payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Live Consultant
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Shop
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Resources
                </a>
              </li>
            </ul>
          </div>

          {/* For Practitioners Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b-2 border-white  inline-block">
              For Practitioners
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Profile Setup
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Organization Setup
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Create Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Collaboration
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Withdraw
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Pay Staff
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  QR Code
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Booking page
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Business Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white inline-block">
              Resources
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Reviews
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Refund & Return
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Documentations
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Road Map
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white inline-block">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:underline">
                  About US
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Affiliate Program
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Trust and Safety
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12  border-gray-600 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <FaTwitter className="w-5 h-5" />
                  <span className="sr-only">Twitter</span>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <FaLinkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <FaFacebook className="w-5 h-5" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <FaInstagram className="w-5 h-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a href="#" className="hover:text-teal-300 transition-colors">
                  <FaYoutube className="w-5 h-5" />
                  <span className="sr-only">YouTube</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 pt-6 border-t border-teal-600 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm mb-4 md:mb-0">
            Copyright © {currentYear}. Ambel. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
