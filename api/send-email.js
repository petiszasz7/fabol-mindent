export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, city, street, product, color, size, roofType, extras, finalPrice, message } = req.body;

  if (!name || !email || !phone || !product) {
    return res.status(400).json({ error: 'Hiányzó kötelező mezők' });
  }

  const productNames = {
    'nagy-jatszter': 'Nagy Játszótér',
    'kis-jatszter': 'Kis Játszótér',
    'kerti-kiulo': 'Kerti Kiülő – Nádtetős',
    'korisfa-garnitura': 'Kőrisfa Garnitúra 2+2+1',
    'osszecsukhato': 'Összecsukható Garnitúra',
    '5-pozicios': '5 Pozíciós Garnitúra',
    'pillango': 'Pillangó Csavaros Garnitúra',
    'hintaagy': 'Zsindelytetős Hintaágy',
    'egyeb': 'Egyéb',
  };

  const productLabel = productNames[product] || product;

  const orderSummaryRows = [
    size ? `<tr><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1); width:130px;"><span style="color:rgba(44,24,16,0.55); font-size:13px;">Méret</span></td><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="font-size:14px;">${size}</span></td></tr>` : '',
    color ? `<tr><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="color:rgba(44,24,16,0.55); font-size:13px;">Szín</span></td><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="font-size:14px;">${color}</span></td></tr>` : '',
    roofType ? `<tr><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="color:rgba(44,24,16,0.55); font-size:13px;">Tetőtípus</span></td><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="font-size:14px;">${roofType}</span></td></tr>` : '',
    extras ? `<tr><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="color:rgba(44,24,16,0.55); font-size:13px;">Kiegészítők</span></td><td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="font-size:14px;">${extras}</span></td></tr>` : '',
  ].filter(Boolean).join('');

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #2C1810;">
      <div style="background: #2D5016; padding: 24px 32px; border-radius: 12px 12px 0 0;">
        <h1 style="color: white; margin: 0; font-size: 20px;">Új árajánlat kérés – Fából Mindent</h1>
      </div>
      <div style="background: #F5F0EB; padding: 32px; border-radius: 0 0 12px 12px; border: 1px solid rgba(44,24,16,0.1); border-top: none;">

        ${(size || color || roofType || extras || finalPrice) ? `
        <div style="background: #f0f7ea; border: 2px solid #2D5016; border-radius: 10px; padding: 20px 24px; margin-bottom: 28px;">
          <h2 style="margin: 0 0 14px 0; font-size: 15px; color: #2D5016;">🛒 Rendelés összefoglalója</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1); width:130px;"><span style="color:rgba(44,24,16,0.55); font-size:13px;">Termék</span></td>
              <td style="padding:7px 0; border-bottom:1px solid rgba(45,80,22,0.1);"><span style="font-size:14px; font-weight:600; color:#2D5016;">${productLabel}</span></td>
            </tr>
            ${orderSummaryRows}
            ${finalPrice ? `
            <tr>
              <td style="padding:10px 0 0 0;"><span style="color:rgba(44,24,16,0.55); font-size:13px;">Végső ár</span></td>
              <td style="padding:10px 0 0 0;"><span style="font-size:17px; font-weight:700; color:#2D5016;">${finalPrice}</span></td>
            </tr>` : ''}
          </table>
        </div>
        ` : ''}

        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08); width: 140px;">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Név</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px;">${name}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">E-mail</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <a href="mailto:${email}" style="color: #2D5016; font-size: 15px;">${email}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Telefon</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <a href="tel:${phone}" style="color: #2D5016; font-size: 15px;">${phone}</a>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Város</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px;">${city || '–'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Utca, házszám</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px;">${street || '–'}</span>
            </td>
          </tr>
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Termék</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px; font-weight: 600; color: #2D5016;">${productLabel}</span>
            </td>
          </tr>
          ${color ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Szín</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px;">${color}</span>
            </td>
          </tr>
          ` : ''}
          ${size ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Méret</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px;">${size}</span>
            </td>
          </tr>
          ` : ''}
          ${roofType ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Tetőtípus</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px;">${roofType}</span>
            </td>
          </tr>
          ` : ''}
          ${extras ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Kiegészítők</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px;">${extras}</span>
            </td>
          </tr>
          ` : ''}
          ${finalPrice ? `
          <tr>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Végső ár</strong>
            </td>
            <td style="padding: 10px 0; border-bottom: 1px solid rgba(44,24,16,0.08);">
              <span style="font-size: 15px; font-weight: 600; color: #2D5016;">${finalPrice}</span>
            </td>
          </tr>
          ` : ''}
          ${message ? `
          <tr>
            <td style="padding: 10px 0; vertical-align: top;">
              <strong style="color: rgba(44,24,16,0.5); font-size: 13px;">Üzenet</strong>
            </td>
            <td style="padding: 10px 0;">
              <p style="margin: 0; font-size: 15px; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
            </td>
          </tr>
          ` : ''}
        </table>
      </div>
    </div>
  `;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Fából Mindent <onboarding@resend.dev>',
        to: ['fabolmindent.hu@gmail.com'],
        subject: `Új árajánlat kérés – ${productLabel} (${name})`,
        html: htmlBody,
        reply_to: email,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Email küldési hiba' });
    }

    return res.status(200).json({ success: true, message: 'Email sikeresen elküldve' });
  } catch (err) {
    console.error('Send email error:', err);
    return res.status(500).json({ error: 'Szerver hiba' });
  }
}
