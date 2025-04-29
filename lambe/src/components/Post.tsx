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
  postId: string;
  image: ImageSourcePropType;
  comments: CommentItem[];
  nickname: string;
  email: string;
};

const Post: React.FC<Props> = ({ image, comments, postId, nickname, email }) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Author email={email} nickname={nickname} />
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
