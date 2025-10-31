import React, { useState, useEffect } from 'react';
import './Typewriter.css';

export default function Typewriter({ words, wait = 3000 }) {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullTxt = words[wordIndex % words.length];
    let typeSpeed = 100;

    if (isDeleting) {
      typeSpeed /= 2;
    }

    if (!isDeleting && text === fullTxt) {
      // Pause after word is typed
      typeSpeed = wait;
      setTimeout(() => setIsDeleting(true), typeSpeed);
      return;
    } else if (isDeleting && text === '') {
      // Move to next word and pause
      setIsDeleting(false);
      setWordIndex(prev => prev + 1);
      typeSpeed = 900;
    }

    const timeout = setTimeout(() => {
      setText(prev => 
        isDeleting ? fullTxt.substring(0, prev.length - 1) : fullTxt.substring(0, prev.length + 1)
      );
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex, words, wait]);

  return (
    <span className="typewriter-text">
      {text}
      <span className="typewriter-cursor">|</span>
    </span>
  );
}