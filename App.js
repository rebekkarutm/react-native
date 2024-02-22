import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';

import Button from './components/Button';
import Email from './components/Email';
import Password from './components/Password';
import Checkbox from './components/Checkbox';

export default function App() {
  const [checked, setChecked] = useState(false)
  return (
    <>
      <View style={styles.container}></View>
      <View style={styles.menu}>
        <Text style={styles.text}>Welcome</Text>
        <Email/>
        <Password/>
        <View style={styles.checkboxContainer}>
          <Checkbox
            checked={checked}
            onChange={setChecked}
            buttonStyle={styles.checkboxBase}
            activeButtonStyle={styles.checkboxChecked}
          />
          <Text style={styles.checkboxLabel}>Save password</Text>
        </View>
        <Button label='Log in'/>
      </View>
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/3,
    backgroundColor: '#03a89b',
  },
  menu: {
    flex: 2/3,
    backgroundColor: '#fff',
    padding: 20,
  },
  text: {
    fontSize: 48,
    textAlign: 'center',
    paddingTop: 20,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#03a89b',
    backgroundColor: 'transparent'
  },
  checkboxChecked: {
    backgroundColor: '#03a89b',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    marginTop: 6,
    fontSize: 16,
  },
});