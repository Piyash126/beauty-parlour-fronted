import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-pink-500 text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6">
        {/* Address */}
        <div>
          <div className="flex items-start space-x-2">
            <span className="text-xl">📍</span>
            <p className="text-sm leading-relaxed">
              H#000 (0th Floor), Road #00, <br />
              New DOHS, Mohakhali, Dhaka, Bangladesh
            </p>
          </div>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-bold mb-3">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Project
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Submit Listing
              </a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Quick Links
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Rentals
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Our Blog
              </a>
            </li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="font-bold mb-3">About us</h4>
          <p className="text-sm mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
            commodo ipsum duis laoreet maecenas. Feugiat
          </p>
          <div className="flex space-x-4 text-xl">
            <a href="#" className="hover:text-gray-200">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-gray-200">
              <FaYoutube />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
