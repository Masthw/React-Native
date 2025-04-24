import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import {ScrollView, Text, TextInput} from 'react-native-gesture-handler';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';

const AddPhoto: React.FC = () => {
  const [imageUri, setImageUri] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');

  const handleImageResponse = (response: any) => {
    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.errorCode) {
      console.log('ImagePicker Error: ', response.errorMessage);
    } else if (response.assets && response.assets.length > 0) {
      setImageUri(response.assets[0].uri || null);
    }
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Permissão para usar a câmera',
            message: 'O app precisa de acesso à câmera para tirar fotos.',
            buttonNeutral: 'Pergunte-me depois',
            buttonNegative: 'Cancelar',
            buttonPositive: 'OK',
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else {
      return true;
    }
  };

  const selectImage = async () => {
    Alert.alert('Selecionar imagem', 'Escolha a origem da imagem', [
      {
        text: 'Tirar Foto',
        onPress: async () => {
          const hasPermission = await requestCameraPermission();
          if (hasPermission) {
            launchCamera(
              {mediaType: 'photo', quality: 0.8},
              handleImageResponse,
            );
          } else {
            Alert.alert(
              'Permissão negada',
              'Permissão para usar a câmera foi negada.',
            );
          }
        },
      },
      {
        text: 'Escolher da Galeria',
        onPress: () =>
          launchImageLibrary(
            {mediaType: 'photo', quality: 0.8},
            handleImageResponse,
          ),
      },
      {
        text: 'Cancelar',
        style: 'cancel',
      },
    ]);
  };

  const save = () => {
    if (!imageUri) {
      console.log('Nenhuma imagem selecionada.');
      return;
    }

    console.log('Salvando imagem e comentário...');
    console.log('Imagem URI:', imageUri);
    console.log('Comentário:', comment);

    setImageUri(null);
    setComment('');
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Compartilhe uma imagem:</Text>
        <View style={styles.imageContainer}>
          {imageUri && <Image source={{uri: imageUri}} style={styles.image} />}
        </View>
        <TouchableOpacity onPress={selectImage} style={styles.button}>
          <Text style={styles.buttonText}>Selecionar Imagem</Text>
        </TouchableOpacity>
        <TextInput
          placeholder="Algum comentário para a foto?"
          style={styles.input}
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity onPress={save} style={styles.button}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: Dimensions.get('window').width / 2,
    resizeMode: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: Platform.OS === 'ios' ? 30 : 50,
    fontWeight: 'bold',
  },
  imageContainer: {
    width: '90%',
    height: Dimensions.get('window').width / 2,
    backgroundColor: '#EEE',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#4286f4',
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFF',
  },
  input: {
    marginTop: 20,
    width: '90%',
    borderColor: '#CCC',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default AddPhoto;
