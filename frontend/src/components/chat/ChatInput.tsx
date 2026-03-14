'use client';

import { useState, useRef, useEffect } from 'react';
import { Send, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading?: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  }, [input]);

  const handleSend = () => {
    const trimmed = input.trim();
    if (!trimmed || isLoading) return;
    
    onSend(trimmed);
    setInput('');
    
    // Reset height
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative w-full">
      <div className="absolute -top-10 left-0 right-0 flex justify-center pb-2 pointer-events-none">
          <div className="text-xs font-medium text-muted-foreground/60 flex items-center gap-1.5 px-3 py-1 rounded-full glass border-white/5 bg-background/50 backdrop-blur-md">
            <Hash className="w-3 h-3" />
            AI Chat initialized
          </div>
      </div>
      
      <div className="relative flex items-end w-full glass-card rounded-2xl overflow-hidden focus-within:ring-2 focus-within:ring-violet-500/50 transition-shadow">
        <Textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask anything about your knowledge base..."
          className="min-h-[60px] max-h-[200px] w-full resize-none border-0 bg-transparent py-4 pl-4 pr-14 focus-visible:ring-0 text-[15px] placeholder:text-muted-foreground/60 rounded-2xl"
          disabled={isLoading}
          rows={1}
        />
        
        <div className="absolute right-2 bottom-2">
          <Button 
            size="icon" 
            className="w-10 h-10 rounded-xl bg-violet-600 hover:bg-violet-500 text-white shadow-md transition-transform active:scale-95 disabled:opacity-50"
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
      
      <div className="text-center mt-3">
        <p className="text-[11px] text-muted-foreground/60">
          AI generated responses may be inaccurate. Verify important information.
        </p>
      </div>
    </div>
  );
}
