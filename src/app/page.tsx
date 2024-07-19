'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

export default function Home() {
  const [state, setState] = useState(0);

  const handleClick = () => {
    setState(state + 1);
  };

  return (
    <>
      <h1>こんにちは</h1>
      <div>state: {state}</div>
      <Button onClick={handleClick}>increment number button</Button>
    </>
  );
}
