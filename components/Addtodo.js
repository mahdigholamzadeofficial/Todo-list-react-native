import React ,{useState} from "react";
import {Text,View ,Button ,StyleSheet,TextInput ,TouchableOpacity} from "react-native"

const AddTodo = ({submitHandler}) =>{
  const [newTodo,setNewTodo] =useState("");

  const changeHandler =(e) =>{
    setNewTodo(e)
  }
  return (
    <View>
      <TextInput
        placeholderTextColor='#141414'
        style={styles.input}
        placeholder="New Todo..."
        onChangeText={changeHandler}   
        value={newTodo}   
      />

        <TouchableOpacity
          style={styles.button}
          onPress={()=>(submitHandler(newTodo,setNewTodo))}>
            <Text style={styles.text}>
              Add todo
            </Text>
        </TouchableOpacity>
    </View>
  )
}
const styles = StyleSheet.create({
  input:{
    marginBottom:10,
    paddingHorizontal:8,
    paddingVertical:6,
    borderBottomColor:"#181818",
    borderBottomWidth:1,
    borderBottomStyle: "solid", 
    color:"#181818"
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#181818',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})
export default AddTodo;