import React from 'react';
import Title from '../../components/Title';

export default function RandomizeColors() {
  const handleClick = (event) => {
    let body = document.querySelector('body');
    body.style.background = getRandomColor();
    event.target.style.backgroundColor = getRandomColor();
  };

  function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
  }

  return (
    <div className="container m-auto text-center">
      <Title text={'Randomize Color'} classes={'mb-4 '} />
      <button className="btn btn-danger" onClick={handleClick}>
        Click me
      </button>
      <button className="btn btn-succsess" onClick={handleClick}>
        Click me
      </button>
      <button className="btn btn-primary" onClick={handleClick}>
        Click me
      </button>
      <button className="btn btn-warning" onClick={handleClick}>
        Click me
      </button>
    </div>
  );
}
