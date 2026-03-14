'use client';

import { useRouter } from 'next/navigation';
import { removeToken, getUser } from '@/lib/auth';
import { LogOut, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const router = useRouter();
  const [userInitial, setUserInitial] = useState<string>('?');
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const user = getUser();
    if (user) {
      setUserInitial(user.sub?.charAt(0).toUpperCase() || '?');
      setIsAdmin(user.role === 'admin');
    }
  }, []);

  function handleLogout() {
    removeToken();
    router.push('/login');
    router.refresh();
  }

  return (
    <header className="sticky top-0 z-40 h-16 w-full flex items-center justify-between px-4 sm:px-6 bg-background/80 backdrop-blur-xl border-b border-white/10 transition-all">
      {/* Mobile Menu Toggle (Placeholder for future implementation) */}
      <div className="flex items-center lg:hidden">
        <button className="p-2 -ml-2 text-muted-foreground hover:text-foreground bg-white/5 rounded-lg border border-white/10">
          <Menu className="w-5 h-5" />
        </button>
      </div>

      {/* spacer for desktop to center / push right content */}
      <div className="hidden lg:flex flex-1" />

      {/* Right side controls */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          
          {isAdmin && (
            <div className="hidden sm:flex items-center px-2 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold uppercase tracking-wider">
              Admin
            </div>
          )}

          <div className="h-8 w-8 rounded-full bg-gradient-to-tr from-violet-600 to-indigo-600 flex items-center justify-center border border-white/20 shadow-lg relative overflow-hidden group hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] transition-shadow cursor-default">
             <span className="text-sm font-bold text-white tracking-widest leading-none drop-shadow-md">{userInitial}</span>
             <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>

        </div>

        <div className="w-px h-6 bg-white/10 mx-1 hidden sm:block" />

        <button
          onClick={handleLogout}
          id="logout-btn"
          className="group flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-red-400 transition-all px-3 py-1.5 rounded-lg hover:bg-red-500/10 border border-transparent hover:border-red-500/20"
        >
          <LogOut className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          <span className="hidden sm:inline">Logout</span>
        </button>
      </div>
    </header>
  );
}
