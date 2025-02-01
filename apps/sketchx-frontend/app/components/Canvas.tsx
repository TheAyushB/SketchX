import { useEffect, useRef } from "react";
import { initDraw } from "../draw";

export function Canvas({ roomId, socket }: { roomId: string, socket: WebSocket }) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            initDraw(canvasRef.current, roomId, socket);
        }

    }, [canvasRef, roomId]);

    return <div>
        <canvas ref={canvasRef} width={1920} height={1080}></canvas>
        <div className="fixed bottom-0 right-0 bg-white rounded">
            <button className="secondary">Rect</button>
            <button className="secondary">Circle</button>
        </div>
    </div>
}