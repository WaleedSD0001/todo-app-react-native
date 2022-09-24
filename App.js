import { useState } from 'react';
import { StyleSheet, FlatList, View, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Form from './components/Form';
import Item from './components/Item';

export default function App() {

  const [rows, setRow] = useState([
    
  ])

  const addTodo = (val) => {
    if(val.trim() != '' && val.length > 3) {
      setRow([
        ...rows, {text: val, key: Date.now().toString()}
      ])
    }
  }

  const deleteTodo = (itemId)=> {
    setRow((prevRows)=> {
      return prevRows.filter(it => it.key != itemId)
    })
  }

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
      <View style={styles.container}>
      <Form addTodo={addTodo} />
      <View style={styles.list}>
        <FlatList
                data={rows}
                numColumns={1}
                renderItem={({item})=> (
                  <Item row={item} deleteRow={deleteTodo} />
                )}
            />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 75,
    padding: 35
  },
  list: {
    marginTop: 100
  }
});
