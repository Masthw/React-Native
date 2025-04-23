declare module '*.png' {
  const value: any;
  export default value;
}

declare module 'react-native-gravatar' {
  import * as React from 'react';
  import { ImageProps } from 'react-native';

  export interface GravatarOptions {
    email?: string;
    secure?: boolean;
    parameters?: { [key: string]: string };
  }

  export interface GravatarProps extends ImageProps {
    options: GravatarOptions;
  }

  export class Gravatar extends React.Component<GravatarProps> {}
}

declare module 'react-native-vector-icons/FontAwesome' {
  import { Icon } from 'react-native-vector-icons/Icon';
  export default Icon;
}

