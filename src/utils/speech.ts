export const speak = (text: string, lang: string = 'en') => {
    if (!('speechSynthesis' in window)) return;

    const utterance = new SpeechSynthesisUtterance(text);

    const langMap: Record<string, string> = {
        en: 'en-US',
        hi: 'hi-IN',
        te: 'te-IN',
        ta: 'ta-IN',
        od: 'or-IN',
    };

    utterance.lang = langMap[lang] || 'en-US';

    window.speechSynthesis.speak(utterance);
};
