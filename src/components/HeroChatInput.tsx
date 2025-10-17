import { useState } from 'react';
import { Paperclip, ArrowUp, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const HeroChatInput = () => {
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('chat', {
        body: { message: input }
      });

      if (error) throw error;

      if (data?.message) {
        toast({
          title: "AI Response",
          description: data.message,
          duration: 8000,
        });
        setInput('');
      }
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error",
        description: "Failed to get response. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto mb-12">
      <div className="relative flex items-center gap-2 bg-[#1A1A1A] rounded-2xl p-2 shadow-lg border border-white/10">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your legal question here…"
          disabled={isLoading}
          className="flex-1 bg-transparent text-white placeholder:text-gray-400 px-4 py-3 focus:outline-none disabled:opacity-50"
        />
        
        <button
          type="button"
          className="p-2 text-gray-400 hover:text-white transition-colors"
          aria-label="Attach file"
        >
          <Paperclip className="w-5 h-5" />
        </button>
        
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className="flex items-center justify-center w-10 h-10 rounded-full bg-[#F5CB68] hover:bg-[#E5BB58] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 text-black animate-spin" />
          ) : (
            <ArrowUp className="w-5 h-5 text-black" />
          )}
        </button>
      </div>
    </form>
  );
};

export default HeroChatInput;
