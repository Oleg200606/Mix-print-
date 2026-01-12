// app/layout.tsx - ПРОСТОЙ
import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "МИКС ПРИНТ | Производство корпоративного мерча для крупного бизнеса",
  description:
    "Полный цикл производства корпоративной одежды и промопродукции оптом для IT-компаний, холдингов, банков. Печать на футболках, толстовках, кружках. Персональный менеджер.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
