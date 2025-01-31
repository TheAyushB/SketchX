"use client";
import { useEffect, useRef } from "react";

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const canvas = canvasRef.current;
            const ctx = canvas.getContext("2d");

            if (!ctx) return;

            // Set the initial black background
            ctx.fillStyle = "black";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            let clicked = false;
            let startX = 0;
            let startY = 0;

            canvas.addEventListener("mousedown", (e) => {
                clicked = true;
                startX = e.clientX;
                startY = e.clientY;
            });

            canvas.addEventListener("mouseup", () => {
                clicked = false;
            });

            canvas.addEventListener("mousemove", (e) => {
                if (clicked) {
                    const width = e.clientX - startX;
                    const height = e.clientY - startY;

                    // Redraw the black background on every move
                    ctx.fillStyle = "black";
                    ctx.fillRect(0, 0, canvas.width, canvas.height);

                    ctx.strokeStyle = "white";
                    ctx.strokeRect(startX, startY, width, height);
                }
            });
        }
    }, []);

    return (
        <div>
            <canvas ref={canvasRef} width={1920} height={1080}></canvas>
        </div>
    );
}
