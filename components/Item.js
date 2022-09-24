import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function List({row, deleteRow}) {
  return (
    <TouchableOpacity>
        <View style={styles.row}>
          <Text style={styles.text}>{row.text}</Text>
          <MaterialCommunityIcons name="delete-outline" size={15} color="#ff4d4d" onPress={()=> deleteRow(row.key)} />
        </View>
    </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    row: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexDirection: 'row',
      backgroundColor: '#7d5fff',
      padding: 7,
      borderRadius: 3,
      marginBottom: 20,
    },
    text: {
      color: '#fff',
      fontSize: 12
    }
})