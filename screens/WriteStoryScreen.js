import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Header } from 'react-native-elements';

export default class WriteStoryScreen extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <Header
          backgroundColor={'pink'}
          centerComponent={{
            text: 'Story Hub',
            style: { color: 'black', fontSize: 20 },
          }}
        />
        <View style={styles.inputView}>
          <TextInput
            placeholder = "Story Title"
          />
        </View>

         <View style={styles.inputView}>
          <TextInput
            placeholder = "Author"
          />
        </View>

         <View style={styles.inputViewstory}>
          <TextInput
            placeholder = "Write your story"
          />
        </View>

        <TouchableOpacity style = {styles.submitButton}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputView: {
    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
  },
   header:{
      backgroundColor: 'pink',
      marginTop: 0,
      justifyContent:'center',
      alignItems:'center',
      width:1000,
      height:50,
      padding: 10,
      margin: 10
    },
    inputViewstory: {

    marginTop: 50,
    width: '80%',
    alignSelf: 'center',
    height: 100,
    textAlign: 'center',
    borderWidth: 4,
    outline: 'none',
    multiline: true,
  },
  submitButton:{
    backgroundColor: 'pink',
    padding: 10,
    margin: 10,
  },
});
