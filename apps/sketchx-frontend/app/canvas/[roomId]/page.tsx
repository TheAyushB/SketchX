"use client";
import { initDraw } from "@/app/draw";
import { useEffect, useRef } from "react";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {

            initDraw(canvasRef.current);

        }
        
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={1920} height={1080}></canvas>
        </div>
    );
}
