import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addComment} from '../store/actions/posts';
import {
  Keyboard,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type AddCommentProps = {
  postId: string;
  user: {
    name: string;
  };
  onAddComment: (
    postId: string,
    comment: {nickname: string; comment: string},
  ) => void;
};

const AddComment: React.FC<AddCommentProps> = ({
  postId,
  user,
  onAddComment,
}) => {
  const [comment, setComment] = useState('');

  const handleAddComment = () => {
    if (comment.trim()) {
      onAddComment(postId, {
        nickname: user.name,
        comment,
      });
      setComment('');
      Keyboard.dismiss();
    }
  };

  const handleCancel = () => {
    setComment('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <Icon name="comment-o" size={20} color="#555" />
      <TextInput
        placeholder="Digite seu comentário..."
        value={comment}
        onChangeText={setComment}
        onSubmitEditing={handleAddComment}
        style={styles.input}
        returnKeyType="send"
      />
      {comment.length > 0 && (
        <TouchableWithoutFeedback onPress={handleCancel}>
          <View style={styles.iconWrapper}>
            <Icon name="times" size={16} color="#555" />
          </View>
        </TouchableWithoutFeedback>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  caption: {
    marginLeft: 10,
    fontSize: 12,
    color: '#CCC',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    width: '90%',
  },
  iconWrapper: {
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
});

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = {
  onAddComment: addComment,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddComment);
