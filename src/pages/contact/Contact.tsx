import{ useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [info, setInfo] = useState(''); 

  const sendForm = (e: any) => {
    e.preventDefault();
    
    console.log({ name, email, message });
    
    setInfo("Mesajınız uğurla göndərildi!"); 
    

    setName('');
    setEmail('');
    setMessage('');

    setTimeout(() => {
      setInfo('');
    }, 3000);
  };

  return (
    <div style={{ maxWidth: '350px', margin: '40px auto' }}>
      <h2>Contact Us</h2>
      
      {/* Əgər info-da yazı varsa ekranda göstərir */}
      {info && <p style={{ color: 'green' }}>{info}</p>}

      <form onSubmit={sendForm} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;