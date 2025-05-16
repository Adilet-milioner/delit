import React, { useState } from 'react';

const Form = () => {
  const [gmail, setGmail] = useState('');
  const [password, setPassword] = useState('');
  const [gmailError, setGmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ката билдирүүлөрдү тазалайбыз
    setGmailError('');
    setPasswordError('');

    let isValid = true;

    // Gmail текшерүү
    if (!gmail.includes('@')) {
      setGmailError('Gmail дарегинде @ болушу керек!');
      isValid = false;
    }

    // Пароль текшерүү
    if (password.length < 8) {
      setPasswordError('Пароль кеминде 8 символ болушу керек!');
      isValid = false;
    }

    // Эгер баары туура болсо
    if (isValid) {
      const data = {
        gmail: gmail,
        password: password
      };
      console.log('Жөнөтүлгөн маалымат:', data);
      alert('Форма ийгиликтүү жөнөтүлдү!');
      setGmail('');
      setPassword('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Форма регистрации</h2>

      <div>
        <label>Gmail:</label><br />
        <input
          type="text"
          value={gmail}
          onChange={(e) => setGmail(e.target.value)}
        />
        {gmailError && <div style={{ color: 'red' }}>{gmailError}</div>}
      </div>

      <br />

      <div>
        <label>Пароль:</label><br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
      </div>

      <br />

      <button type="submit">Отправить</button>
    </form>
  );
};

export default Form;
