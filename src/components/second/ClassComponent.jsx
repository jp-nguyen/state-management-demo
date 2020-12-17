import React, { Component } from 'react';
import { Container, Text, Button } from '../../assets/StyledComponents';
import api from '../../data/api';

class ClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      albumId: 1
    };
  }

  componentDidMount() {
    console.log('class-mounted');
    this.getInfo();
  }

  componentDidUpdate(_, prevState) {
    console.log('class-update');
    if (this.state.albumId !== prevState.albumId)
      this.getInfo();
  }

  componentWillUnmount() {
    console.log('class-unmounting');
  }

  incrementAlbum = () => {
    const { albumId } = this.state;
    this.setState({ albumId: (albumId % 100) + 1 })
  }

  getInfo = () => {
    const { albumId } = this.state;
    this.setState({ loading: true, data: [] })

    api.getPhotosFromAlbum(albumId)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({ loading: false, data });
      });
  }

  render() {
    console.log('class-render');

    const { loading, data, albumId } = this.state;

    return (
      <Container color='#ADDFFF'>
        <Text>Photos from Album {albumId}</Text>
        <Button onClick={this.incrementAlbum} disabled={loading}>Update Table</Button>
        {
          loading ? <Text>Calling the API...</Text>
            : (
              <table>
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Thumbnail</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map(value => {
                    const { id, title, thumbnailUrl } = value;
                    return (
                      <tr key={id}>
                        <td>{id}</td>
                        <td>{title}</td>
                        <td><img src={thumbnailUrl} alt={title} height={50} width={50} /></td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )
        }
      </Container>
    )
  }
}

export default ClassComponent;