'use client';

import React, { useState, useEffect, useRef } from 'react';

interface WhatsAppConfig {
  phoneNumber: string;
  messages: {
    [key: string]: string;
  };
}

interface ChatOption {
  key: string;
  label: string;
  icon: string;
}

const WhatsApp: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const floatButtonRef = useRef<HTMLButtonElement>(null);

  const WHATSAPP_CONFIG: WhatsAppConfig = {
    phoneNumber: '254754145088',
    messages: {
      general: 'Hello! I visited your portfolio website and would like to discuss a potential web development project.',
      frontend: 'Hi! I\'m interested in your frontend development services. Can we discuss my project requirements?',
      backend: 'Hello! I need backend development services for my application. Could you help me with this?',
      fullstack: 'Hi! I\'m looking for a full-stack developer to build my web application. Are you available for a project?',
      mobile: 'Hello! I need mobile app development services. Can we discuss my project requirements?',
      consultation: 'Hi! I would like to schedule a consultation to discuss my web development project.'
    }
  };

  const chatOptions: ChatOption[] = [
    { key: 'frontend', label: 'Frontend Development', icon: '🎨' },
    { key: 'backend', label: 'Backend Development', icon: '⚙️' },
    { key: 'fullstack', label: 'Full-Stack Project', icon: '🚀' },
    { key: 'mobile', label: 'Mobile Development', icon: '📱' },
    { key: 'consultation', label: 'Free Consultation', icon: '💬' }
  ];

  const openWhatsApp = (messageType: string = 'general'): void => {
    const message = WHATSAPP_CONFIG.messages[messageType] || WHATSAPP_CONFIG.messages.general;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
    setIsPopupOpen(false);
  };

  const toggleChatPopup = (): void => {
    setIsPopupOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target as Node) && 
        floatButtonRef.current && 
        !floatButtonRef.current.contains(event.target as Node)
      ) {
        setIsPopupOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const styles = `
    .whatsapp-float {
      position: fixed;
      width: 60px;
      height: 60px;
      bottom: 30px;
      left: 30px;
      background: linear-gradient(135deg, #25D366 0%, #20c157 100%);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4);
      z-index: 1000;
      transition: all 0.3s ease;
      cursor: pointer;
      text-decoration: none;
      border: none;
      outline: none;
      animation: pulse 2s infinite;
    }
    .whatsapp-float:hover {
      background: linear-gradient(135deg, #20c157 0%, #1ea049 100%);
      transform: scale(1.1);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.6);
    }
    .whatsapp-float:active {
      transform: scale(0.95);
    }
    @keyframes pulse {
      0% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); }
      50% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.7); }
      100% { box-shadow: 0 4px 15px rgba(37, 211, 102, 0.4); }
    }
    .chat-popup {
      position: fixed;
      bottom: 100px;
      left: 30px;
      width: 320px;
      background: white;
      border-radius: 15px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.15);
      z-index: 1001;
      overflow: hidden;
      transition: transform 0.3s ease-out, opacity 0.3s ease-out;
      transform: translateY(20px);
      opacity: 0;
      visibility: hidden;
    }
    .chat-popup.show {
      transform: translateY(0);
      opacity: 1;
      visibility: visible;
    }
    .chat-header {
      background: linear-gradient(135deg, #25D366 0%, #20c157 100%);
      color: white;
      padding: 15px;
      border-radius: 15px 15px 0 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .chat-header h4 { 
      margin: 0; 
      font-size: 16px; 
      font-weight: 600; 
    }
    .close-chat {
      background: none; 
      border: none; 
      color: white; 
      font-size: 20px;
      cursor: pointer; 
      padding: 0; 
      width: 25px; 
      height: 25px;
      display: flex; 
      align-items: center; 
      justify-content: center;
      border-radius: 50%;
      transition: background-color 0.2s ease;
    }
    .close-chat:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
    .chat-body { 
      padding: 20px; 
    }
    .chat-message {
      background: #f8f9fa; 
      color: #333; 
      padding: 12px 15px; 
      border-radius: 10px;
      margin-bottom: 15px; 
      font-size: 14px; 
      line-height: 1.4;
      border-left: 4px solid #25D366;
    }
    .chat-options { 
      display: flex; 
      flex-direction: column; 
      gap: 8px; 
    }
    .chat-option {
      background: linear-gradient(135deg, #25D366 0%, #20c157 100%);
      color: white; 
      padding: 12px 15px; 
      border-radius: 25px;
      text-decoration: none; 
      font-size: 14px; 
      text-align: left;
      transition: all 0.3s ease; 
      border: none; 
      cursor: pointer;
      display: flex;
      align-items: center;
      gap: 8px;
      font-weight: 500;
    }
    .chat-option:hover { 
      background: linear-gradient(135deg, #20c157 0%, #1ea049 100%);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(37, 211, 102, 0.3);
    }
    @media (max-width: 768px) {
      .whatsapp-float { 
        left: 20px; 
        bottom: 20px; 
        width: 55px; 
        height: 55px; 
        font-size: 20px; 
      }
      .chat-popup { 
        left: 20px; 
        width: calc(100% - 40px); 
        bottom: 85px; 
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <button
        ref={floatButtonRef}
        className="whatsapp-float"
        onClick={toggleChatPopup}
        aria-label="Open WhatsApp chat"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 30, height: 30 }}>
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
        </svg>
      </button>

      <div ref={popupRef} className={`chat-popup ${isPopupOpen ? 'show' : ''}`}>
        <div className="chat-header">
          <h4>Web Development Services</h4>
          <button 
            className="close-chat" 
            onClick={toggleChatPopup}
            aria-label="Close chat"
          >
            ×
          </button>
        </div>
        <div className="chat-body">
          <div className="chat-message">
            Hello! 👋 Let's discuss your web development project. How can I help you today?
          </div>
          <div className="chat-options">
            {chatOptions.map((option) => (
              <button
                key={option.key}
                className="chat-option"
                onClick={() => openWhatsApp(option.key)}
              >
                <span>{option.icon}</span>
                <span>{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default WhatsApp;