import React, { useState, useEffect } from 'react';
import { Container, Text, Button } from '../../assets/StyledComponents';
import api from '../../data/api';

const HookComponent = () => {
  const [loading, setLoading] = useState(false);
  const [albumId, setAlbumId] = useState(1);
  const [data, setData] = useState([]);

  console.log('hook-render')

  useEffect(() => {
    if (albumId === 0)
      console.log('hook-mounted');
    else
      console.log('hook-update')

    setLoading(true);
    setData([]);
    api.getPhotosFromAlbum(albumId)
      .then(response => response.json())
      .then(newData => {
        console.log(newData);
        setLoading(false);
        setData(newData);
      })
  }, [albumId]);

  function incrementAlbum() {
    setAlbumId((albumId % 100) + 1);
  }

  return (
      <Container color='pink'>
        <Text>Photos from Album {albumId}</Text>
        <Button onClick={incrementAlbum} disabled={loading}>Update Table</Button>
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

export default HookComponent;