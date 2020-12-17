import React, { useState } from 'react';
import { Container, Label } from '../../assets/StyledComponents';

const ToggledComponent = props => {
  const [type, setType] = useState('');
  const { index, classComponent, hookComponent } = props;

  function renderComponent(type) {
    switch (type) {
      case 'class':
        console.log('===== CLASS COMPONENT =====');
        return classComponent;

      case 'hook':
        console.log('===== HOOK COMPONENT =====');
        return hookComponent;

      default:
        return <h3>Please choose a type!</h3>
    }
  }

  return (
    <Container>
      <div style={{ marginBottom: '20px' }}>
        <Label>
          <input
            type="radio"
            name={`component-type-${index}`}
            value="class"
            checked={type === "class"}
            onChange={(e) => setType(e.target.value)}
          />
          Class
        </Label>
        <Label>
          <input
            type="radio"
            name={`component-type-${index}`}
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

export default ToggledComponent;
