import { Settings as SettingsIcon } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings — ON-AI',
};

export default function SettingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold gradient-text mb-2">Settings</h1>
        <p className="text-muted-foreground">Manage your account and preferences</p>
      </div>

      <div className="glass-card p-8">
        <div className="flex items-center gap-4 border-b border-white/10 pb-6 mb-6">
           <div className="p-3 rounded-xl bg-violet-500/10 border border-violet-500/20">
             <SettingsIcon className="w-6 h-6 text-violet-400" />
           </div>
           <div>
             <h2 className="text-xl font-semibold text-foreground">General Preferences</h2>
             <p className="text-sm text-muted-foreground">Update your theme and dashboard settings</p>
           </div>
        </div>

        <div className="text-sm text-muted-foreground">
           Settings management currently disabled during Phase 1.
        </div>
      </div>
    </div>
  );
}
