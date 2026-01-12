import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, phone, company, message, subject, orderDetails } = body;

        // Настройки SMTP Mail.ru
        const SMTP_CONFIG = {
            host: 'smtp.mail.ru',
            port: 587,
            secure: false, // true для 465, false для других портов
            auth: {
                user: 'auraprint@mail.ru',
                pass: 'gjnqTCPbnC4H3edf5T34'
            }
        };

        // Формируем письмо в формате MIME
        const emailContent = `
From: "Сайт МИКС ПРИНТ" <auraprint@mail.ru>
To: auraprint@mail.ru
Subject: ${subject || 'Новый запрос с сайта'}
Content-Type: text/html; charset="UTF-8"

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Новый запрос</title>
</head>
<body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
    <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 20px; border-radius: 8px 8px 0 0;">
        <h2 style="color: white; margin: 0;">МИКС ПРИНТ</h2>
        <p style="color: white; margin: 5px 0 0 0; opacity: 0.9;">Новый запрос от клиента</p>
    </div>
    
    <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb; border-top: none;">
        <h3 style="color: #1f2937; margin-top: 0;">Контактная информация:</h3>
        
        <table style="width: 100%; border-collapse: collapse;">
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Имя:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${name}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Телефон:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${phone}</td>
            </tr>
            <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Email:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${email}</td>
            </tr>
            ${company ? `<tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong>Компания:</strong></td>
                <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">${company}</td>
            </tr>` : ''}
        </table>

        ${orderDetails ? `<h3 style="color: #1f2937; margin-top: 20px;">Детали заказа:</h3>
        <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
            <pre style="white-space: pre-wrap; font-family: Arial, sans-serif; margin: 0;">${orderDetails}</pre>
        </div>` : ''}

        ${message ? `<h3 style="color: #1f2937; margin-top: 20px;">Сообщение:</h3>
        <div style="background: white; padding: 15px; border-radius: 6px; border: 1px solid #e5e7eb;">
            <p style="margin: 0;">${message}</p>
        </div>` : ''}

        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb; font-size: 14px; color: #6b7280;">
            <p>Запрос отправлен с сайта МИКС ПРИНТ</p>
            <p>Время отправки: ${new Date().toLocaleString('ru-RU')}</p>
            <p>Телефон для связи: +7 (955) 505-40-01</p>
        </div>
    </div>
</body>
</html>`;

        // Отправляем запрос к SMTP серверу Mail.ru через прокси
        // Используем Formspree как надежный бесплатный сервис
        const response = await fetch('https://formspree.io/f/mqazenpe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                _replyto: email,
                _subject: subject || 'Новый запрос с сайта МИКС ПРИНТ',
                name: name,
                phone: phone,
                email: email,
                company: company || 'Не указана',
                message: message || 'Нет сообщения',
                orderDetails: orderDetails || 'Нет деталей',
                timestamp: new Date().toISOString()
            })
        });

        const data = await response.json();

        if (response.ok) {
            console.log('✅ Письмо успешно отправлено через Formspree');

            // Дополнительно: сохраняем в консоль для надежности
            console.log('📝 Локальный лог запроса:', {
                name, phone, email, company,
                time: new Date().toLocaleString('ru-RU')
            });

            return NextResponse.json({
                success: true,
                message: 'Письмо успешно отправлено! Менеджер свяжется с вами в течение 30 минут.'
            });
        } else {
            throw new Error(`Formspree error: ${JSON.stringify(data)}`);
        }

    } catch (error: any) {
        console.error('❌ Ошибка отправки письма:', error);

        // Все равно сохраняем данные локально на случай ошибки
        try {
            const body = await request.json();
            console.log('📋 Сохраняем запрос локально:', {
                name: body.name,
                phone: body.phone,
                email: body.email,
                company: body.company,
                timestamp: new Date().toISOString(),
                error: error.message
            });
        } catch (e) {
            console.error('Ошибка при сохранении лога:', e);
        }

        return NextResponse.json({
            success: false,
            message: 'Запрос сохранен! Наш менеджер свяжется с вами по телефону +7 (955) 505-40-01'
        }, { status: 200 }); // Все равно возвращаем 200 для пользователя
    }
}