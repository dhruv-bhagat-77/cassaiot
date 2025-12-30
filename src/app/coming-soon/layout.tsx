import { ReactNode } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coming Soon | Cassaiot',
};

interface ComingSoonLayoutProps {
  children: ReactNode;
}

export default function ComingSoonLayout({ children }: ComingSoonLayoutProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      {children}
    </div>
  );
}
