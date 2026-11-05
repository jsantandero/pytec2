import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = { title: "PYTEC | Gestión simple para tu empresa", description: "Gestión comercial para pequeñas empresas y trabajadores independientes." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="es-CL"><body>{children}</body></html>; }
