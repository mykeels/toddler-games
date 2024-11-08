export const speak = (text: string) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 0.85;
  speechSynthesis.speak(utterance);
};
