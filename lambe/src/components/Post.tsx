import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import Author from './Author';

type Props = {
  image: ImageSourcePropType;
};

const Post: React.FC<Props> = ({image}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email="maverick17xd@gmail.com" nickname="Lucas Campanharo" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: (Dimensions.get('window').width * 3) / 4,
  },
});

export default Post;
