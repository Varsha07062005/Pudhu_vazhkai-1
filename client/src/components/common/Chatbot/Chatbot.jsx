import React, { useState } from 'react';
import styled from '@emotion/styled';
import { FaRobot, FaTimes, FaPaperPlane } from 'react-icons/fa';
const ChatbotContainer = styled.div`
  position: fixed;
  bottom: ${props => props.theme.spacing.xl};
  right: ${props => props.theme.spacing.xl};
  z-index: 1000;
`;

const ChatButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.medium};
  font-size: 1.5rem;
`;

const ChatWindow = styled.div`
  width: 350px;
  height: 500px;
  background: ${props => props.theme.colors.accent};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.large};
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  padding: ${props => props.theme.spacing.md};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ChatMessages = styled.div`
  flex: 1;
  padding: ${props => props.theme.spacing.md};
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const Message = styled.div`
  max-width: 80%;
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  border-radius: 18px;
  background: ${props => props.isBot ? props.theme.colors.lightBlue : props.theme.colors.primary};
  color: ${props => props.isBot ? props.theme.colors.text : props.theme.colors.accent};
  align-self: ${props => props.isBot ? 'flex-start' : 'flex-end'};
`;

const ChatInput = styled.div`
  display: flex;
  padding: ${props => props.theme.spacing.md};
  border-top: 1px solid ${props => props.theme.colors.lightBlue};
`;

const InputField = styled.input`
  flex: 1;
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.lightBlue};
  border-radius: 4px;
  outline: none;
  &:focus {
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SendButton = styled.button`
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.accent};
  border: none;
  padding: 0 ${props => props.theme.spacing.md};
  margin-left: ${props => props.theme.spacing.sm};
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your TransCare assistant. How can I help you today?", isBot: true }
  ]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = { text: inputValue, isBot: false };
      setMessages([...messages, newMessage]);
      setInputValue('');
      
      // Simulate bot response
      setTimeout(() => {
        setMessages(prev => [
          ...prev, 
          { text: "I'm a simple chatbot. For real assistance, please contact our support team.", isBot: true }
        ]);
      }, 1000);
    }
  };

  return (
    <ChatbotContainer>
      {isOpen ? (
        <ChatWindow>
          <ChatHeader>
            <h3>TransCare Assistant</h3>
            <ChatButton onClick={() => setIsOpen(false)}>
              <FaTimes />
            </ChatButton>
          </ChatHeader>
          
          <ChatMessages>
            {messages.map((message, index) => (
              <Message key={index} isBot={message.isBot}>
                {message.text}
              </Message>
            ))}
          </ChatMessages>
          
          <ChatInput>
            <InputField 
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <SendButton onClick={handleSendMessage}>
              <FaPaperPlane />
            </SendButton>
          </ChatInput>
        </ChatWindow>
      ) : (
        <ChatButton onClick={() => setIsOpen(true)}>
          <FaRobot />
        </ChatButton>
      )}
    </ChatbotContainer>
  );
};

export default Chatbot;