import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'Contact API is working',
  });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      phone,
      email,
      message,
    } = body;

    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          message:
            'Name, No. HP, email, dan message wajib diisi.',
        },
        { status: 400 }
      );
    }

    const botToken =
      process.env.TELEGRAM_BOT_TOKEN;

    const chatId =
      process.env.TELEGRAM_CHAT_ID;

    if (!botToken || !chatId) {
      return NextResponse.json(
        {
          success: false,
          message:
            'TELEGRAM_BOT_TOKEN atau TELEGRAM_CHAT_ID belum tersedia.',
        },
        { status: 500 }
      );
    }

    const telegramMessage = `
📩 NEW PORTFOLIO MESSAGE

👤 Name:
${name}

📱 No. HP:
${phone}

📧 Email:
${email}

💬 Message:
${message}
`;

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${botToken}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: telegramMessage,
        }),
      }
    );

    const telegramResult =
      await telegramResponse.json();

    console.log(
      'TELEGRAM RESPONSE:',
      telegramResult
    );

    if (
      !telegramResponse.ok ||
      !telegramResult.ok
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            telegramResult.description ||
            'Gagal mengirim pesan ke Telegram.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message:
        'Pesan berhasil dikirim ke Telegram.',
    });
  } catch (error) {
    console.error(
      'CONTACT API ERROR:',
      error
    );

    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : 'Internal server error.',
      },
      { status: 500 }
    );
  }
}