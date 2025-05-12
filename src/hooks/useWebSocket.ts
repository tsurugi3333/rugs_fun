// src/hooks/useWebSocket.ts
import { useState, useEffect, useRef } from 'react';

type WebSocketMessage = {
  type: string;
  data: string;
};

interface UseWebSocketOptions {
  onOpen?: (event: Event) => void;
  onMessage?: (message: WebSocketMessage) => void;
  onError?: (event: Event) => void;
  onClose?: (event: CloseEvent) => void;
  reconnectAttempts?: number;
  reconnectInterval?: number;
}

const useWebSocket = (url: string, options: UseWebSocketOptions = {}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState<WebSocketMessage | null>(null);
  const webSocketRef = useRef<WebSocket | null>(null);
  const reconnectAttemptsRef = useRef(0);
  const maxReconnectAttempts = options.reconnectAttempts || 5;
  const reconnectInterval = options.reconnectInterval || 3000;
  
  const connect = () => {
    try {
      const ws = new WebSocket(url);
      
      ws.onopen = (event) => {
        setIsConnected(true);
        reconnectAttemptsRef.current = 0;
        if (options.onOpen) options.onOpen(event);
      };
      
      ws.onmessage = (event) => {
        try {
          const message = JSON.parse(event.data);
          setLastMessage(message);
          if (options.onMessage) options.onMessage(message);
        } catch (error) {
          console.error('Failed to parse WebSocket message:', error);
        }
      };
      
      ws.onerror = (event) => {
        if (options.onError) options.onError(event);
      };
      
      ws.onclose = (event) => {
        setIsConnected(false);
        if (options.onClose) options.onClose(event);
        
        // Attempt to reconnect
        if (reconnectAttemptsRef.current < maxReconnectAttempts) {
          reconnectAttemptsRef.current += 1;
          setTimeout(connect, reconnectInterval);
        }
      };
      
      webSocketRef.current = ws;
    } catch (error) {
      console.error('WebSocket connection error:', error);
    }
  };
  
  const sendMessage = (message: string) => {
    if (webSocketRef.current && isConnected) {
      webSocketRef.current.send(JSON.stringify(message));
    } else {
      console.warn('WebSocket is not connected, cannot send message');
    }
  };
  
  const disconnect = () => {
    if (webSocketRef.current) {
      webSocketRef.current.close();
      webSocketRef.current = null;
    }
  };
  
  useEffect(() => {
    connect();
    
    return () => {
      disconnect();
    };
  }, [url]);
  
  return {
    isConnected,
    lastMessage,
    sendMessage,
    disconnect,
    reconnect: connect
  };
};

export default useWebSocket;