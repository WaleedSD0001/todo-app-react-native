import { useState } from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Form({addTodo}) {

  const [todoContent, setTodoContent] = useState('')

  return (
    <View style={styles.formContainer}>
          <TextInput style={styles.input} placeholder='Write here...' clearButtonMode='always' onChangeText={(value) => setTodoContent(value)}/>
        <TouchableOpacity onPress={()=> addTodo(todoContent)}>
            <Text style={styles.btn}>+</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    flexDirection: 'row'
  },
  input: {
    backgroundColor: '#f4f4f4',
    width: 200,
    height: 35,
    padding: 10,
    borderRadius: 3
  },
  btn: {
    width: 35,
    height: 34,
    borderRadius: 3,
    fontSize: 18,
    lineHeight: 32,
    color: '#fff',
    backgroundColor: '#7d5fff',
    textAlign: 'center',
    marginLeft: 10,
  }
});
