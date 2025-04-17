import React from 'react';
import {StyleSheet, Text, View, Platform, Image} from 'react-native';
import icon from '../../assets/imgs/icon.png';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Image source={icon} style={styles.image} />
        <Text style={styles.title}>Lambe lambe</Text>
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
});

export default Header;
