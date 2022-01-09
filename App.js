import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View, TextInput } from 'react-native';

export default function App() {
  const title = 'Todo';
  return (
    <View style={styles.container}>
        <Text>Start a new {title}</Text>
        <TextInput
          style={{
            height:40,
            width:380,
            borderWidth:2
          }}
          defaultValue='Type here...'
        />
      <Button
        onPress={() => {
          alert('You tapped the button!');
        }}
        title="Press Me"
      />
        <View style={{
            width: 50, height: 50,marginTop:100, backgroundColor: 'steelblue'
          }} />
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
});p
