import React from 'react';
import ToggledComponent from '../common/ToggledComponent';
import ClassComponent from './ClassComponent';
import HookComponent from './HookComponent';

const SecondComponent = () => {
  return (
    <ToggledComponent
      index={2}
      classComponent={<ClassComponent />}
      hookComponent={<HookComponent />}
    />
  )
}

export default SecondComponent;