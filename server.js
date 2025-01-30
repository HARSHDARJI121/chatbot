import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Chat route to handle the chatbot request
app.post('/chat', (req, res) => {
  const userMessage = req.body.message.toLowerCase(); // Convert user input to lowercase for easy comparison

  let chatbotResponse = "Sorry, I didn’t understand that. Could you rephrase or ask something else?";

  // Check the user's message using if-else statements
  if (userMessage.includes("hi")) {
    chatbotResponse = "Hi, how can I assist you?";
  } else if (userMessage.includes("hello")) {
    chatbotResponse = "Hello! How can I help you today?";
  } else if (userMessage.includes("how are you")) {
    chatbotResponse = "I'm doing great, thank you for asking! How about you?";
  } else if (userMessage.includes("what is your name")) {
    chatbotResponse = "I am your friendly chatbot. I don't have a name, but you can call me whatever you'd like!";
  } else if (userMessage.includes("bye")) {
    chatbotResponse = "Goodbye! Have a great day!";
  } else if (userMessage.includes("thankyou")) {
    chatbotResponse = "You're welcome! Feel free to ask anything.";
  } else if (userMessage.includes("help")) {
    chatbotResponse = "Sure! What do you need help with?";
  } else if (userMessage.includes("what can you do")) {
    chatbotResponse = "I can help you with anything related to my knowledge base.";
  } else if (userMessage.includes("tell me a joke")) {
    chatbotResponse = "Why don't skeletons fight each other? They don't have the guts!";
  } else if (userMessage.includes("who are you")) {
    chatbotResponse = "I am a chatbot here to assist you with your queries.";
  } else if (userMessage.includes("what time is it")) {
    chatbotResponse = new Date().toLocaleTimeString();
  } else if (userMessage.includes("what is the date today")) {
    chatbotResponse = new Date().toLocaleDateString();
  } else if (userMessage.includes("can you chat with me")) {
    chatbotResponse = "Of course! Let's talk!";
  } else if (userMessage.includes("what is the weather")) {
    chatbotResponse = "I don't have access to real-time data, but I suggest checking your local weather service.";
  } else if (userMessage.includes("are you a robot")) {
    chatbotResponse = "I am a chatbot, but not a robot. I'm here to assist you with your questions.";
  } else if (userMessage.includes("what is your purpose")) {
    chatbotResponse = "My purpose is to assist you by providing information and engaging in conversation.";
  } else if (userMessage.includes("how old are you")) {
    chatbotResponse = "I don't have an age, but I'm always here to assist you!";
  } else if (userMessage.includes("do you have a favorite color")) {
    chatbotResponse = "I don't have preferences, but blue seems nice, don't you think?";
  } else if (userMessage.includes("what can you teach me")) {
    chatbotResponse = "I can teach you various things, like math, history, and even programming!";
  } else if (userMessage.includes("can you solve math problems")) {
    chatbotResponse = "Yes! Just give me a math problem and I will try to solve it for you.";
  } else if (userMessage.includes("what is 2+2")) {
    chatbotResponse = "2+2 is 4.";
  } else if (userMessage.includes("tell me about programming")) {
    chatbotResponse = "Programming is a way of instructing a computer to perform tasks using code. There are many languages like JavaScript, Python, and more.";
  } else if (userMessage.includes("what is react")) {
    chatbotResponse = "React is a JavaScript library for building user interfaces. It's especially used for building single-page applications.";
  } else if (userMessage.includes("who created react")) {
    chatbotResponse = "React was created by Jordan Walke, a software engineer at Facebook.";
  } else if (userMessage.includes("what is node.js")) {
    chatbotResponse = "Node.js is a runtime environment that allows you to run JavaScript on the server side.";
  } else if (userMessage.includes("can you help me with web development")) {
    chatbotResponse = "Yes, I can help you with both frontend and backend web development.";
  } else if (userMessage.includes("what is HTML")) {
    chatbotResponse = "HTML stands for HyperText Markup Language. It's used to create the structure of web pages.";
  } else if (userMessage.includes("what is CSS")) {
    chatbotResponse = "CSS stands for Cascading Style Sheets. It's used to style HTML elements and make web pages look visually appealing.";
  } else if (userMessage.includes("what is a database")) {
    chatbotResponse = "A database is a structured collection of data that can be easily accessed, managed, and updated.";
  } else if (userMessage.includes("can you explain MySQL")) {
    chatbotResponse = "MySQL is an open-source relational database management system that uses SQL (Structured Query Language) to manage data.";
  } else if (userMessage.includes("what is MongoDB")) {
    chatbotResponse = "MongoDB is a NoSQL database that stores data in JSON-like documents, making it more flexible than relational databases.";
  } else if (userMessage.includes("what is SQL")) {
    chatbotResponse = "SQL stands for Structured Query Language. It's used to communicate with relational databases.";
  } else {
    chatbotResponse = "Sorry, I didn’t understand that. Could you rephrase or ask something else?"; // Default response
  }

  // Send the response back to the frontend
  res.json({ response: chatbotResponse });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
