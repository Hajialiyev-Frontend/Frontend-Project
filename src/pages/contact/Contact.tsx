import { useState } from 'react';

export default function Contact() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [info, setInfo] = useState<string>('');

  // Form göndərilməsi zamanı işləyən funksiya (TypeScript üçün xətasız tip)
  const sendForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    console.log({ name, email, message });
    
    setInfo("Uğurlu! Mesajınız göndərildi 🚀");
    
    // İnputları sıfırla
    setName('');
    setEmail('');
    setMessage('');
    
    // 4 saniyə sonra bildirişi sil
    setTimeout(() => setInfo(''), 4000);
  };

  const colors = {
    primary: '#6C63FF',
    secondary: '#FF6584',
    bg: '#F4F7FF',
    text: '#2D3436'
  };

  // İnputların ortaq dizaynı (TypeScript CSSProperties xətası verməməsi üçün yazılış)
  const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '12px 15px',
    margin: '8px 0',
    border: '2px solid #E1E1E1',
    borderRadius: '8px',
    fontSize: '16px',
    outline: 'none',
    boxSizing: 'border-box'
  };

  return (
    <div style={{
      backgroundColor: colors.bg,
      minHeight: '100vh',
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "sans-serif",
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      
      <div style={{
        backgroundColor: '#fff',
        width: '900px',
        maxWidth: '100%',
        borderRadius: '20px',
        boxShadow: '0 15px 35px rgba(0,0,0,0.05), 0 5px 15px rgba(0,0,0,0.05)',
        display: 'flex',
        overflow: 'hidden',
        flexWrap: 'wrap',
        margin: 'auto'
      }}>
        
        {/* === SOL TƏRƏF: Rəngli Bölmə === */}
        <div style={{
          flex: '1 1 350px',
          background: `linear-gradient(135deg, ${colors.primary} 0%, ${colors.secondary} 100%)`,
          padding: '40px',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          boxSizing: 'border-box'
        }}>
          <div>
            <h2 style={{ fontSize: '32px', margin: '0 0 10px 0', color: '#fff' }}>Birlikdə Yaradaq!</h2>
            <p style={{ opacity: 0.9, lineHeight: '1.6', color: '#fff' }}>
              Sualınız var, yoxsa sadəcə salam demək istəyirsiniz? Formu doldurun, komandamız tezliklə sizinlə əlaqə saxlayacaq.
            </p>
          </div>
          
          <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
              <span style={{ fontSize: '24px' }}>📍</span> Sumqayıt, Azərbaycan
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
              <span style={{ fontSize: '24px' }}>📧</span> support@ferqli.az
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#fff' }}>
              <span style={{ fontSize: '24px' }}>📞</span> +994 (50) 123 45 67
            </div>
          </div>

          <div style={{ marginTop: '40px', fontSize: '14px', opacity: 0.7, color: '#fff' }}>
            © 2026 Fərqli Store. Bütün hüquqlar qorunur.
          </div>
        </div>

        {/* === SAĞ TƏRƏF: Form Bölməsi === */}
        <div style={{
          flex: '1 1 450px',
          padding: '50px',
          position: 'relative',
          boxSizing: 'border-box'
        }}>
          <h2 style={{ color: colors.text, margin: '0 0 30px 0', fontSize: '28px' }}>Bizə Yazın</h2>
          
          {info && (
            <div style={{
              backgroundColor: '#D1FAE5',
              color: '#065F46',
              padding: '15px',
              borderRadius: '8px',
              marginBottom: '20px',
              fontWeight: 'bold',
              textAlign: 'center',
              border: '1px solid #A7F3D0'
            }}>
              {info}
            </div>
          )}

          <form onSubmit={sendForm} style={{ display: 'flex', flexDirection: 'column' }}>
            
            <label style={{ fontWeight: '600', color: '#555', textAlign: 'left', display: 'block' }}>Tam Adınız</label>
            <input
              type="text"
              placeholder="Nurlan Əliyev"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              style={inputStyle}
            />

            <label style={{ fontWeight: '600', color: '#555', marginTop: '15px', textAlign: 'left', display: 'block' }}>E-poçt Ünvanınız</label>
            <input
              type="email"
              placeholder="nurlan@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={inputStyle}
            />

            <label style={{ fontWeight: '600', color: '#555', marginTop: '15px', textAlign: 'left', display: 'block' }}>Mesajınız</label>
            <textarea
              placeholder="Fikirlərinizi buraya yazın..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              style={{ ...inputStyle, resize: 'vertical' }}
            />

            <button 
              type="submit"
              style={{
                background: `linear-gradient(135deg, ${colors.primary} 0%, #5145CD 100%)`,
                color: '#fff',
                border: 'none',
                padding: '15px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginTop: '25px',
                boxShadow: '0 4px 6px rgba(108, 99, 255, 0.3)'
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