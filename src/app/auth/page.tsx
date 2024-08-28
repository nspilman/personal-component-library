// AuthPage.tsx
import React from 'react';
import { Navbar, Text, Card } from '@/components';
import Link from 'next/link';
import { AuthButtons } from './AuthButtons';

const AuthPage = () => {
  return (
    <div className="min-h-screen bg-backgroundPrimary">
      <Navbar
        logo={<img src="https://ihkgojiseqpwinwdowvm.supabase.co/storage/v1/object/public/component-library-placeholder-images/component-library-logo.png?t=2024-08-25T18%3A51%3A40.801Z" alt="Logo" className="h-12 w-12" />}
        title="My Company"
        links={[]}
      />

      <div className="container mx-auto px-4 py-10">
        <Card className="max-w-md mx-auto p-6">
          <Text variant="h2" className="text-center mb-6">Sign In or Sign Up</Text>
          <AuthButtons />
          <Text variant="body2" className="text-center mt-6">
            By continuing, you agree to our <Link href="/terms" className="text-primary">Terms of Service</Link> and <Link href="/privacy" className="text-primary">Privacy Policy</Link>.
          </Text>
        </Card>
      </div>
    </div>
  );
};

export default AuthPage;
