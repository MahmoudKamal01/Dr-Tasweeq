import { useState, useEffect, useRef } from "react";
import FreelancerLayout from "../../components/FreelancerLayout";
import { chatMessages } from "../../data/dummyData";
import { useAuth } from "../../contexts/AuthContext";
import {
  FiSend,
  FiPaperclip,
  FiSmile,
  FiMoreVertical,
  FiUsers,
  FiMessageCircle,
  FiSearch,
} from "react-icons/fi";

const FreelancerChat = () => {
  const { user } = useAuth();
  const [messages, setMessages] = useState(chatMessages);
  const [newMessage, setNewMessage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const messagesEndRef = useRef(null);
  const [isTyping, setIsTyping] = useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Simulate incoming messages
  useEffect(() => {
    const interval = setInterval(() => {
      const randomMessages = [
        "Thanks for the update!",
        "Looking great so far!",
        "Can we schedule a call tomorrow?",
        "The design looks perfect!",
        "Any questions about the requirements?",
        "Great work on this!",
      ];

      const randomSenders = [
        { name: "John Client", avatar: "https://ui-avatars.com/api/?name=John+Client&background=DC1F2E&color=fff" },
        { name: "Admin User", avatar: "https://ui-avatars.com/api/?name=Admin+User&background=4F46E5&color=fff" },
      ];

      const randomSender = randomSenders[Math.floor(Math.random() * randomSenders.length)];
      const randomMessage = randomMessages[Math.floor(Math.random() * randomMessages.length)];

      const newMsg = {
        id: Date.now(),
        sender: randomSender.name,
        message: randomMessage,
        timestamp: new Date().toISOString(),
        isOwn: false,
        avatar: randomSender.avatar,
      };

      setMessages(prev => [...prev, newMsg]);
    }, 10000); // New message every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message = {
      id: Date.now(),
      sender: user.name,
      message: newMessage,
      timestamp: new Date().toISOString(),
      isOwn: true,
      avatar: user.avatar,
    };

    setMessages(prev => [...prev, message]);
    setNewMessage("");
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const filteredMessages = messages.filter(msg =>
    msg.message.toLowerCase().includes(searchTerm.toLowerCase()) ||
    msg.sender.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const uniqueSenders = [...new Set(messages.map(msg => msg.sender))];

  return (
    <FreelancerLayout>
      <div className="h-[calc(100vh-8rem)] flex flex-col bg-gray-800 rounded-lg border border-gray-700">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-700 bg-gray-800 rounded-t-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-green-600 rounded-lg">
                <FiMessageCircle className="text-white" size={20} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white">Team Chat</h2>
                <p className="text-sm text-gray-400">
                  {uniqueSenders.length} participants • {messages.length} messages
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="relative">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search messages..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <button className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors">
                <FiMoreVertical size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {filteredMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
            >
              <div className={`flex max-w-xs lg:max-w-md ${message.isOwn ? "flex-row-reverse" : "flex-row"}`}>
                {!message.isOwn && (
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="w-8 h-8 rounded-full mr-3 flex-shrink-0"
                  />
                )}
                <div className={`flex flex-col ${message.isOwn ? "items-end" : "items-start"}`}>
                  {!message.isOwn && (
                    <span className="text-xs text-gray-400 mb-1">{message.sender}</span>
                  )}
                  <div
                    className={`px-4 py-2 rounded-lg ${
                      message.isOwn
                        ? "bg-green-600 text-white"
                        : "bg-gray-700 text-white"
                    }`}
                  >
                    <p className="text-sm">{message.message}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1">
                    {formatTime(message.timestamp)}
                  </span>
                </div>
                {message.isOwn && (
                  <img
                    src={message.avatar}
                    alt={message.sender}
                    className="w-8 h-8 rounded-full ml-3 flex-shrink-0"
                  />
                )}
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-lg">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }} />
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }} />
                </div>
                <span className="text-xs text-gray-400">Someone is typing...</span>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-700 bg-gray-800 rounded-b-lg">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <FiPaperclip size={20} />
            </button>
            <div className="flex-1 relative">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type your message..."
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                onFocus={() => setIsTyping(true)}
                onBlur={() => setIsTyping(false)}
              />
            </div>
            <button
              type="button"
              className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            >
              <FiSmile size={20} />
            </button>
            <button
              type="submit"
              disabled={!newMessage.trim()}
              className="p-3 bg-green-600 hover:bg-green-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white rounded-lg transition-colors"
            >
              <FiSend size={20} />
            </button>
          </form>
        </div>

        {/* Online Users */}
        <div className="p-4 border-t border-gray-700 bg-gray-800">
          <div className="flex items-center space-x-2">
            <FiUsers className="text-gray-400" size={16} />
            <span className="text-sm text-gray-400">Online:</span>
            <div className="flex space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-300">John Client</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-300">Admin User</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-2 h-2 bg-green-500 rounded-full" />
                <span className="text-sm text-gray-300">You</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FreelancerLayout>
  );
};

export default FreelancerChat;
