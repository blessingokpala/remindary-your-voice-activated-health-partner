import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Mic, MicOff, Volume2, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const voiceCommands = [
  '"Hey Remindary, what\'s next?"',
  '"Mark Joy\'s inhaler as taken"',
  '"Add a new medication"',
  '"What medications are pending?"',
  '"Set a reminder for 6 PM"',
];

const VoiceAssistant: React.FC = () => {
  const navigate = useNavigate();
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("");

  const toggleListening = () => {
    if (isListening) {
      setIsListening(false);
      // Simulate response
      setResponse("I've marked Joy's Asthma Inhaler as taken at 5:00 PM.");
    } else {
      setIsListening(true);
      setTranscript("");
      setResponse("");
      // Simulate listening
      setTimeout(() => {
        setTranscript("Mark Joy's inhaler as taken");
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-teal-dark flex flex-col">
      {/* Header */}
      <div className="px-4 pt-6 pb-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)} className="text-primary-foreground">
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold text-primary-foreground">Voice Assistant</h1>
        <button className="text-primary-foreground">
          <Settings className="w-6 h-6" />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6">
        {/* Listening Indicator */}
        <div className="relative mb-8">
          <div
            className={cn(
              "w-40 h-40 rounded-full flex items-center justify-center transition-all duration-500",
              isListening
                ? "bg-cyan-bright/20 animate-pulse-soft"
                : "bg-teal-darker/50"
            )}
          >
            <div
              className={cn(
                "w-32 h-32 rounded-full flex items-center justify-center transition-all duration-500",
                isListening ? "bg-cyan-bright/30" : "bg-teal-darker/70"
              )}
            >
              <div
                className={cn(
                  "w-24 h-24 rounded-full flex items-center justify-center transition-all duration-500",
                  isListening ? "bg-cyan-bright" : "bg-teal-dark"
                )}
              >
                {isListening ? (
                  <Volume2 className="w-12 h-12 text-teal-dark animate-pulse" />
                ) : (
                  <Mic className="w-12 h-12 text-cyan-bright" />
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Status Text */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-display text-primary-foreground mb-2">
            {isListening ? "Listening..." : "Hey Remindary"}
          </h2>
          <p className="text-primary-foreground/70">
            {isListening
              ? "Say a command or ask a question"
              : "Tap the microphone to start"}
          </p>
        </div>

        {/* Transcript */}
        {transcript && (
          <div className="bg-teal-darker/50 rounded-2xl p-4 mb-4 w-full max-w-sm animate-fade-in">
            <p className="text-sm text-primary-foreground/70 mb-1">You said:</p>
            <p className="text-primary-foreground font-medium">{transcript}</p>
          </div>
        )}

        {/* Response */}
        {response && (
          <div className="bg-cyan-bright/20 rounded-2xl p-4 w-full max-w-sm animate-fade-in">
            <p className="text-sm text-primary-foreground/70 mb-1">Remindary:</p>
            <p className="text-primary-foreground font-medium">{response}</p>
          </div>
        )}
      </div>

      {/* Microphone Button */}
      <div className="px-6 pb-8">
        <Button
          variant={isListening ? "destructive" : "default"}
          size="lg"
          className={cn(
            "w-full h-16 rounded-2xl text-lg font-medium",
            !isListening && "bg-cyan-bright text-teal-dark hover:bg-cyan-bright/90"
          )}
          onClick={toggleListening}
        >
          {isListening ? (
            <>
              <MicOff className="w-6 h-6 mr-2" />
              Stop Listening
            </>
          ) : (
            <>
              <Mic className="w-6 h-6 mr-2" />
              Start Listening
            </>
          )}
        </Button>
      </div>

      {/* Sample Commands */}
      <div className="bg-card rounded-t-3xl px-6 py-6">
        <h3 className="font-medium text-foreground mb-3">Try saying:</h3>
        <div className="space-y-2">
          {voiceCommands.map((command, index) => (
            <div
              key={index}
              className="bg-muted rounded-xl p-3 text-sm text-muted-foreground"
            >
              {command}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceAssistant;
