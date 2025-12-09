import React, { Fragment } from 'react';
import { UserIcon } from 'lucide-react';
interface ChatbotMessageProps {
  isUser: boolean;
  message: string;
  timestamp: Date;
}
const ChatbotMessage: React.FC<ChatbotMessageProps> = ({
  isUser,
  message,
  timestamp
}) => {
  // Process message to handle line breaks and formatting
  const formatMessage = (text: string) => {
    return text.split('\n').map((line, i) => <Fragment key={i}>
        {line}
        {i < text.split('\n').length - 1 && <br />}
      </Fragment>);
  };
  return <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-600 flex items-center justify-center mr-2">
          <UserIcon className="h-5 w-5 text-white" />
        </div>}
      <div className={`max-w-[80%] rounded-lg px-4 py-2 ${isUser ? 'bg-teal-600 text-white' : 'bg-gray-100 text-gray-800'}`}>
        <p className="text-sm">{formatMessage(message)}</p>
        <p className="text-xs text-right mt-1 opacity-70">
          {timestamp.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit'
        })}
        </p>
      </div>
      {isUser && <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ml-2">
          <UserIcon className="h-5 w-5 text-white" />
        </div>}
    </div>;
};
export default ChatbotMessage;