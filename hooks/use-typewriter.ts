import { useState, useEffect } from "react";

interface UseTypewriterOptions {
  phrases: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  pauseDuration?: number;
  finalHoldDuration?: number;
  initialDelay?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 65,
  erasingSpeed = 30,
  pauseDuration = 800,
  finalHoldDuration = 1200,
  initialDelay = 600,
}: UseTypewriterOptions) {
  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!hasStarted) {
      timeout = setTimeout(() => {
        setHasStarted(true);
        setIsTyping(true);
      }, initialDelay);
      return () => clearTimeout(timeout);
    }

    const currentPhrase = phrases[phraseIndex];

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        // Typing
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length + 1));
        }, typingSpeed + (Math.random() * 20 - 10)); // Add slight randomness for human feel
      } else {
        // Finished typing the current phrase
        if (phraseIndex === phrases.length - 1) {
          setIsFinished(true);
          // Loop back to start after a longer hold
          timeout = setTimeout(() => {
            setIsFinished(false);
            setIsTyping(false);
          }, finalHoldDuration);
        } else {
          timeout = setTimeout(() => {
            setIsTyping(false);
          }, pauseDuration);
        }
      }
    } else {
      // Erasing
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.substring(0, displayText.length - 1));
        }, erasingSpeed);
      } else {
        // Move to next phrase
        setPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
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
    initialDelay,
  ]);

  return { displayText, isFinished };
}
