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
  const time = new Date(timestamp);
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3 px-2`}>

      {/* BOT AVATAR */}
      {!isUser && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center mr-2">
          <UserIcon className="h-4 w-4 text-white" />
        </div>
      )}

      {/* MESSAGE BUBBLE */}
      <div
        className={`max-w-[75%] px-4 py-2 shadow-sm ${isUser
          ? 'bg-teal-500 text-white rounded-2xl rounded-br-sm'
          : 'bg-gray-200 text-black rounded-2xl rounded-bl-sm'
          }`}
      >
        <p className="text-sm leading-relaxed">{formatMessage(message)}</p>

        <p className="text-[10px] text-right mt-1 opacity-70">
          {!isNaN(time.getTime())
            ? time.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })
            : ''}
        </p>
      </div>

      {/* USER AVATAR */}
      {isUser && (
        <div className="flex-shrink-0 h-8 w-8 rounded-full bg-gray-400 flex items-center justify-center ml-2">
          <UserIcon className="h-4 w-4 text-white" />
        </div>
      )}

    </div>
  );
};
export default ChatbotMessage;