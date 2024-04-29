import './Notifications.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React, { useState } from 'react';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';

interface Notification {
  id: number;
  text: string;
}

const Notifications: React.FC = () => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [inputText, setInputText] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleSendNotification = () => {
    if (inputText.trim() !== '') {
      const newNotification: Notification = {
        id: notifications.length + 1,
        text: inputText,
      };

      setNotifications([...notifications, newNotification]);
      setInputText('');
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendNotification();
    }
  };
  
  return (
    <div>
      <div className='Notifications'>
        {notifications.map((notification) => (
          <div key={notification.id} className='NotificationContainer'>
            {notification.text}
          </div>
        ))}
      </div>
      <div className='notifications-text-box'>
        <div className="emoticon-container"> 
          <InsertEmoticonIcon/>
        </div>
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
        />
        <button className='SendNotificationsButton' onClick={handleSendNotification}>
          <ArrowForwardIcon />
        </button>
      </div>
    </div>
  );
};

export default Notifications;
