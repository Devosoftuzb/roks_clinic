import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/chat.css'
function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = (e) => {
        e.preventDefault();
        if (input.trim() === "") return;

        // Har bir xabarni turiga qarab belgilaymiz
        const newMessage = {
            text: input,
            sender: "You", // O'z xabarlaringiz
        };
        setMessages([...messages, newMessage]);

        // Simulyatsiya qilingan boshqa foydalanuvchi javobi
        setTimeout(() => {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: "Bu boshqa foydalanuvchi javobi!", sender: "Other" },
            ]);
        }, 1000);

        setInput("");
    };
    return (
        <div className='personal'>
            <div className="container">
                <div className="profile-page">
                    <Sidebar />
                    <main className='main-content'>
                        <div className="chat-container">
                            <div className="chat-header">Online Chat</div>
                            <div className="chat-body">
                                {messages.map((message, index) => (
                                    <div
                                        key={index}
                                        className={`chat-message ${message.sender === "You" ? "chat-sender" : "chat-receiver"
                                            }`}
                                    >
                                        <span>{message.text}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="chat-footer">
                                <form onSubmit={sendMessage}>
                                    <input
                                        type="text"
                                        value={input}
                                        onChange={(e) => setInput(e.target.value)}
                                        placeholder="Type a message..."
                                    />
                                    <button type="submit">Send</button>
                                </form>
                            </div>
                        </div>

                    </main>
                </div>

            </div>

        </div>
    )
}

export default Chat
