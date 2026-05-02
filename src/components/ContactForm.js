'use client';
import { useState } from 'react';

export default function ContactForm({ lang = 'es' }) {
  const [status, setStatus] = useState('');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const t = {
    es: {
      name: 'Tu nombre',
      email: 'Email de empresa',
      message: '¿Cuántos comerciales tiene tu equipo? ¿Qué sector?',
      submit: 'Enviar mensaje →',
      sending: 'Enviando...',
      success: '¡Mensaje enviado! Te contactaremos pronto en hola@traksal.com',
      error: 'Hubo un error. Por favor, escribe a hola@traksal.com'
    },
    en: {
      name: 'Your name',
      email: 'Work email',
      message: 'How many reps does your team have? What sector?',
      submit: 'Send message →',
      sending: 'Sending...',
      success: 'Message sent! We will contact you soon from hola@traksal.com',
      error: 'There was an error. Please write to hola@traksal.com'
    }
  }[lang];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Usamos Formspree como puente gratuito para enviar el mail a hola@traksal.com
    // NOTA: El usuario debe confirmar el email en Formspree la primera vez.
    const response = await fetch('https://formspree.io/f/xvgopkno', { // ID temporal, el usuario debería poner el suyo
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, _subject: 'Nuevo contacto desde la Web Traksal' })
    });

    if (response.ok) {
      setStatus('success');
      setName('');
      setEmail('');
      setMessage('');
    } else {
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div style={{ padding: '32px', background: 'rgba(39,174,96,0.1)', borderRadius: '16px', border: '1px solid #27AE60', color: '#7DFFB0', textAlign: 'center' }}>
        <div style={{ fontSize: '2rem', marginBottom: '12px' }}>✅</div>
        <p style={{ margin: 0, fontWeight: 600 }}>{t.success}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px', margin: '0 auto' }}>
      <input 
        type="text" 
        name="name"
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder={t.name} 
        required
        style={{ padding: '14px 20px', background: 'var(--primary-mid)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none' }}
        onFocus={e => e.target.style.borderColor = 'var(--secondary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} 
      />
      <input 
        type="email" 
        name="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder={t.email} 
        required
        style={{ padding: '14px 20px', background: 'var(--primary-mid)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none' }}
        onFocus={e => e.target.style.borderColor = 'var(--secondary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} 
      />
      <textarea 
        name="message"
        value={message}
        onChange={e => setMessage(e.target.value)}
        placeholder={t.message} 
        rows={4}
        style={{ padding: '14px 20px', background: 'var(--primary-mid)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }}
        onFocus={e => e.target.style.borderColor = 'var(--secondary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} 
      />
      <button 
        type="submit" 
        className="btn btn-primary btn-lg" 
        disabled={status === 'sending'}
        style={{ width: '100%', justifyContent: 'center', opacity: status === 'sending' ? 0.7 : 1 }}
      >
        {status === 'sending' ? t.sending : t.submit}
      </button>
      {status === 'error' && <p style={{ color: '#E74C3C', fontSize: '0.85rem', marginTop: '8px' }}>{t.error}</p>}
    </form>
  );
}
