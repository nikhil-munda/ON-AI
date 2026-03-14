import Sidebar from '@/components/layout/Sidebar';
import Navbar from '@/components/layout/Navbar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-full bg-background overflow-hidden selection:bg-violet-500/30">
      <Sidebar />
      <div className="flex flex-col flex-1 lg:pl-64 h-full relative z-0">
        <Navbar />
        {/* Main Content Area */}
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth relative">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:32px_32px] pointer-events-none -z-10" />
          {children}
        </main>
      </div>
    </div>
  );
}
