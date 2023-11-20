import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import axios from 'axios';
import MessageList from './components/MessageList/MessageList';
import MessageForm from './components/MessageForm/MessageForm';
import { Message } from "./types";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://146.185.154.90:8000/messages');
      setMessages(response.data);
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(async () => {
      await fetchData();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const sendMessage = async (newMessage: Message) => {
    try {
      const messageData = new URLSearchParams();
      messageData.set('message', newMessage.message);
      messageData.set('author', newMessage.author);
      await axios.post('http://146.185.154.90:8000/messages', messageData);
      await fetchData();
    } catch (error) {
      console.error('Error posting message:', error);
    }
  };

  return (
    <Container className="mt-5 p-4 border rounded">
      <h1 className="mb-4 text-center">Chat</h1>
      <Row>
        <Col>
          <MessageList messages={messages} />
        </Col>
      </Row>
      <Row>
        <Col>
          <MessageForm onSendMessage={sendMessage} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
