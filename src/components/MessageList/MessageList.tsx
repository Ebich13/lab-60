import React from 'react';
import { Message } from '../../types';

interface Props {
  messages: Message[];
}

const MessageList: React.FC<Props> = ({ messages }) => (
  <div className="mb-3">
    {messages.map((message, index) => (
      <div key={index} className="mb-2">
        <strong>{message.author}</strong>: {message.message}{' '}
        <small className="text-muted">
          {new Date(message.datetime).toLocaleString()}
        </small>
      </div>
    ))}
  </div>
);

export default MessageList;