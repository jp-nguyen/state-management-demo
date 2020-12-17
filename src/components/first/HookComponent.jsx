import React, { useState, useEffect } from 'react';
import { Container, Text, Button } from '../../assets/StyledComponents';

const HookComponent = () => {
  const [count, setCount] = useState(0);

  console.log('hook-render')

  useEffect(() => {
    if (count === 0)
      console.log('hook-mounted');
    else
      console.log('hook-update');
  }, [count]);

  function incrementCount() {
    setCount(count + 1);
  }

  return (
    <Container color='pink'>
      <Text>
        This button has been pressed {count} time{count !== 1 && 's'}
      </Text>
      <Button onClick={incrementCount}>Click me!</Button>
    </Container>
  )
}

export default HookComponent;