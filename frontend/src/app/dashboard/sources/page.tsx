import { Database, Plus } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sources — ON-AI',
};

export default function SourcesPage() {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl font-bold gradient-text mb-2">Sources</h1>
          <p className="text-muted-foreground">Manage your knowledge base documents</p>
        </div>
        <button className="inline-flex items-center gap-2 px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-lg font-medium transition-colors shadow-lg shadow-violet-500/20">
          <Plus className="w-4 h-4" />
          Add Source
        </button>
      </div>

      <div className="glass-card p-12 flex flex-col items-center justify-center text-center text-muted-foreground">
        <Database className="w-12 h-12 mb-4 text-white/20" />
        <p>No knowledge sources added yet.</p>
        <p className="text-sm mt-1">Upload documents to start training your AI.</p>
      </div>
    </div>
  );
}
