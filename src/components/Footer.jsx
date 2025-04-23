export default function Footer() {
return (
    <footer className="bg-gray-900 text-white py-16">
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
        <div>
        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
        <div className="flex space-x-6 mb-6">
            <a href="https://twitter.com" className="hover:text-blue-500">
            <i className="fab fa-twitter"></i> {/* You can use icons here */}
            </a>
            <a href="https://github.com" className="hover:text-blue-500">
            <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com" className="hover:text-blue-500">
            <i className="fab fa-linkedin"></i>
            </a>
        </div>
        
        <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
        <form action="#" method="POST">
            <input
            type="email"
            placeholder="Enter your email"
            className="p-3 text-gray-800 rounded-lg w-full mb-4"
            />
            <button type="submit" className="bg-blue-500 text-white px-6 py-3 rounded-full">
            Subscribe
            </button>
        </form>
        </div>
    </div>

    {/* Copyright */}
    <div className="text-center py-6 text-sm text-gray-400">
        <p>© 2025 Vercel, Inc. All rights reserved.</p>
    </div>
    </footer>
);
}