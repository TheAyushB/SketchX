"use client";
import { usePathname } from "next/navigation";
import "../styles/globals.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
    const isCanvasRoute = pathname.startsWith("/canvas");

    return (
        <html lang="en">
            <body className={isCanvasRoute ? "disable-global-styles" : ""}>
                {children}
            </body>
        </html>
    );
}
