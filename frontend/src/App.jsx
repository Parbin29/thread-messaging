import { useState, useEffect } from "react";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import axios from "axios";
// import viteLogo from '/vite.svg'
import './App.css'

const API_URL = "http://localhost:5067/api/Messages";

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get(API_URL).then((response) => {
      setMessages(response.data);
    });
  }, []);

  const addMessage = (text) => {
    axios.post(API_URL, { text }).then((response) => {
      setMessages([...messages, response.data]);
    });
  };

  return (
    <div className="container mt-5">
      <h1>Message Thread</h1>
      <MessageForm onSubmit={addMessage} />
      <MessageList messages={messages} />
    </div>
  );
}

export default App;
