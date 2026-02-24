# Posting the contact form to your server

The contact form **first tries to POST to a server**. If that fails (e.g. 404), it **falls back to opening WhatsApp** so the visitor can still send you the message.

You can receive submissions on your server in two ways.

---

## Option 1: External backend (keeps static export)

Keep `output: 'export'` in `next.config.js` and host the site as static files. Use a **separate backend** to receive the form.

1. **Create an API** that accepts `POST` with JSON body:
   - `name` (string, required)
   - `phone` (string, required)
   - `interest` (string, one of: `partner` | `volunteer` | `help`)
   - `message` (string, optional)

2. **Set the env variable** when building or in your host:
   ```bash
   NEXT_PUBLIC_CONTACT_API_URL=https://your-api.com
   ```
   The form will POST to `https://your-api.com/api/contact`.  
   If your endpoint is different (e.g. `https://your-api.com/contact`), you can change the path in `components/Contact.tsx` (search for `CONTACT_API`).

3. Your backend can then:
   - Store in a database
   - Send you an email
   - Forward to WhatsApp using WhatsApp Business API or a service

---

## Option 2: Next.js API route (no static export)

Use a **Next.js API route** on the same app. This requires **removing static export** and deploying to a platform that runs Node (e.g. Vercel).

1. **Remove** `output: 'export'` from `next.config.js` (and optionally `trailingSlash` if you prefer).

2. **Create** `app/api/contact/route.ts` with:

```ts
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, interest, message } = body;

    if (!name?.trim() || !phone?.trim() || !['partner', 'volunteer', 'help'].includes(interest)) {
      return NextResponse.json(
        { error: 'Missing or invalid: name, phone, interest required.' },
        { status: 400 }
      );
    }

    // Optional: send email, save to DB, or forward to WhatsApp
    // await sendEmail({ name: name.trim(), phone: phone.trim(), interest, message: message?.trim() });

    console.log('Contact:', { name: name.trim(), phone: phone.trim(), interest, message: (message || '').trim() });

    return NextResponse.json({
      success: true,
      message: 'Thank you! We will get back to you soon.',
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: 'Something went wrong.' }, { status: 500 });
  }
}
```

3. **Deploy** to Vercel (or any Node host). The form will POST to `/api/contact` on the same domain and you’ll get submissions in your server logs (or add email/DB as in the comment).

---

## Summary

| Setup                         | Form behavior                                                                 |
|------------------------------|-------------------------------------------------------------------------------|
| Static export, no env set    | POST to `/api/contact` → 404 → **WhatsApp opens** (current default)          |
| Static export + env set      | POST to your `NEXT_PUBLIC_CONTACT_API_URL` → success or **WhatsApp fallback** |
| No static export + API route | POST to `/api/contact` → **handled by Next.js**                              |
