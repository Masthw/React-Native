import React from 'react';
import Header from '../components/Header';
import {ScrollView, StyleSheet} from 'react-native';
import Post from '../components/Post';
import { connect } from 'react-redux';
import { Post as PostType } from '../types/Post';


interface Props {
  posts: PostType[];
}

const Feed: React.FC<Props> = ({posts}) => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
      {posts.map(post => (
          <Post
          key={post.id}
          image={typeof post.image === 'string' ? { uri: post.image } : post.image}
          comments={post.comments}
          postId={post.id}
          nickname={post.nickname}
          email={post.email}
        />
        ))}
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

const mapStateToProps = (state: any) => ({
  posts: state.posts,
});

export default connect(mapStateToProps)(Feed);
