'use client';

import { Button } from '@/app/_components/ui/button';

export default function Home() {
  const handleClick = () => {
    // eslint-disable-next-line no-console
    console.log('click');
  };

  return (
    <>
      <h1>こんにちは</h1>
      <Button onClick={handleClick}>button</Button>
    </>
  );
}
