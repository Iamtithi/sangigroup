import Link from "next/link";
import {
  FaFacebook,
  FaLinkedin,
  FaYoutube,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer
      className="w-full text-gray-300 bg-gradient-to-b from-gray-900 via-gray-950 to-black"
      style={{ fontFamily: "'Golos Text', sans-serif" }}
    >
      {/* ---------- Combined CTA + Footer Container ---------- */}
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-20 space-y-16">
        {/* --- CTA --- */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white mb-4">
            Let&apos;s Build Something Together
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 leading-relaxed mb-8 text-sm sm:text-base">
            Have any questions, project ideas, or business inquiries?
            <br className="hidden sm:block" />
            Our team is always ready to collaborate and provide tailored
            solutions. Don&apos;t hesitate — we&apos;re one click away from turning your
            ideas into reality.
          </p>
          <Link href="/contact">
            <Button
              variant="secondary"
              className="bg-white text-black hover:bg-gray-200 text-sm sm:text-base rounded-full px-8 py-3"
            >
              Get in Touch
            </Button>
          </Link>
        </div>

        {/* --- Footer Content --- */}
        <div className="grid grid-cols-1 text-center sm:text-left md:grid-cols-3 gap-10 border-t border-gray-700 pt-14">
          {/* SANGI GROUP INFO */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
               SAN Global Industries Limited
            </h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              At SANGi Group, our mission and vision guide every initiative — enhancing lives, empowering communities and building a sustainable future through innovation, integrity, and excellence. We aim to lead as a responsible, innovative and sustainable business group, creating lasting value for communities, clients and industries worldwide.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link
                  href="/services/san-motors"
                  className="hover:text-white transition-colors"
                >
                  SAN Motor&apos;s Limited
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sangi-trade"
                  className="hover:text-white transition-colors"
                >
                  SANGi Trade International
                </Link>
              </li>
              <li>
                <Link
                  href="/services/sangi-properties"
                  className="hover:text-white transition-colors"
                >
                  SANGi Properties & Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/san-safety-footwear"
                  className="hover:text-white transition-colors"
                >
                  San Safety Footwear Industries
                </Link>
              </li>
              <li>
                <Link
                  href="/services/central-shariah-board"
                  className="hover:text-white transition-colors"
                >
                  Central Shariah Board of SANGi Group
                </Link>
              </li>
              <li>
                <Link
                  href="/services/global-care-foundation"
                  className="hover:text-white transition-colors"
                >
                  SAN Global Care Foundation
                </Link>
              </li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <span className="text-white font-medium">
                  Corporate Office:
                </span>
                <br />
                House 35, 3rd Floor, Bijoynagar, Palton, Dhaka-1000
              </li>
              <li>
                <span className="text-white font-medium">Head Office:</span>
                <br />
                House 47, Siraj Market, Ranavola, Turag, Uttara, Dhaka-1230
              </li>
              <li>
                <span className="text-white font-medium">Phone:</span>
                <br />+880 1730-718300 / +880 2226-665598
              </li>
              <li>
                <span className="text-white font-medium">Email:</span>
                <br />
                info@sangibd.com 
              </li>
            </ul>
          </div>
        </div>

        {/* --- Social + Bottom Line --- */}
        <div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-800 pt-8 text-sm text-gray-500">
          <div className="flex items-center gap-5 text-xl mb-4 md:mb-0">
            <a
              href="https://www.facebook.com/share/19xy7eNViE/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaFacebook />
            </a>
            <a
              href="https://linkedin.com/company/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://twitter.com/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com/sangigroup"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/@SanMotors2012"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              <FaYoutube />
            </a>
          </div>

          <small className="text-center md:text-right">
            © {new Date().getFullYear()} SAN Global Industries Limited — All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}