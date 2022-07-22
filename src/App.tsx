import React from 'react';
import { Button } from './components/Button/Button';

export default function App(): React.ReactElement {
  return (
    <>
      <Button size="small" variant="solid">
        Solid Button
      </Button>
      <Button size="medium" variant="soft">
        Soft Button
      </Button>
      <Button size="large" variant="outline">
        Outline Button
      </Button>
      <Button size="large" variant="plain">
        Plain Button
      </Button>
    </>
  );
}
