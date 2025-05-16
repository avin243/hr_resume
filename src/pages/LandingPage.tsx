import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Briefcase, 
  FileCheck, 
  UserSearch, 
  AlertTriangle, 
  BrainCircuit, 
  CheckCheck,
  LineChart,
  UsersRound
} from 'lucide-react';

import Navbar from '../components/layouts/Navbar';
import Footer from '../components/layouts/Footer';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const LandingPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-background to-primary-50 py-20 sm:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-primary-500">
                  AI-Powered Talent Evaluation for Modern HR Teams
                </h1>
                <p className="text-lg text-secondary-700 max-w-xl">
                  TalentSleuth AI analyzes resumes, validates online profiles, and provides AI-driven role fit scores to help you make data-driven hiring decisions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button size="lg" asChild>
                    <Link to="/signup">Get Started Free</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link to="#demo">Request Demo</Link>
                  </Button>
                </div>
                <div className="flex items-center text-sm text-secondary-600 pt-2">
                  <CheckCircle2 className="h-4 w-4 text-primary-500 mr-2" />
                  <span>No credit card required</span>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-xl hidden lg:block"
              >
                <img 
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="HR team reviewing candidate profiles using TalentSleuth AI" 
                  className="w-full h-auto rounded-lg"
                />
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Supercharge Your Hiring Process
              </h2>
              <p className="text-lg text-secondary-600">
                Our AI-powered platform helps HR teams find the perfect candidates faster with less effort.
              </p>
            </div>
            
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-100px" }}
            >
              {/* Feature 1 */}
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 mb-4">
                      <FileCheck className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Intelligent Resume Parsing</h3>
                    <p className="text-secondary-600">
                      Our AI extracts structured data from resumes in seconds, saving hours of manual work.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Accurate skill extraction</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Education & certification validation</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Work history timeline analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Feature 2 */}
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 mb-4">
                      <UserSearch className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Cross-Platform Profile Discovery</h3>
                    <p className="text-secondary-600">
                      Verify candidate information across LinkedIn, GitHub, and professional platforms.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Automatic profile matching</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Validate skills & experience</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Comprehensive online presence analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Feature 3 */}
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 mb-4">
                      <BrainCircuit className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">AI Role Matching</h3>
                    <p className="text-secondary-600">
                      Get instant fit scores comparing candidates to job descriptions with detailed analysis.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">0-100 match score with detailed breakdown</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Skill gap identification</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Customizable matching criteria</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Feature 4 */}
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 mb-4">
                      <AlertTriangle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Red Flag Detection</h3>
                    <p className="text-secondary-600">
                      Automatically identify inconsistencies and potential issues in candidate profiles.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Resume vs online profile discrepancies</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Frequent job-hopping detection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Employment gap analysis</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Feature 5 */}
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 mb-4">
                      <LineChart className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Talent Analytics Dashboard</h3>
                    <p className="text-secondary-600">
                      Get insights into your talent pipeline with powerful analytics and visualization.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Candidate comparison charts</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Skill distribution analysis</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Hiring process performance metrics</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Feature 6 */}
              <motion.div variants={fadeIn}>
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center text-primary-700 mb-4">
                      <UsersRound className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Team Collaboration</h3>
                    <p className="text-secondary-600">
                      Streamline team feedback and decision-making with collaborative tools.
                    </p>
                    <ul className="mt-4 space-y-2">
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Shared candidate pools</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Team feedback collection</span>
                      </li>
                      <li className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                        <span className="text-sm">Role-based access controls</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                How TalentSleuth AI Works
              </h2>
              <p className="text-lg text-secondary-600">
                Our platform streamlines every step of the candidate evaluation process
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Step 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mb-6">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Upload Resumes</h3>
                <p className="text-secondary-600">
                  Simply upload candidate resumes in PDF, DOCX, or TXT format. Our AI instantly extracts and structures all relevant information.
                </p>
              </motion.div>
              
              {/* Step 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mb-6">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Analysis</h3>
                <p className="text-secondary-600">
                  Our AI performs deep analysis on each candidate, cross-referencing online profiles and validating their background.
                </p>
              </motion.div>
              
              {/* Step 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center"
              >
                <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 mb-6">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Make Better Decisions</h3>
                <p className="text-secondary-600">
                  Review AI-generated insights, role fit scores, and red flags to make data-driven hiring decisions confidently.
                </p>
              </motion.div>
            </div>
            
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link to="/signup">Try It Now</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-lg text-secondary-600">
                Choose the plan that fits your team's needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Free Plan */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-secondary-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6 bg-secondary-50">
                  <h3 className="text-xl font-semibold text-secondary-900">Starter</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-secondary-900">Free</span>
                    <span className="ml-1 text-secondary-500">forever</span>
                  </div>
                  <p className="mt-2 text-sm text-secondary-500">
                    Perfect for small teams or individual recruiters
                  </p>
                </div>
                <div className="p-6 border-t border-secondary-200">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">10 resume uploads/month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Basic AI analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Resume parsing</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">1 user account</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" variant="outline" asChild>
                      <Link to="/signup">Get Started</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
              
              {/* Pro Plan */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border border-primary-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 bg-primary-500 text-white px-3 py-1 text-xs font-medium rounded-bl-lg">
                  Popular
                </div>
                <div className="p-6 bg-primary-50">
                  <h3 className="text-xl font-semibold text-secondary-900">Professional</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-secondary-900">$49</span>
                    <span className="ml-1 text-secondary-500">/month</span>
                  </div>
                  <p className="mt-2 text-sm text-secondary-500">
                    Ideal for growing recruitment teams
                  </p>
                </div>
                <div className="p-6 border-t border-secondary-200">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">100 resume uploads/month</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Advanced AI analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Red flag detection</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">5 user accounts</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Dashboard analytics</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full">
                      Start Free Trial
                    </Button>
                  </div>
                </div>
              </motion.div>
              
              {/* Enterprise Plan */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="border border-secondary-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <div className="p-6 bg-secondary-50">
                  <h3 className="text-xl font-semibold text-secondary-900">Enterprise</h3>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-3xl font-bold text-secondary-900">Custom</span>
                  </div>
                  <p className="mt-2 text-sm text-secondary-500">
                    For large organizations with custom needs
                  </p>
                </div>
                <div className="p-6 border-t border-secondary-200">
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Unlimited resume uploads</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Premium AI analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">ATS integration</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Unlimited users</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCheck className="h-5 w-5 text-primary-500 mr-2 shrink-0 mt-0.5" />
                      <span className="text-sm text-secondary-700">Dedicated support</span>
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Button className="w-full" variant="outline">
                      Contact Sales
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section id="testimonials" className="py-20 bg-secondary-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-secondary-900 mb-4">
                Trusted by HR Teams Worldwide
              </h2>
              <p className="text-lg text-secondary-600">
                See what our customers are saying about TalentSleuth AI
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary-200 mr-4 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Sarah Johnson" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Sarah Johnson</h4>
                    <p className="text-sm text-secondary-500">HR Director, TechCorp</p>
                  </div>
                </div>
                <p className="text-secondary-700">
                  "TalentSleuth AI has reduced our resume screening time by 70%. The AI analysis is incredibly accurate and helps us identify qualified candidates faster than ever."
                </p>
              </motion.div>
              
              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary-200 mr-4 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="David Chen" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">David Chen</h4>
                    <p className="text-sm text-secondary-500">Recruiting Manager, GrowthStartup</p>
                  </div>
                </div>
                <p className="text-secondary-700">
                  "The red flag detection feature has saved us from several bad hires. It caught discrepancies we would have missed in our manual review process."
                </p>
              </motion.div>
              
              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-2xl shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-secondary-200 mr-4 overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                      alt="Emily Rodriguez" 
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Emily Rodriguez</h4>
                    <p className="text-sm text-secondary-500">Talent Acquisition, EnterpriseInc</p>
                  </div>
                </div>
                <p className="text-secondary-700">
                  "Our team loves the candidate comparison dashboard. It makes it so easy to evaluate multiple candidates for the same role and make data-driven decisions."
                </p>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 bg-primary-500 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">
                Ready to Transform Your Hiring Process?
              </h2>
              <p className="text-lg mb-8 text-white/90">
                Join thousands of HR professionals using TalentSleuth AI to find the best talent faster.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="accent" asChild>
                  <Link to="/signup">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                  Schedule Demo
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LandingPage;