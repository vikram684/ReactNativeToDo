import { StatusBar } from 'expo-status-bar';
import react from 'react';
import {Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const title = 'Todo App';
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={{ color : 'white'}}>hello</Text>
        </View>
        <Text>Start a new {title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize:200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header:{
    height:25,
    alignItems: 'center',
    justifyContent: 'center',
    width:100,
    backgroundColor:'green',
  }
});
