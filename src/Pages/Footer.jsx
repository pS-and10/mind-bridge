import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-teal-900 text-teal-100 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">
            MindBridge
          </h2>
          <p className="text-sm text-teal-200 leading-relaxed">
            Your mental wellness companion. We provide emotional health
            screening, guidance, and support resources for students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/screening" className="hover:text-white transition">
                Screening
              </Link>
            </li>
            <li>
              <Link to="/resources" className="hover:text-white transition">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/support" className="hover:text-white transition">
                Support
              </Link>
            </li>
          </ul>
        </div>

        {/* Support & Contact */}
        <div>
          <h3 className="font-semibold text-white mb-4">
            Contact & Help
          </h3>
          <ul className="space-y-2 text-sm">
            <li>Email: support@mindbridge.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
            <li>
              <a
                href="tel:18005990019"
                className="hover:text-white transition"
              >
                Emergency Helpline
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold text-white mb-4">
            Legal
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-white transition">
                Terms & Conditions
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Line */}
      <div className="border-t border-teal-800 text-center text-sm py-4 text-teal-300">
        © {new Date().getFullYear()} MindBridge. All rights reserved.
      </div>
    </footer>
  );
}
