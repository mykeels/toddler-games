export const speak = (text: string, options: { rate?: number } = { rate: 0.85 }) => {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = options?.rate ?? 0.85;
  speechSynthesis.speak(utterance);
};
