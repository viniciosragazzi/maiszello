import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método não permitido' });

  const { nome, idade, email, numero, qtdPessoas } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ error: 'Nome e e-mail são obrigatórios.' });
  }

  try {
    await resend.emails.send({
      from: process.env.LEAD_FROM_EMAIL || 'leads@seudominio.com',
      to: process.env.LEAD_TO_EMAIL || 'você@seudominio.com',
      subject: 'Novo Lead Capturado',
      html: `
        <h2>Novo Lead</h2>
        <p><b>Nome:</b> ${nome}</p>
        <p><b>Idade:</b> ${idade}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Telefone:</b> ${numero}</p>
        <p><b>Quantidade de pessoas:</b> ${qtdPessoas}</p>
      `,
    });
    return res.status(200).json({ success: true });
  } catch (err: any) {
    return res.status(500).json({ error: 'Erro ao enviar e-mail', details: err.message });
  }
}
