import React, { Component } from 'react';
import { Container, Text, Button } from '../assets/StyledComponents';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };

    console.log('class-constructor');
  }

  componentDidMount() {
    console.log('class-mounted');
  }

  componentDidUpdate() {
    console.log('class-update');
  }

  componentWillUnmount() {
    console.log('class-unmounting');
  }

  incrementCount = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  }

  render() {
    console.log('class-render');

    const { count } = this.state;

    return (
      <Container color='#ADDFFF'>
        <Text>
          This button has been pressed {count} time{count !== 1 && 's'}
        </Text>
        <Button onClick={this.incrementCount}>Click me!</Button>
      </Container>
    )
  }
}

export default ClassComponent;