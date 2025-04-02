import { useState } from "react";

function MessageForm({ onSubmit }) {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Enter message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="btn btn-primary mt-2" type="submit">Send</button>
    </form>
  );
}

export default MessageForm;
