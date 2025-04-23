import xLogo from "/src/assets/logos/X.svg";
import instagramLogo from "/src/assets/logos/instagram.svg";
import linkedinLogo from "/src/assets/logos/linkedin.svg";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16 w-full"> {/* Ensure full width */}
      <div className="max-w-6xl mx-auto px-6 sm:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Company Info */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Company</h4>
          <ul>
            <li><a href="#about" className="hover:text-blue-500">About Us</a></li>
            <li><a href="#careers" className="hover:text-blue-500">Careers</a></li>
            <li><a href="#blog" className="hover:text-blue-500">Blog</a></li>
            <li><a href="#privacy" className="hover:text-blue-500">Privacy Policy</a></li>
            <li><a href="#terms" className="hover:text-blue-500">Terms of Service</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul>
            <li><a href="#docs" className="hover:text-blue-500">Documentation</a></li>
            <li><a href="#api" className="hover:text-blue-500">API Reference</a></li>
            <li><a href="#tutorials" className="hover:text-blue-500">Tutorials</a></li>
            <li><a href="#community" className="hover:text-blue-500">Community</a></li>
          </ul>
        </div>

        {/* Social Media & Newsletter */}
        <div className ="flex flex-col items-center">
          <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6 mb-6">
            <a href="https://x.com/netlabdteftui" className="hover:text-blue-500">
              <img src={xLogo} alt="X" className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/netlab-dte-ftui-849307199" className="hover:text-blue-500">
            <img src={linkedinLogo} alt="X" className="w-6 h-6" />
            </a>
            <a href="https://www.instagram.com/netlab.dteftui/" className="hover:text-blue-500">
            <img src={instagramLogo} alt="X" className="w-6 h-6" />
            </a>
          </div>
          
          <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
          <form action="#" method="POST">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 text-white-800 rounded-lg w-full mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Extend footer background */}
      <div className="bg-gray-900 h-12"></div> {/* Add extra height */}
      
      {/* Copyright */}
      <div className="text-center py-6 text-sm text-gray-400">
        <p>© 2025 Vercel, Inc. All rights reserved.</p>
      </div>
    </footer>
  );
}