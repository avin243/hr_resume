import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '../../lib/utils';

const iconVariants = cva(
  "h-10 w-10 rounded-full flex items-center justify-center",
  {
    variants: {
      variant: {
        primary: "bg-primary-100 text-primary-700",
        secondary: "bg-secondary-100 text-secondary-700",
        accent: "bg-accent-100 text-accent-700",
        success: "bg-success-light text-success-DEFAULT",
        warning: "bg-warning-light text-warning-DEFAULT",
        error: "bg-error-light text-error-DEFAULT",
        info: "bg-info-light text-info-DEFAULT",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface StatCardProps extends VariantProps<typeof iconVariants> {
  title: string;
  value: string | number;
  description?: string;
  icon: React.ReactNode;
  className?: string;
}

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  variant = "primary", 
  className 
}: StatCardProps) => {
  return (
    <Card className={cn("h-full", className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-secondary-500">
          {title}
        </CardTitle>
        <div className={cn(iconVariants({ variant }))}>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {description && (
          <p className="text-xs text-secondary-500 mt-1">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatCard;