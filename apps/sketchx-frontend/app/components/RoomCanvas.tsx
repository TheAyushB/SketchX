"use client"

import { useEffect, useState } from "react";

import { WS_URL } from "../config";
import { Canvas } from "./Canvas";

export default function RoomCanvas({roomId}: {roomId: string}) {
    
    const [socket, setSocket] = useState<WebSocket | null>(null);

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0Y2JkMGIzNC02YjNhLTQ2MzUtYWUxZS1iNDVlM2IzZmJlNTIiLCJpYXQiOjE3MzgzNTU0ODZ9.YU8bEFmVyerTeSHo-iVsBGV9JdCvnEaIkabmWFdqcNo`);

        ws.onopen = () => {
            setSocket(ws);
            ws.send(JSON.stringify({
                type: "join_room",
                roomId
            }))
        }
    }, [])

    

    if(!socket) {
        return <div>
            Connecting to server....
        </div>
    }

    return (
        <div>
            <Canvas roomId = {roomId} socket = {socket} />
            
        </div>
    );
}