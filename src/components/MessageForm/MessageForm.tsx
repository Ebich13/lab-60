import React, { useState } from 'react';
import { Message } from '../../types';

interface Props {
  onSendMessage: (newMessage: Message) => void;
}

const MessageForm: React.FC<Props> = ({ onSendMessage }) => {
  const [message, setMessage] = useState<string>('');
  const [author, setAuthor] = useState<string>('');

  const handleSubmit = () => {
    onSendMessage({ id: '', message, author, datetime: '' });
    setMessage('');
    setAuthor('');
  };

  return (
    <div>
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="mb-3">
          <label htmlFor="message" className="form-label">Message</label>
          <input
            type="text"
            className="form-control"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="author" className="form-label">Author</label>
          <input
            type="text"
            className="form-control"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
};

export default MessageForm;