import { useState, useEffect, useRef } from "react";

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseDuration?: number;
  finalHoldDuration?: number;
  initialDelay?: number;
  firstPhrasePause?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 90,
  erasingSpeed = 22,
  pauseDuration = 2200,
  finalHoldDuration = 3500,
  initialDelay = 600,
  firstPhrasePause = 3800,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    if (!hasStarted) {
      timeoutRef.current = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, initialDelay);
      return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
    }

    const currentPhrase = phrases[phraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        // Typing — slight human randomness
        const jitter = Math.random() * 18 - 9;
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, typingSpeed + jitter);
      } else {
        // Done typing — decide hold duration
        if (phraseIndex === phrases.length - 1) {
          setIsFinished(true);
          timeoutRef.current = setTimeout(() => {
            setIsFinished(false);
            setIsTyping(false);
          }, finalHoldDuration);
        } else {
          // First phrase gets extra long hold so user reads "I'm Aryan Kumar."
          const hold = phraseIndex === 0 ? firstPhrasePause : pauseDuration;
          timeoutRef.current = setTimeout(() => {
            setIsTyping(false);
          }, hold);
        }
      }
    } else {
      // Erasing
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, erasingSpeed);
      } else {
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); };
  }, [
    displayText,
    isTyping,
    hasStarted,
    phraseIndex,
    phrases,
    typingSpeed,
    erasingSpeed,
    pauseDuration,
    finalHoldDuration,
    firstPhrasePause,
    initialDelay,
  ]);

  return { displayText, isFinished };
}
