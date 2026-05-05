import React, { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [info, setInfo] = useState<string>('');

  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ name, email, message });
    setInfo("Uğurlu! Mesajınız kuryerlə yola düşdü 🚀");
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setInfo(''), 4000);
  };

  return (
    <div style={{
      backgroundColor: '#F4F7FF',
      minHeight: '100vh',
      width: '100vw',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "sans-serif",
      padding: '20px',
      boxSizing: 'border-box',
      position: 'fixed', // Başqa elementlərin altına düşməməsi üçün
      top: 0,
      left: 0,
      zIndex: 9999
    }}>
      
      {/* === ƏSAS KART === */}
      <div style={{
        backgroundColor: '#ffffff',
        width: '900px',
        maxWidth: '100%',
        borderRadius: '24px',
        boxShadow: '0 20px 40px rgba(108, 99, 255, 0.2)',
        display: 'flex',
        overflow: 'hidden',
        flexWrap: 'wrap',
        margin: 'auto',
        boxSizing: 'border-box'
      }}>
        
        {/* === SOL TƏRƏF: Rəngli Gradient Blok === */}
        <div style={{
          flex: '1 1 350px',
          background: 'linear-gradient(135deg, #6C63FF 0%, #FF6584 100%)',
          padding: '45px',
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box',
          textAlign: 'left'
        }}>
          <div>
            <h2 style={{ fontSize: '32px', margin: '0 0 15px 0', color: '#ffffff', fontWeight: 'bold' }}>
              Birlikdə Yaradaq!
            </h2>
            <p style={{ opacity: 0.9, lineHeight: '1.6', color: '#ffffff', fontSize: '15px', margin: 0 }}>
              Sualınız var, yoxsa sadəcə salam demək istəyirsiniz? Formu doldurun, komandamız tezliklə sizinlə əlaqə saxlayacaq.
            </p>
          </div>
          
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '25px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#ffffff', fontSize: '16px' }}>
              <span style={{ fontSize: '24px' }}>📍</span> Sumqayıt, Azərbaycan
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#ffffff', fontSize: '16px' }}>
              <span style={{ fontSize: '24px' }}>📧</span> support@ferqli.az
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#ffffff', fontSize: '16px' }}>
              <span style={{ fontSize: '24px' }}>📞</span> +994 (50) 123 45 67
            </div>
          </div>

          <div style={{ marginTop: '40px', fontSize: '13px', opacity: 0.7, color: '#ffffff' }}>
            © 2026 Fərqli Store. Bütün hüquqlar qorunur.
          </div>
        </div>

        {/* === SAĞ TƏRƏF: Form Bölməsi === */}
        <div style={{
          flex: '1 1 450px',
          padding: '50px',
          position: 'relative',
          boxSizing: 'border-box',
          backgroundColor: '#ffffff',
          textAlign: 'left'
        }}>
          <h2 style={{ color: '#2D3436', margin: '0 0 8px 0', fontSize: '30px', fontWeight: 'bold' }}>
            Bizə Yazın
          </h2>
          <p style={{ color: '#718096', margin: '0 0 30px 0', fontSize: '15px' }}>
            Aşağıdakı xanaları dolduraraq bizə mesaj göndərin.
          </p>
          
          {info && (
            <div style={{
              backgroundColor: '#D1FAE5',
              color: '#065F46',
              padding: '15px',
              borderRadius: '12px',
              marginBottom: '25px',
              fontWeight: 'bold',
              textAlign: 'center',
              border: '1px solid #A7F3D0',
              fontSize: '15px'
            }}>
              {info}
            </div>
          )}

          <form onSubmit={sendForm} style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            
            <label style={{ fontWeight: '600', color: '#4A5568', fontSize: '14px', marginBottom: '5px', display: 'block' }}>
              Adınız
            </label>
            <input
              type="text"
              placeholder="Nurlan Əliyev"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '14px 18px',
                margin: '0 0 20px 0',
                border: '2px solid #E2E8F0',
                borderRadius: '12px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#F8FAFC'
              }}
            />

            <label style={{ fontWeight: '600', color: '#4A5568', fontSize: '14px', marginBottom: '5px', display: 'block' }}>
              E-poçt
            </label>
            <input
              type="email"
              placeholder="nurlan@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '14px 18px',
                margin: '0 0 20px 0',
                border: '2px solid #E2E8F0',
                borderRadius: '12px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#F8FAFC'
              }}
            />

            <label style={{ fontWeight: '600', color: '#4A5568', fontSize: '14px', marginBottom: '5px', display: 'block' }}>
              Mesajınız
            </label>
            <textarea
              placeholder="Fikirlərinizi bura yazın..."
              style={{
                width: '100%',
                padding: '14px 18px',
                margin: '0 0 20px 0',
                border: '2px solid #E2E8F0',
                borderRadius: '12px',
                fontSize: '16px',
                outline: 'none',
                boxSizing: 'border-box',
                backgroundColor: '#F8FAFC',
                resize: 'none'
              }}
            />

            <button 
              type="submit"
              style={{
                background: 'linear-gradient(135deg, #6C63FF 0%, #5145CD 100%)',
                color: '#ffffff',
                border: 'none',
                padding: '16px 20px',
                borderRadius: '12px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '10px',
                boxShadow: '0 6px 15px rgba(108, 99, 255, 0.3)',
                width: '100%',
                boxSizing: 'border-box'
              }}
            >
              Mesajı Göndər →
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}