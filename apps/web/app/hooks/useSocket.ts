import { useEffect, useState } from "react";
import { WS_URL } from "../config";


export function useSocket() {
    const [loading, setLoading] = useState(true);
    const [socket, setSocket] = useState<WebSocket>();

    useEffect(() => {
        const ws = new WebSocket(`${WS_URL}?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI5MWMyYzhmOS1kYWExLTQ0ODUtODUzNS0zYzIwYmM3NDZiMGUiLCJpYXQiOjE3MzczNjE3NzJ9.JjaWwtTt8TajMHAbbyPRQEIw2t22H14vY3voICDLuso`);
        ws.onopen = () => {
            setLoading(false);
            setSocket(ws);
        }
    }, []);

    return {
        socket,
        loading
    }
}