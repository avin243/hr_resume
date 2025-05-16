import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  Phone,
  Building,
  GraduationCap,
  Award,
  FileText,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Calendar,
  MapPin,
  Link as LinkIcon,
  Download,
  MessageSquare
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Progress } from '../components/ui/progress';
import { calculateFitmentScore } from '../lib/utils';

const CandidateProfilePage = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock data - replace with actual data fetching
  const candidate = {
    id,
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    title: "Senior Software Engineer",
    location: "San Francisco, CA",
    score: 85,
    experience: "8+ years",
    education: "MS Computer Science, Stanford University",
    skills: ["React", "TypeScript", "Node.js", "AWS", "Python", "GraphQL"],
    certifications: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023"
      },
      {
        name: "Professional Scrum Master I",
        issuer: "Scrum.org",
        date: "2022"
      }
    ],
    redFlags: [
      {
        type: "Employment Gap",
        description: "6-month gap between roles in 2022",
        severity: "low"
      }
    ],
    strengths: [
      "Strong technical background",
      "Leadership experience",
      "Project management skills"
    ],
    weaknesses: [
      "Limited experience with mobile development",
      "No formal management training"
    ],
    recommendedQuestions: [
      "Can you describe a challenging technical problem you solved recently?",
      "How do you approach mentoring junior developers?",
      "What's your experience with scaling distributed systems?"
    ]
  };

  const fitmentScore = calculateFitmentScore(candidate.score);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Profile Section */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-4">
                  <div className="h-16 w-16 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 text-xl font-semibold">
                    {candidate.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{candidate.name}</CardTitle>
                    <p className="text-secondary-500">{candidate.title}</p>
                    <div className="flex items-center mt-2 text-sm text-secondary-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {candidate.location}
                    </div>
                  </div>
                </div>
                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Download Resume
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-secondary-700">
                    <Mail className="h-4 w-4" />
                    <span>{candidate.email}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-700">
                    <Phone className="h-4 w-4" />
                    <span>{candidate.phone}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2 text-secondary-700">
                    <Building className="h-4 w-4" />
                    <span>{candidate.experience} Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-secondary-700">
                    <GraduationCap className="h-4 w-4" />
                    <span>{candidate.education}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills & Certifications */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Certifications</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Technical Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {candidate.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Certifications</h4>
                  <div className="space-y-3">
                    {candidate.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-3 rounded-lg bg-secondary-50"
                      >
                        <Award className="h-5 w-5 text-primary-500 mt-0.5" />
                        <div>
                          <p className="font-medium">{cert.name}</p>
                          <p className="text-sm text-secondary-500">
                            {cert.issuer} • {cert.date}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Strengths & Areas for Improvement */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-success-DEFAULT mr-2" />
                  Strengths
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {candidate.strengths.map((strength, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-secondary-700"
                    >
                      <CheckCircle className="h-4 w-4 text-success-DEFAULT mt-1" />
                      <span>{strength}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <XCircle className="h-5 w-5 text-warning-DEFAULT mr-2" />
                  Areas for Improvement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {candidate.weaknesses.map((weakness, index) => (
                    <li
                      key={index}
                      className="flex items-start space-x-2 text-secondary-700"
                    >
                      <XCircle className="h-4 w-4 text-warning-DEFAULT mt-1" />
                      <span>{weakness}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Recommended Interview Questions */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MessageSquare className="h-5 w-5 mr-2" />
                Recommended Interview Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {candidate.recommendedQuestions.map((question, index) => (
                  <div
                    key={index}
                    className="p-4 rounded-lg bg-secondary-50"
                  >
                    <p className="text-secondary-700">{question}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Fitment Score */}
          <Card>
            <CardHeader>
              <CardTitle>Role Fitment Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold">{candidate.score}%</span>
                  <span className="text-sm font-medium px-2 py-1 rounded-full bg-primary-100 text-primary-700">
                    {fitmentScore.label}
                  </span>
                </div>
                <Progress value={candidate.score} indicatorColor={fitmentScore.color} />
              </div>
            </CardContent>
          </Card>

          {/* Red Flags */}
          {candidate.redFlags.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-warning-DEFAULT">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Potential Concerns
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {candidate.redFlags.map((flag, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg bg-warning-light border border-warning-DEFAULT/20"
                    >
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-5 w-5 text-warning-DEFAULT mt-0.5" />
                        <div>
                          <p className="font-medium text-warning-DEFAULT">
                            {flag.type}
                          </p>
                          <p className="text-sm text-secondary-700 mt-1">
                            {flag.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button className="w-full">Schedule Interview</Button>
            <Button variant="outline" className="w-full">
              Send Message
            </Button>
            <Button variant="outline" className="w-full">
              Add to Shortlist
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CandidateProfilePage;