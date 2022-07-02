import React from 'react'
import { TouchableOpacity ,Text,StyleSheet,View} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"

const TodoItem=({item,pressHandler})=> {
  return (
    <TouchableOpacity onPress={()=>pressHandler(item.key)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={17} color="#181818"/>
        <Text style={styles.textItem}>
          {item.text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  item:{
    flexDirection:"row",
    padding:16,
    marginTop:16,
    borderColor: '#181818',
    borderWidth:2,
    borderStyle:"solid",
    borderRadius:10,
    // textAlign:'right' 
  },
  textItem:{
    color:"#181818",
    marginLeft:5,
    fontSize:"16"
  }
})
export default TodoItem;
