import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Gravatar} from 'react-native-gravatar';
import { RootStackParamList } from '../Navigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type ProfileScreenProp = NativeStackNavigationProp<RootStackParamList, 'HomeTabs'>;

const Profile: React.FC = () => {
    const navigation = useNavigation<ProfileScreenProp>();
  const options = {email: 'example@test.gmail.com', secure: true};

  const logout = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <Gravatar options={options} style={styles.avatar} />
      <Text style={styles.nickname}>Fulano de tal</Text>
      <Text style={styles.email}>fulanodetal@gmail.com</Text>
      <TouchableOpacity onPress={logout} style={styles.button}>
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

export default Profile;
