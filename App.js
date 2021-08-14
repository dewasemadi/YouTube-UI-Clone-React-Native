import React, { useState, useEffect } from 'react';
import { ScrollView, View, StatusBar } from 'react-native';
import axios from 'axios';
import Header from './components/Header/Header';
import Card from './components/Card/Card';
import Navigation from './components/Navigation/Navigation';

const App = () => {
  const [data, setData] = useState([]);

  const BASE_URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
  useEffect(() => {
    axios
      .get(BASE_URL, {
        params: {
          part: 'snippet',
          maxResults: 10,
          playlistId: 'UU5tlNLMFpmrY2zUvQSQS-lw',
          key: 'AIzaSyD2UHTZ-6ZlnGX5wsUNcZHm3WfgCVRrtvk',
        },
      })
      .then((res) => {
        setData(res.data.items);
      })
      .catch((err) => {
        console.log(err);
        console.log('djancuk');
      });
  }, []);

  return (
    <View style={{ height: '100%', backgroundColor: '#383836' }}>
      <StatusBar animated={true} backgroundColor="#131313" />

      <ScrollView>
        <Header />
        <View>
          {data.map((item, idx) => (
            <Card key={idx} data={item} />
          ))}
        </View>
      </ScrollView>
      <Navigation />
    </View>
  );
};

export default App;
