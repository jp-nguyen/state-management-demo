import React, { useState } from 'react';
import ClassComponent from './components/ClassComponent';
import HookComponent from './components/HookComponent';
import { Container, Label } from './assets/StyledComponents';

function renderComponent(type) {
  switch (type) {
    case 'class':
      console.log('===== CLASS COMPONENT =====');
      return <ClassComponent />

    case 'hook':
      console.log('===== HOOK COMPONENT =====');
      return <HookComponent />

    default:
      return <h3>Please choose a type!</h3>
  }
}

const App = () => {
  const [type, setType] = useState('');

  return (
    <Container>
      <div style={{marginBottom: '20px'}}>
        <Label>
          <input
            type="radio"
            name="component-type"
            value="class"
            checked={type === "class"}
            onChange={(e) => setType(e.target.value)}
          />
          Class
        </Label>
        <Label>
          <input
            type="radio"
            name="component-type"
            value="hook"
            checked={type === "hook"}
            onChange={(e) => setType(e.target.value)}
          />
          Hook
        </Label>
      </div>
      <div>
        {renderComponent(type)}
      </div>
    </Container>
  );
}

export default App;
