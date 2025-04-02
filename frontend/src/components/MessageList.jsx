
function MessageList({ messages }) {
    return (
      <ul className="list-group">
        {messages.map((msg) => (
          <li key={msg.id} className="list-group-item">
            {msg.text} <small className="text-muted">({new Date(msg.createdAt).toLocaleString()})</small>
          </li>
        ))}
      </ul>
    );
  }
  
  export default MessageList;