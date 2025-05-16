import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Lock, User, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import { createUser } from '../lib/firebase';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { useToast } from '../components/ui/use-toast';
import LoadingSpinner from '../components/ui/loading-spinner';

interface SignupFormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignupPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch } = useForm<SignupFormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  });

  const onSubmit = async (data: SignupFormValues) => {
    try {
      setIsLoading(true);
      await createUser(data.email, data.password, data.fullName);
      toast({
        title: "Account created",
        description: "Welcome to TalentSleuth AI! Your account has been created successfully.",
      });
      navigate('/dashboard');
    } catch (error: any) {
      console.error("Signup error:", error);
      toast({
        title: "Signup failed",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const password = watch('password');

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary-50 flex flex-col">
      <header className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link to="/" className="flex items-center space-x-2">
            <Briefcase className="h-8 w-8 text-primary-500" />
            <span className="text-xl font-bold text-primary-500">TalentSleuth AI</span>
          </Link>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 sm:p-6 lg:p-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md"
        >
          <Card>
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl font-bold text-center">
                Create an account
              </CardTitle>
              <CardDescription className="text-center">
                Sign up to start using TalentSleuth AI
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-secondary-500" />
                    <Input
                      id="fullName"
                      placeholder="John Smith"
                      className="pl-10"
                      {...register("fullName", {
                        required: "Full name is required",
                      })}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-error">{errors.fullName.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-secondary-500" />
                    <Input
                      id="email"
                      placeholder="name@company.com"
                      className="pl-10"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address"
                        }
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-error">{errors.email.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-secondary-500" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be at least 8 characters"
                        }
                      })}
                    />
                  </div>
                  {errors.password && (
                    <p className="text-sm text-error">{errors.password.message}</p>
                  )}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-4 w-4 text-secondary-500" />
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="pl-10"
                      {...register("confirmPassword", {
                        required: "Please confirm your password",
                        validate: value => value === password || "Passwords do not match"
                      })}
                    />
                  </div>
                  {errors.confirmPassword && (
                    <p className="text-sm text-error">{errors.confirmPassword.message}</p>
                  )}
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="terms"
                        aria-describedby="terms"
                        type="checkbox"
                        className="w-4 h-4 border border-secondary-300 rounded accent-primary-500"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="terms" className="text-secondary-600">
                        I agree to the <a href="/terms" className="text-primary-600 hover:underline">Terms of Service</a> and <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                  </div>
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="sm" className="mr-2" />
                      <span>Creating account...</span>
                    </>
                  ) : (
                    <span>Create Account</span>
                  )}
                </Button>
              </form>
              
              <div className="mt-6 text-center text-sm">
                <p className="text-secondary-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="text-primary-600 hover:underline font-medium"
                  >
                    Log in
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </main>
      
      <footer className="py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center text-sm text-secondary-500">
          <p>&copy; {new Date().getFullYear()} TalentSleuth AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default SignupPage;