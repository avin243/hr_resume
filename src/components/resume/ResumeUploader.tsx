import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { FileText, Upload, X, Check, Loader2 } from 'lucide-react';
import { Button } from '../ui/button';
import LoadingSpinner from '../ui/loading-spinner';
import { useToast } from '../ui/use-toast';
import { motion, AnimatePresence } from 'framer-motion';

interface ResumeUploaderProps {
  onUpload: (file: File) => Promise<void>;
  isUploading: boolean;
}

const ResumeUploader = ({ onUpload, isUploading }: ResumeUploaderProps) => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { toast } = useToast();

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      if (file.type === 'application/pdf' || 
          file.type === 'application/msword' || 
          file.type === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' ||
          file.type === 'text/plain') {
        setSelectedFile(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF, DOC, DOCX, or TXT file.",
          variant: "destructive",
        });
      }
    }
  }, [toast]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx'],
      'text/plain': ['.txt']
    },
    multiple: false
  });

  const handleRemoveFile = () => {
    setSelectedFile(null);
  };

  const handleUpload = async () => {
    if (selectedFile) {
      try {
        await onUpload(selectedFile);
        toast({
          title: "Resume uploaded",
          description: "Your resume has been uploaded successfully.",
        });
        setSelectedFile(null);
      } catch (error) {
        console.error("Upload error:", error);
        toast({
          title: "Upload failed",
          description: "There was an error uploading your resume. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="w-full">
      {!selectedFile ? (
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-2xl p-8 text-center transition-all cursor-pointer ${
            isDragActive 
              ? 'border-primary-500 bg-primary-50' 
              : 'border-secondary-300 hover:border-primary-400 hover:bg-secondary-50'
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="h-16 w-16 rounded-full bg-secondary-100 flex items-center justify-center">
              <Upload className="h-8 w-8 text-secondary-500" />
            </div>
            <div>
              <p className="text-lg font-medium text-secondary-700">
                {isDragActive ? 'Drop your resume here' : 'Drag & drop your resume here'}
              </p>
              <p className="text-sm text-secondary-500 mt-1">
                or <span className="text-primary-500">browse files</span> (PDF, DOC, DOCX, TXT)
              </p>
            </div>
          </div>
        </div>
      ) : (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border rounded-2xl p-6 bg-white"
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-4">
                <div className="h-12 w-12 rounded-lg bg-primary-100 flex items-center justify-center">
                  <FileText className="h-6 w-6 text-primary-500" />
                </div>
                <div>
                  <p className="font-medium text-secondary-900">{selectedFile.name}</p>
                  <p className="text-sm text-secondary-500">
                    {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-full"
                onClick={handleRemoveFile}
                disabled={isUploading}
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6 flex justify-end">
              <Button
                onClick={handleUpload}
                disabled={isUploading}
                className="min-w-[120px]"
              >
                {isUploading ? (
                  <>
                    <LoadingSpinner size="sm" className="mr-2" />
                    <span>Processing...</span>
                  </>
                ) : (
                  <>
                    <Check className="h-4 w-4 mr-2" />
                    <span>Upload Resume</span>
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default ResumeUploader;