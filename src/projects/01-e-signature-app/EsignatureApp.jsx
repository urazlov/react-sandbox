import React, { useState } from 'react';
import Title from '../../components/Title';

export default function EsignatureApp() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const inputStyle = {
    border: 'none',
    borderBottom: '2px dotted',
    outline: 'none',
    padding: '.35rem 0',
  };

  return (
    <div className="container text-center">
      <Title classes={'title'} text={!name ? 'Your name' : name} />
      <Title classes={'main-title mb-4'} text={!date ? 'Date' : date} />
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis et
        exercitationem, ullam qui doloremque delectus a nesciunt quibusdam quam
        quidem repellat velit adipisci quia. Eaque rem ipsum rerum nesciunt
        dolor!
      </p>
      <footer
        className="d-flex"
        style={{
          justifyContent: 'space-around',
          position: 'relative',
          top: '40vh',
        }}
      >
        <input
          type="date"
          value={''}
          style={inputStyle}
          onChange={handleDateChange}
        />
        <input
          type="text"
          value={name}
          style={inputStyle}
          onChange={handleNameChange}
        />
      </footer>
    </div>
  );
}
