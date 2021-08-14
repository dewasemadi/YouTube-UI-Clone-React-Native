import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../constants';
import styles from './Card.style';

const Card = ({ data }) => {
  console.log(data);

  return (
    <View style={styles.cardMargin}>
      <Image source={{ uri: data.snippet.thumbnails.high.url }} style={styles.videoPreview} />
      <View style={styles.overviewContainer}>
        <View>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRewX150uy0JPn7M-aBVLItJObo9fcJaJZ8J20A2MvVnWTSjqACstAsdfiwtqfXJ5ZquzU&usqp=CAU',
            }}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.overviewContainer2}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{data.snippet.title}</Text>
            <Text style={styles.description}>{data.snippet.channelTitle} . 654K views . 1 day ago</Text>
          </View>
          <View style={styles.optionIcon}>
            <Icon name="more-vert" size={22} color={colors.grey} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default Card;
