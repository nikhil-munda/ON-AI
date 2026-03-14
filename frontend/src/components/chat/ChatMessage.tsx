'use client';

import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getUser } from '@/lib/auth';
import { useEffect, useState } from 'react';

export interface ChatMessageProps {
  role: 'user' | 'ai';
  content: string;
  timestamp?: string;
}

export function ChatMessage({ role, content, timestamp }: ChatMessageProps) {
  const isUser = role === 'user';
  const [initial, setInitial] = useState('U');

  useEffect(() => {
    if (isUser) {
      const user = getUser();
      if (user?.sub) {
        setInitial(user.sub.charAt(0).toUpperCase());
      }
    }
  }, [isUser]);

  return (
    <div className={cn("flex w-full overflow-hidden my-4 sm:my-6", isUser ? "justify-end" : "justify-start")}>
      <div className={cn(
        "flex max-w-[85%] sm:max-w-[75%] gap-3 sm:gap-4",
        isUser ? "flex-row-reverse" : "flex-row"
      )}>
        
        {/* Avatar */}
        <div className="shrink-0 mt-1">
          {isUser ? (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-violet-600 border border-violet-500/30 text-white font-semibold text-xs sm:text-sm shadow-md">
              {initial}
            </div>
          ) : (
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-violet-500/20 border border-violet-500/30 flex items-center justify-center">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-violet-400" />
            </div>
          )}
        </div>

        {/* Message Bubble */}
        <div className={cn(
          "flex flex-col relative group",
          isUser ? "items-end" : "items-start"
        )}>
          
          <div className={cn(
            "px-4 py-3 sm:px-5 sm:py-4 text-[15px] leading-relaxed shadow-sm",
            isUser 
              ? "bg-violet-600/90 text-white rounded-2xl rounded-tr-sm border border-violet-500/20" 
              : "glass text-foreground rounded-2xl rounded-tl-sm"
          )}>
            <div className="whitespace-pre-wrap break-words">{content}</div>
          </div>

          {timestamp && (
            <span className={cn(
              "text-[11px] text-muted-foreground mt-1.5 px-1 opacity-0 group-hover:opacity-100 transition-opacity",
            )}>
              {timestamp}
            </span>
          )}

        </div>
      </div>
    </div>
  );
}
