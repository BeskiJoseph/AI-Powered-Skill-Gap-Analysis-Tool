
import React from 'react';
import { FormStep } from '@/types';
import { AppProvider, useAppContext } from '@/context/AppContext';
import Header from '@/components/Header';
import Welcome from '@/components/FormSteps/Welcome';
import ResumeUpload from '@/components/FormSteps/ResumeUpload';
import JobDescriptionUpload from '@/components/FormSteps/JobDescriptionUpload';
import Analyzing from '@/components/FormSteps/Analyzing';
import Dashboard from '@/components/LearningPath/Dashboard';

// Separate component that uses the context
const MainContent = () => {
  const { state } = useAppContext();
  const { formStep } = state;
  
  const renderStep = () => {
    switch (formStep) {
      case FormStep.WELCOME:
        return <Welcome />;
      case FormStep.RESUME:
        return <ResumeUpload />;
      case FormStep.JOB_DESCRIPTIONS:
        return <JobDescriptionUpload />;
      case FormStep.ANALYZING:
        return <Analyzing />;
      case FormStep.RESULTS:
        return <Dashboard />;
      default:
        return <Welcome />;
    }
  };
  
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto p-6 lg:py-10">
        {renderStep()}
      </main>
    </div>
  );
};

// Main Index component that provides the context
const Index = () => {
  return (
    <AppProvider>
      <MainContent />
    </AppProvider>
  );
};

export default Index;
