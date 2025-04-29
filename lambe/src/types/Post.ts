import {ImageSourcePropType} from 'react-native';

export interface Post {
  id: string;
  nickname: string;
  email: string;
  image: ImageSourcePropType;
  comments: Comment[];
}

export interface Comment {
  nickname: string;
  comment: string;
}
