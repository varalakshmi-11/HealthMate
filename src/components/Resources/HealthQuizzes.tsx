import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelpCircleIcon, CheckIcon, XIcon, ArrowRightIcon, RotateCwIcon } from 'lucide-react';
import { healthQuizzes } from '../../utils/mockData';
const HealthQuizzes: React.FC = () => {
  const {
    t,
    i18n
  } = useTranslation();
  const [selectedQuiz, setSelectedQuiz] = useState<any | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [score, setScore] = useState(0);
  const currentLanguage = i18n.language;
  const handleStartQuiz = (quiz: any) => {
    setSelectedQuiz(quiz);
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };
  const handleSelectAnswer = (answerIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = answerIndex;
    setSelectedAnswers(newSelectedAnswers);
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < selectedQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Calculate score
      let correctAnswers = 0;
      selectedQuiz.questions.forEach((question: any, index: number) => {
        if (selectedAnswers[index] === question.correctAnswer) {
          correctAnswers++;
        }
      });
      const calculatedScore = Math.round(correctAnswers / selectedQuiz.questions.length * 100);
      setScore(calculatedScore);
      setQuizCompleted(true);
    }
  };
  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers([]);
    setQuizCompleted(false);
    setScore(0);
  };
  const getLocalizedQuizContent = (quiz: any) => {
    if (currentLanguage === 'od') {
      return {
        title: quiz.title_od,
        description: quiz.description_od
      };
    } else if (currentLanguage === 'hi') {
      return {
        title: quiz.title_hi,
        description: quiz.description_hi
      };
    } else {
      return {
        title: quiz.title,
        description: quiz.description
      };
    }
  };
  const getLocalizedQuestionContent = (question: any) => {
    if (currentLanguage === 'od') {
      return {
        question: question.question_od,
        options: question.options_od
      };
    } else if (currentLanguage === 'hi') {
      return {
        question: question.question_hi,
        options: question.options_hi
      };
    } else {
      return {
        question: question.question,
        options: question.options
      };
    }
  };
  return <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-green-100 text-green-800 p-4 flex items-center">
        <HelpCircleIcon className="h-6 w-6 mr-2" />
        <h3 className="text-lg font-semibold">Health Quizzes</h3>
      </div>
      <div className="p-4">
        {!selectedQuiz ? <div className="space-y-4">
            <p className="text-gray-600 mb-4">
              Test your health knowledge with these interactive quizzes.
            </p>
            {healthQuizzes.map(quiz => {
          const localizedContent = getLocalizedQuizContent(quiz);
          return <div key={quiz.id} className="border rounded-lg p-4 hover:bg-green-50 transition-colors cursor-pointer" onClick={() => handleStartQuiz(quiz)}>
                  <h4 className="font-medium mb-1">{localizedContent.title}</h4>
                  <p className="text-sm text-gray-600">
                    {localizedContent.description}
                  </p>
                  <button className="mt-3 text-sm text-green-600 flex items-center hover:text-green-800">
                    Start Quiz <ArrowRightIcon className="h-4 w-4 ml-1" />
                  </button>
                </div>;
        })}
          </div> : quizCompleted ? <div className="text-center py-6">
            <div className="mb-4">
              <div className="mx-auto h-24 w-24 rounded-full flex items-center justify-center text-2xl font-bold" style={{
            background: `conic-gradient(#10b981 ${score}%, #e5e7eb ${score}% 100%)`,
            color: score >= 70 ? '#047857' : score >= 40 ? '#b45309' : '#b91c1c'
          }}>
                {score}%
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">Quiz Completed!</h3>
            <p className="text-gray-600 mb-6">
              {score >= 80 ? 'Excellent! You have a great understanding of this topic.' : score >= 60 ? 'Good job! You have a solid grasp of the basics.' : "Keep learning! There's room for improvement."}
            </p>
            <div className="space-y-4">
              {selectedQuiz.questions.map((question: any, index: number) => {
            const localizedQuestion = getLocalizedQuestionContent(question);
            const isCorrect = selectedAnswers[index] === question.correctAnswer;
            return <div key={index} className="text-left border rounded-lg p-3">
                    <div className="flex items-start">
                      <div className={`mt-1 flex-shrink-0 ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                        {isCorrect ? <CheckIcon className="h-5 w-5" /> : <XIcon className="h-5 w-5" />}
                      </div>
                      <div className="ml-2">
                        <p className="font-medium">
                          {localizedQuestion.question}
                        </p>
                        <p className="text-sm mt-1">
                          <span className="text-gray-600">Your answer: </span>
                          <span className={isCorrect ? 'text-green-600 font-medium' : 'text-red-600'}>
                            {localizedQuestion.options[selectedAnswers[index]]}
                          </span>
                        </p>
                        {!isCorrect && <p className="text-sm mt-1">
                            <span className="text-gray-600">
                              Correct answer:{' '}
                            </span>
                            <span className="text-green-600 font-medium">
                              {localizedQuestion.options[question.correctAnswer]}
                            </span>
                          </p>}
                      </div>
                    </div>
                  </div>;
          })}
            </div>
            <div className="mt-6 flex justify-center space-x-3">
              <button onClick={handleRestartQuiz} className="px-4 py-2 bg-green-600 text-white rounded-md flex items-center hover:bg-green-700">
                <RotateCwIcon className="h-4 w-4 mr-1" /> Restart Quiz
              </button>
              <button onClick={() => setSelectedQuiz(null)} className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
                Back to Quizzes
              </button>
            </div>
          </div> : <div>
            <div className="flex justify-between items-center mb-4">
              <button onClick={() => setSelectedQuiz(null)} className="text-sm text-green-600 hover:text-green-800 flex items-center">
                <XIcon className="h-4 w-4 mr-1" /> Exit Quiz
              </button>
              <span className="text-sm text-gray-600">
                Question {currentQuestionIndex + 1} of{' '}
                {selectedQuiz.questions.length}
              </span>
            </div>
            <div className="mb-4 w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-green-600 h-1.5 rounded-full" style={{
            width: `${(currentQuestionIndex + 1) / selectedQuiz.questions.length * 100}%`
          }}></div>
            </div>
            {selectedQuiz.questions[currentQuestionIndex] && <div>
                <h4 className="text-lg font-medium mb-4">
                  {getLocalizedQuestionContent(selectedQuiz.questions[currentQuestionIndex]).question}
                </h4>
                <div className="space-y-3 mb-6">
                  {getLocalizedQuestionContent(selectedQuiz.questions[currentQuestionIndex]).options.map((option: string, idx: number) => <button key={idx} onClick={() => handleSelectAnswer(idx)} className={`w-full text-left p-3 rounded-md border ${selectedAnswers[currentQuestionIndex] === idx ? 'bg-green-100 border-green-500' : 'border-gray-300 hover:bg-gray-50'}`}>
                      <div className="flex items-center">
                        <div className={`h-5 w-5 rounded-full border flex items-center justify-center mr-3 ${selectedAnswers[currentQuestionIndex] === idx ? 'border-green-500 bg-green-500 text-white' : 'border-gray-400'}`}>
                          {selectedAnswers[currentQuestionIndex] === idx && <CheckIcon className="h-3 w-3" />}
                        </div>
                        {option}
                      </div>
                    </button>)}
                </div>
                <button onClick={handleNextQuestion} disabled={selectedAnswers[currentQuestionIndex] === undefined} className="w-full py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed">
                  {currentQuestionIndex === selectedQuiz.questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
                </button>
              </div>}
          </div>}
      </div>
    </div>;
};
export default HealthQuizzes;