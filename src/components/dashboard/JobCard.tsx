import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Calendar, Users, MoreHorizontal } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '../ui/card';
import { Button } from '../ui/button';
import { formatDate, truncateText } from '../../lib/utils';

interface JobDescription {
  id: string;
  title: string;
  company?: string;
  location?: string;
  description: string;
  requirements?: string[];
  candidates?: number;
  createdAt: Date | number;
}

interface JobCardProps {
  job: JobDescription;
  onSelect: (jobId: string) => void;
}

const JobCard = ({ job, onSelect }: JobCardProps) => {
  const { 
    id, 
    title, 
    company, 
    location, 
    description, 
    requirements = [], 
    candidates = 0,
    createdAt 
  } = job;
  
  return (
    <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            {(company || location) && (
              <p className="text-sm text-secondary-500 mt-1">
                {company && company}{location && company && ' • '}{location && location}
              </p>
            )}
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="h-5 w-5" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="pt-0 flex-grow">
        <div className="space-y-4">
          <p className="text-sm text-secondary-700">
            {truncateText(description, 120)}
          </p>
          
          {requirements.length > 0 && (
            <div className="space-y-1">
              <span className="text-sm font-medium">Key Requirements</span>
              <div className="flex flex-wrap gap-1 mt-1">
                {requirements.slice(0, 3).map((req, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800"
                  >
                    {req}
                  </span>
                ))}
                {requirements.length > 3 && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary-100 text-secondary-800">
                    +{requirements.length - 3} more
                  </span>
                )}
              </div>
            </div>
          )}
          
          <div className="flex items-center justify-between text-sm text-secondary-500">
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(createdAt)}</span>
            </div>
            
            <div className="flex items-center space-x-1">
              <Users className="h-4 w-4" />
              <span>{candidates} candidate{candidates !== 1 ? 's' : ''}</span>
            </div>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="pt-4 border-t border-secondary-100">
        <div className="w-full flex space-x-2">
          <Button variant="outline" className="flex-1" asChild>
            <Link to={`/job/${id}`}>
              <Briefcase className="h-4 w-4 mr-2" />
              View Details
            </Link>
          </Button>
          <Button 
            className="flex-1"
            onClick={() => onSelect(id)}
          >
            Find Candidates
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default JobCard;