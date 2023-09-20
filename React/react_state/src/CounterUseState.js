import { useState } from 'react';

export default function CounterUseState() {
  const [number, setNumber] = useState(0);

  const handleIncrease = () => {
    setNumber(number + 1)
  };

  const handleDecrease = () => {
    setNumber(number - 1)
  };

  return (
    <div>
      <h1>{number}</h1>
      <button onClick={handleIncrease}>증가</button>
      <button onClick={handleDecrease}>감소</button>
    </div>
  );
}