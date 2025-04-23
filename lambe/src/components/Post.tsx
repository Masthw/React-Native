import React from 'react';
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  View,
} from 'react-native';
import Author from './Author';
import Comments from './Comments';
import { CommentItem } from './Comments';
import AddComment from './AddComment';

type Props = {
  postId: number;
  image: ImageSourcePropType;
  comments: CommentItem[];
};

const Post: React.FC<Props> = ({image, comments, postId}) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email="maverick17xd@gmail.com" nickname="Lucas Campanharo" />
      <Comments comments={comments} />
      <AddComment postId={postId} />
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
