import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {RootStackParamList} from '../Navigator';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {connect} from 'react-redux';
import {login as loginAction} from '../store/actions/user';
import { User } from '../types/User';


type LoginScreenProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface Props {
  onLogin: (user: User) => void;
}

const Login: React.FC<Props> = ({onLogin}) => {
  const navigation = useNavigation<LoginScreenProp>();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    onLogin({
      name: 'Usuário',
      email,
      token: 'fake-token',
    });
    navigation.navigate('HomeTabs');
  };
  const signup = () => {
    navigation.navigate('Register');
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={styles.input}
        autoFocus={true}
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Senha"
        style={styles.input}
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity onPress={handleLogin} style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={signup} style={styles.button}>
        <Text style={styles.buttonText}>Criar nova conta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  input: {
    marginTop: 20,
    width: '90%',
    backgroundColor: '#EEE',
    height: 40,
    borderWidth: 1,
    borderColor: '#333',
  },
});

const mapDispatchToProps = (dispatch: any) => {
  return {
    onLogin: (user: User) => dispatch(loginAction(user)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
