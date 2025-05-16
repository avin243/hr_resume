import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Twitter, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary-50 border-t border-secondary-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-primary-500" />
              <span className="text-lg font-bold text-primary-500">TalentSleuth AI</span>
            </div>
            <p className="text-secondary-600 text-sm">
              AI-powered talent analysis platform helping HR teams make better hiring decisions with advanced resume parsing and candidate evaluation.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-secondary-500 hover:text-primary-500" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-500 hover:text-primary-500" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-secondary-500 hover:text-primary-500" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="mailto:info@talentsleuth.ai" className="text-secondary-500 hover:text-primary-500" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-800 mb-4">
              Product
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/#features" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Features
                </Link>
              </li>
              <li>
                <Link to="/#pricing" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/login" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-800 mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-secondary-600 hover:text-primary-500 text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-800 mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/data-processing" className="text-secondary-600 hover:text-primary-500 text-sm">
                  Data Processing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-secondary-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-secondary-500">
              &copy; {new Date().getFullYear()} TalentSleuth AI. All rights reserved.
            </p>
            <p className="text-sm text-secondary-500 mt-2 md:mt-0">
              Made with ❤️ for modern HR teams
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;