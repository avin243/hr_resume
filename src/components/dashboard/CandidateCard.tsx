import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Calendar, Award, Briefcase, ExternalLink, AlertTriangle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { Progress } from '../ui/progress';
import { calculateFitmentScore, formatDate, getInitials } from '../../lib/utils';

interface Candidate {
  id: string;
  name: string;
  email: string;
  phone?: string;
  title?: string;
  experience?: string;
  education?: string;
  skills?: string[];
  score?: number;
  resumeUrl?: string;
  lastUpdated: Date | number;
  hasRedFlags?: boolean;
}

interface CandidateCardProps {
  candidate: Candidate;
}

const CandidateCard = ({ candidate }: CandidateCardProps) => {
  const { 
    id, 
    name, 
    title, 
    score = 0, 
    skills = [], 
    experience,
    education,
    lastUpdated,
    hasRedFlags 
  } = candidate;
  
  const fitmentScore = calculateFitmentScore(score);

  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div className="flex items-center space-x-3">
            <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-700 font-medium">
              {getInitials(name)}
            </div>
            <div>
              <CardTitle className="text-xl">{name}</CardTitle>
              {title && <p className="text-sm text-secondary-500 mt-1">{title}</p>}
            </div>
          </div>
          {hasRedFlags && (
            <div className="text-warning-DEFAULT" title="This candidate has potential red flags">
              <AlertTriangle className="h-5 w-5" />
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 flex-grow">
        <div className="space-y-4">
          {score > 0 && (
            <div className="space-y-1">
              <div className="flex justify-between items-center mb-1">
                <span className="text-sm font-medium">Fitment Score</span>
                <span className="text-sm font-medium">{score}%</span>
              </div>
              <Progress value={score} indicatorColor={fitmentScore.color} />
              <span className="text-xs text-secondary-500">{fitmentScore.label} match</span>
            </div>
          )}
          
          {skills.length > 0 && (
            <div className="space-y-1">
              <span className="text-sm font-medium">Key Skills</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {skills.slice(0, 3).map((skill, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-100 text-primary-800"
                  >
                    {skill}
                  </span>
                ))}
                {skills.length > 3 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                    +{skills.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          {experience && (
            <div className="flex items-start space-x-2">
              <Briefcase className="h-4 w-4 text-secondary-500 mt-0.5" />
              <span className="text-sm text-secondary-700">{experience}</span>
            </div>
          )}
          
          {education && (
            <div className="flex items-start space-x-2">
              <Award className="h-4 w-4 text-secondary-500 mt-0.5" />
              <span className="text-sm text-secondary-700">{education}</span>
            </div>
          )}
          
          <div className="flex items-start space-x-2">
            <Calendar className="h-4 w-4 text-secondary-500 mt-0.5" />
            <span className="text-sm text-secondary-500">
              Updated {formatDate(lastUpdated)}
            </span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-secondary-100">
        <div className="w-full flex space-x-2">
          <Button variant="outline" className="flex-1" asChild>
            <Link to={`/candidate/${id}`}>
              <FileText className="h-4 w-4 mr-2" />
              View Profile
            </Link>
          </Button>
          <Button className="flex-1" asChild>
            <Link to={`/candidate/${id}`}>
              <ExternalLink className="h-4 w-4 mr-2" />
              Analyze
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CandidateCard;