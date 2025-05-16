import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Search, Bell, User, LogOut, Briefcase } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/button';
import { logoutUser } from '../../lib/firebase';
import { motion, AnimatePresence } from 'framer-motion';
import { useToast } from '../ui/use-toast';

const Navbar = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleLogout = async () => {
    try {
      await logoutUser();
      toast({
        title: "Logged out",
        description: "You have been successfully logged out.",
      });
      navigate('/');
    } catch (error) {
      console.error("Logout error:", error);
      toast({
        title: "Logout failed",
        description: "There was an error logging out. Please try again.",
        variant: "destructive",
      });
    }
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white border-b border-secondary-100 sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-primary-500">TalentSleuth AI</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {currentUser ? (
              <>
                <Link to="/dashboard" className="text-secondary-700 hover:text-primary-500 font-medium">
                  Dashboard
                </Link>
                <Link to="/job-upload" className="text-secondary-700 hover:text-primary-500 font-medium">
                  Job Upload
                </Link>
                <Link to="/compare" className="text-secondary-700 hover:text-primary-500 font-medium">
                  Compare Candidates
                </Link>
              </>
            ) : (
              <>
                <Link to="/#features" className="text-secondary-700 hover:text-primary-500 font-medium">
                  Features
                </Link>
                <Link to="/#pricing" className="text-secondary-700 hover:text-primary-500 font-medium">
                  Pricing
                </Link>
                <Link to="/#testimonials" className="text-secondary-700 hover:text-primary-500 font-medium">
                  Testimonials
                </Link>
              </>
            )}
          </nav>
          
          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            {currentUser ? (
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                    {currentUser.displayName?.charAt(0) || 'U'}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium block">{currentUser.displayName}</span>
                    <span className="text-xs text-secondary-500">{currentUser.role}</span>
                  </div>
                </div>
                <Button variant="ghost" size="icon" onClick={handleLogout}>
                  <LogOut className="h-5 w-5" />
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Button variant="outline" onClick={() => navigate('/login')}>
                  Log in
                </Button>
                <Button onClick={() => navigate('/signup')}>
                  Sign up
                </Button>
              </div>
            )}
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden"
          >
            <div className="px-4 py-5 border-t border-secondary-100 bg-white">
              <nav className="flex flex-col space-y-4">
                {currentUser ? (
                  <>
                    <Link 
                      to="/dashboard" 
                      className="text-secondary-700 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link 
                      to="/job-upload" 
                      className="text-secondary-700 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Job Upload
                    </Link>
                    <Link 
                      to="/compare" 
                      className="text-secondary-700 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Compare Candidates
                    </Link>
                    <div className="border-t border-secondary-100 my-2 py-2">
                      <div className="flex items-center space-x-3 py-2">
                        <div className="h-8 w-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
                          {currentUser.displayName?.charAt(0) || 'U'}
                        </div>
                        <div>
                          <span className="font-medium">{currentUser.displayName}</span>
                          <span className="text-sm text-secondary-500 block">{currentUser.email}</span>
                        </div>
                      </div>
                      <Button 
                        className="w-full mt-2" 
                        variant="outline"
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                      >
                        <LogOut className="h-4 w-4 mr-2" />
                        Log out
                      </Button>
                    </div>
                  </>
                ) : (
                  <>
                    <Link 
                      to="/#features" 
                      className="text-secondary-700 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Features
                    </Link>
                    <Link 
                      to="/#pricing" 
                      className="text-secondary-700 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Pricing
                    </Link>
                    <Link 
                      to="/#testimonials" 
                      className="text-secondary-700 font-medium py-2"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Testimonials
                    </Link>
                    <div className="border-t border-secondary-100 my-2 pt-4 grid grid-cols-2 gap-3">
                      <Button variant="outline" onClick={() => {
                        navigate('/login');
                        setIsMenuOpen(false);
                      }}>
                        Log in
                      </Button>
                      <Button onClick={() => {
                        navigate('/signup');
                        setIsMenuOpen(false);
                      }}>
                        Sign up
                      </Button>
                    </div>
                  </>
                )}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;