import React from 'react';
import ToggledComponent from '../common/ToggledComponent';
import ClassComponent from './ClassComponent';
import HookComponent from './HookComponent';

const FirstComponent = () => {
  return (
    <ToggledComponent
      index={1}
      classComponent={<ClassComponent />}
      hookComponent={<HookComponent />}
    />
  )
}

export default FirstComponent;