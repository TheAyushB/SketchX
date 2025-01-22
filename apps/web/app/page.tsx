"use client";

import { useState } from "react";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";


export default function Home() {
  const [roomId, setRoomId] = useState("");
  const router = useRouter();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <input value={roomId} onChange={(e) => {
          setRoomId(e.target.value);
        }} type="text" placeholder="Room ID"></input>

        <button onClick={() => {
          router.push(`/room/${roomId}`);
        }}>Join Room</button>

      </main>
    </div>
  );
}
