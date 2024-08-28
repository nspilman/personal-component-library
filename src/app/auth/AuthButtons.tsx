"use client";

import React from 'react';
import { Button } from '@/components';
import { Twitter } from 'lucide-react';
import { AuthButton } from './AuthButton';

export const AuthButtons = () => {
  const handleOAuthSignup = (provider: string) => {
    // Handle OAuth signup logic here
    console.log(`Signing up with ${provider}`);
  };

  return (
    <>
      <AuthButton 
        onClick={() => handleOAuthSignup('Google')}
        label='Continue with Google'
      />
      <AuthButton 
        onClick={() => handleOAuthSignup('Facebook')}
        label="Continue with Facebook"
      />
      <AuthButton 
        label="Continue with Twitter" 
        onClick={() => handleOAuthSignup('Twitter')}
      >
      </AuthButton>
    </>
  );
};