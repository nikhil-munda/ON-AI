import { History as HistoryIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'History — ON-AI',
};

export default function HistoryPage() {
  return (
    <div className="max-w-5xl mx-auto h-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">History</h1>
        <p className="text-muted-foreground">View your past conversations and queries</p>
      </div>

      <div className="glass-card p-12 flex flex-col items-center justify-center text-center text-muted-foreground">
        <HistoryIcon className="w-12 h-12 mb-4 text-white/20" />
        <p>No chat history available.</p>
        <p className="text-sm mt-1">Start a conversation to see it here.</p>
      </div>
    </div>
  );
}
