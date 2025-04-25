import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import { RootStackParamList } from '../Navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { connect } from 'react-redux';
import { logout as logoutAction} from '../store/actions/user';
import { User } from '../types/User';

type ProfileScreenProp = NativeStackNavigationProp<RootStackParamList, 'HomeTabs'>;

interface Props {
  user: User;
  onLogout: () => void;
}

const Profile: React.FC<Props> = ({user, onLogout}) => {
    const navigation = useNavigation<ProfileScreenProp>();
    const options = {email: user?.email || '', secure: true};

  const handleLogout = () => {
    onLogout();
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>{user?.name}</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginTop: 100,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 20,
    fontSize: 25,
  },
  button: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#4286f4',
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
  },
});

const mapStateToProps = (state: any) => ({
  user: state.user,
});

const mapDispatchToProps = {
  onLogout: logoutAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
