import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Briefcase, Mail, Lock, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

import { loginUser, resetPassword } from '../lib/firebase';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/card';
import { useToast } from '../components/ui/use-toast';
import LoadingSpinner from '../components/ui/loading-spinner';

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginPage = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [resetSent, setResetSent] = useState(false);
  const [resetEmail, setResetEmail] = useState('');

  const { register, handleSubmit, formState: { errors }, getValues } = useForm<LoginFormValues>({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setIsLoading(true);
      await loginUser(data.email, data.password);
      toast({
        title: "Login successful",
        description: "Welcome back to TalentSleuth AI!",
      });
      navigate('/dashboard');
    } catch (error: any) {
      console.error("Login error:", error);
      toast({
        title: "Login failed",
        description: error.message || "Invalid email or password. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleResetPassword = async () => {
    const email = getValues('email');
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address to reset your password.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsLoading(true);
      await resetPassword(email);
      setResetSent(true);
      setResetEmail(email);
      toast({
        title: "Password reset email sent",
        description: "Check your inbox for instructions to reset your password.",
      });
    } catch (error: any) {
      console.error("Password reset error:", error);
      toast({
        title: "Password reset failed",
        description: error.message || "Failed to send password reset email. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

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
          {!resetSent ? (
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">
                  Welcome back
                </CardTitle>
                <CardDescription className="text-center">
                  Log in to your TalentSleuth AI account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <button
                        type="button"
                        onClick={handleResetPassword}
                        className="text-sm text-primary-600 hover:underline"
                      >
                        Forgot password?
                      </button>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-secondary-500" />
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        className="pl-10"
                        {...register("password", {
                          required: "Password is required",
                        })}
                      />
                    </div>
                    {errors.password && (
                      <p className="text-sm text-error">{errors.password.message}</p>
                    )}
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? (
                      <>
                        <LoadingSpinner size="sm" className="mr-2" />
                        <span>Logging in...</span>
                      </>
                    ) : (
                      <span>Log in</span>
                    )}
                  </Button>
                </form>
                
                <div className="mt-6 text-center text-sm">
                  <p className="text-secondary-600">
                    Don't have an account?{" "}
                    <Link
                      to="/signup"
                      className="text-primary-600 hover:underline font-medium"
                    >
                      Sign up
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardHeader className="space-y-1">
                <CardTitle className="text-2xl font-bold text-center">
                  Check your email
                </CardTitle>
                <CardDescription className="text-center">
                  We've sent a password reset link to <span className="font-medium">{resetEmail}</span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 pt-4">
                <p className="text-center text-secondary-600 text-sm">
                  Click the link in the email to reset your password. If you don't see the email, check your spam folder.
                </p>
                <div className="flex justify-between">
                  <Button
                    variant="outline"
                    onClick={() => setResetSent(false)}
                  >
                    Back to login
                  </Button>
                  <Button onClick={handleResetPassword}>
                    Resend email
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
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

export default LoginPage;