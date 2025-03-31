/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import UserList from './views/UserList';
import UserForm from './views/UserForm';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {UsersProvider} from './context/UsersContext';

export type RootStackParamList = {
  UserList: undefined;
  UserForm: {user?: {id: string; name: string; email: string; avatar: string}};
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <UsersProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="UserList"
          screenOptions={screenOptions}>
          <Stack.Screen
            name="UserList"
            component={UserList}
            options={({navigation}) => ({
              title: 'Lista de Usuários',
              headerRight: () => <AddUserButton navigation={navigation} />,
            })}
          />
          <Stack.Screen
            name="UserForm"
            component={UserForm}
            options={{title: 'Formulário de Usuários'}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </UsersProvider>
  );
};

interface AddUserButtonProps {
  navigation: any;
}

const AddUserButton: React.FC<AddUserButtonProps> = ({navigation}) => (
  <Button
    type="clear"
    icon={<Icon name="add" size={25} color="white" />}
    onPress={() => navigation.navigate('UserForm')}
  />
);

const screenOptions: StackNavigationOptions = {
  headerStyle: {
    backgroundColor: '#f4511e',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold' as 'bold',
  },
};

export default App;
