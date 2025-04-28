import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import icon from '../../assets/imgs/icon.png';
import {connect} from 'react-redux';
import {Gravatar} from 'react-native-gravatar';
import {User} from '../types/User';

interface Props {
  user: User;
}

const Header: React.FC<Props> = ({user}) => {
  const gravatarOptions = {email: user?.email || '', secure: true};
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <View style={styles.leftContainer}>
          <Image source={icon} style={styles.image} />
          <Text style={styles.title}>Lambe lambe</Text>
        </View>
        <View style={styles.rightContainer}>
          <Text style={styles.username}>{user?.name}</Text>
          <Gravatar options={gravatarOptions} style={styles.avatar} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'ios' ? 20 : 30,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#bbb',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  leftContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  title: {
    color: '#000',
    fontFamily: 'shelter',
    height: 30,
    fontSize: 28,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginLeft: 10,
  },
  username: {
    color: '#888',
    fontSize: 12,
    marginLeft: 5,
  },
});

const mapStateToProps = (state: any) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Header);
