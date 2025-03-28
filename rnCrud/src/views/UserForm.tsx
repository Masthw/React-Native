import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RouteProp} from '@react-navigation/native';
import {TextInput} from 'react-native-gesture-handler';
import {Button} from 'react-native-elements';

type RootStackParamList = {
  UserList: undefined;
  UserForm: {user?: {id: string; name: string; email: string; avatar: string}};
};

type UserFormRouteProp = RouteProp<RootStackParamList, 'UserForm'>;

interface Props {
  route: UserFormRouteProp;
  navigation: any;
}

const UserForm: React.FC<Props> = ({route, navigation}) => {
  const [user, setUser] = useState(
    route.params?.user || {id: '', name: '', email: '', avatar: ''},
  );

  useEffect(() => {
    if (route.params?.user) {
      setUser(route.params.user);
    }
  }, [route.params]);

  return (
    <View style={style.form}>
      <Text>Nome</Text>
      <TextInput
        style={style.input}
        onChangeText={text => setUser({...user, name: text})}
        placeholder="Informe o Nome"
        value={user.name}
      />

      <Text>Email</Text>
      <TextInput
        style={style.input}
        onChangeText={text => setUser({...user, email: text})}
        placeholder="Informe o Email"
        value={user.email}
      />
      <Text>Url do Avatar</Text>
      <TextInput
        style={style.input}
        onChangeText={text => setUser({...user, avatar: text})}
        placeholder="Informe o Email"
        value={user.avatar}
      />
      <Button
        title={'Salvar'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    padding: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
  },
});

export default UserForm;
