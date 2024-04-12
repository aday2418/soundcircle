"use client"

import { createContext, useEffect, useState, useRef } from "react"
import useSWR from 'swr'
import { fetcher } from "../../lib/fetcher"

export const UsersOnlineContext = createContext()

export default function UsersOnlineProvider({children}){
    const { data, isLoading } = useSWR("/api/user", fetcher)
    const [usersOnline, setUsersOnline] = useState([])
    const [connected, setConnected] = useState(false)
    const [socket, setSocket] = useState(null);
    const socketRef = useRef(socket);

    useEffect(() => {
        socketRef.current = socket;  // Update the ref whenever socket changes
    }, [socket]);

    useEffect(() => {
        // This ensures the effect only runs once the user data is loaded and a connection hasn't been established yet.
        const username = data?.data;
        if (username && !connected) {
          // Initialize WebSocket connection
          const newSocket = new WebSocket(`${process.env.NEXT_PUBLIC_NODE_ENV == 'DEV' ? "ws://localhost:8080" : "wss://websocket.soundcircle.xyz"}`); 
    
          newSocket.onopen = () => {
            setConnected(true);
            const message = {
              eventType: 'newUser',
              data: {
                username: username
              }
            };
            // Send the message as soon as the connection is open
            newSocket.send(JSON.stringify(message));
          };
    
          newSocket.onmessage = (event) => {
            const res = JSON.parse(event.data)

            if(res.eventType == 'usersOnline') {
                setUsersOnline(res.data)
            }
          };
    
          newSocket.onclose = () => {
            setConnected(false);
          };
    
          setSocket(newSocket);
        }

        // Cleanup function to close the socket when the component unmounts or when `data` changes
        return () => {
          console.log("Unmounting")
          //console.log(socket)
          //socket && socket.close();
          console.log(socketRef.current);
          socketRef.current && socketRef.current.close();
          
        };
      }, [data]);

      console.log(usersOnline)
      console.log(socket)

      //console.log("Checked again", usersOnline)

    return(
        <UsersOnlineContext.Provider value={{usersOnline}}>
            {children}
        </UsersOnlineContext.Provider>
    )
}