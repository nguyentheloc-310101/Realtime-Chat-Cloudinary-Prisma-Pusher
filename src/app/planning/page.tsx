'use client';
import { FormInputPlace } from '@/components/planning';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

const PlanningPage = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full">
      <FormInputPlace />
    </div>
  );
};

export default PlanningPage;
