'use client';

export default function ContactForm({ lang = 'es' }) {
  const t = {
    es: {
      name: 'Tu nombre',
      email: 'Email de empresa',
      message: '¿Cuántos comerciales tiene tu equipo? ¿Qué sector?',
      submit: 'Enviar mensaje →'
    },
    en: {
      name: 'Your name',
      email: 'Work email',
      message: 'How many reps does your team have? What sector?',
      submit: 'Send message →'
    }
  }[lang];

  return (
    <form style={{ display: 'flex', flexDirection: 'column', gap: '16px', maxWidth: '500px', margin: '0 auto' }} onSubmit={e => e.preventDefault()}>
      <input 
        type="text" 
        placeholder={t.name} 
        required
        style={{ padding: '14px 20px', background: 'var(--primary-mid)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none' }}
        onFocus={e => e.target.style.borderColor = 'var(--secondary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} 
      />
      <input 
        type="email" 
        placeholder={t.email} 
        required
        style={{ padding: '14px 20px', background: 'var(--primary-mid)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none' }}
        onFocus={e => e.target.style.borderColor = 'var(--secondary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} 
      />
      <textarea 
        placeholder={t.message} 
        rows={4}
        style={{ padding: '14px 20px', background: 'var(--primary-mid)', border: '1px solid var(--border-light)', borderRadius: '12px', color: 'white', fontSize: '0.95rem', fontFamily: 'var(--font-body)', outline: 'none', resize: 'vertical' }}
        onFocus={e => e.target.style.borderColor = 'var(--secondary)'}
        onBlur={e => e.target.style.borderColor = 'var(--border-light)'} 
      />
      <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}>
        {t.submit}
      </button>
    </form>
  );
}
