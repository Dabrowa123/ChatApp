import React, { useEffect, useState } from "react";
import { Client } from "@stomp/stompjs";

const SOCKET_URL = "ws://localhost:8082/ws-message";

const AppStomp = () => {
  const [messages, setMessages] = useState("Your server message here.");

  useEffect(() => {
    let client = null;

    const onConnected = () => {
      console.log("Connected!!");
      client.subscribe("/topic/message", function (msg) {
        if (msg.body) {
          const jsonBody = JSON.parse(msg.body);
          if (jsonBody.content) {
            setMessages(jsonBody.content);
          }
        }
      });
    };

    const onDisconnected = () => {
      console.log("Disconnected!!");
    };

    client = new Client({
      brokerURL: SOCKET_URL,
      reconnectDelay: 5000,
      heartbeatIncoming: 4000,
      heartbeatOutgoing: 4000,
      onConnect: onConnected,
      onDisconnect: onDisconnected,
    });

    client.activate();

    return () => {
      client.deactivate();
    };
  }, []);

  return (
    <div>
      <div>{messages}</div>
    </div>
  );
};

export default AppStomp;
