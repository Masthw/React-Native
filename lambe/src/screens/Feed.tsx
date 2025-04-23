import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet} from 'react-native';
import Post from '../components/Post';
import {CommentItem} from '../components/Comments';

const mockComments: CommentItem[] = [
  {nickname: 'Lucas', comment: 'mto bom!'},
  {nickname: 'Maria', comment: 'top top'},
];

const Feed: React.FC = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Post
          image={require('../../assets/imgs/fence.jpg')}
          comments={mockComments}
          postId={1}
        />
        <Post
          image={require('../../assets/imgs/bw.jpg')}
          comments={[]}
          postId={2}
        />
         <Post
          image={require('../../assets/imgs/boat.jpg')}
          comments={[]}
          postId={3}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',

  },
});

export default Feed;
