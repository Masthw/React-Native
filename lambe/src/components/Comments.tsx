import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export type CommentItem = {
  nickname: string;
  comment: string;
};

type CommentProps = {
  comments?: CommentItem[];
};

const Comments: React.FC<CommentProps> = ({comments}) => {
  return (
    <View style={styles.container}>
      {comments?.map((item, index) => (
        <View style={styles.commentContainer} key={index}>
          <Text style={styles.nickname}>{item.nickname}:</Text>
          <Text style={styles.comment}>{item.comment}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  commentContainer: {
    flexDirection: 'row',
    marginTop: 5,
  },
  nickname: {
    marginLeft: 5,
    fontWeight: 'bold',
    color: '#444',
  },
  comment: {
    color: '#555',
    marginLeft: 5,
  },
});

export default Comments;
