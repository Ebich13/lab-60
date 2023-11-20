import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Message } from '../../types';

interface Props {
  onSendMessage: (message: Message) => void;
}

const MessageForm: React.FC<Props> = ({ onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');
  const [author, setAuthor] = useState('');

  const sendMessage = () => {
    const message: Message = {
      id: '',
      message: newMessage,
      author: author,
      datetime: new Date().toISOString(),
    };

    onSendMessage(message);
    setNewMessage('');
  };

  return (
    <Form>
      <Form.Group controlId="message" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Message"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="author" className="mb-3">
        <Form.Control
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" onClick={sendMessage}>
        Send
      </Button>
    </Form>
  );
};

export default MessageForm;