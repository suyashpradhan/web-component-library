import React from 'react';
import { Button } from './components/Button/Button';

export default function App(): React.ReactElement {
  return (
    <>
      <Button variant="solid">Solid Button</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="outline">Outline Button</Button>
      <Button variant="link">Link</Button>
    </>
  );
}
