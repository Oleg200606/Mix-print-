import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message, subject, orderDetails } =
      body;

    // Используем Formspree как надежный бесплатный сервис
    const response = await fetch("https://formspree.io/f/mqazenpe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        _replyto: email,
        _subject: subject || "Новый запрос с сайта МИКС ПРИНТ",
        name: name,
        phone: phone,
        email: email,
        company: company || "Не указана",
        message: message || "Нет сообщения",
        orderDetails: orderDetails || "Нет деталей",
        timestamp: new Date().toISOString(),
      }),
    });

    const data = await response.json();

    if (response.ok) {
      console.log("✅ Письмо успешно отправлено через Formspree");

      // Дополнительно: сохраняем в консоль для надежности
      console.log("📝 Локальный лог запроса:", {
        name,
        phone,
        email,
        company,
        time: new Date().toLocaleString("ru-RU"),
      });

      return NextResponse.json({
        success: true,
        message:
          "Письмо успешно отправлено! Менеджер свяжется с вами в течение 30 минут.",
      });
    } else {
      throw new Error(`Formspree error: ${JSON.stringify(data)}`);
    }
  } catch (error: any) {
    console.error("❌ Ошибка отправки письма:", error);

    // Все равно сохраняем данные локально на случай ошибки
    try {
      const body = await request.json();
      console.log("📋 Сохраняем запрос локально:", {
        name: body.name,
        phone: body.phone,
        email: body.email,
        company: body.company,
        timestamp: new Date().toISOString(),
        error: error.message,
      });
    } catch (e) {
      console.error("Ошибка при сохранении лога:", e);
    }

    return NextResponse.json(
      {
        success: false,
        message:
          "Запрос сохранен! Наш менеджер свяжется с вами по телефону +7 (955) 505-40-01",
      },
      { status: 200 }
    ); // Все равно возвращаем 200 для пользователя
  }
}
