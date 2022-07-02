import { useState } from 'react';
import { FlatList, StyleSheet, Text, View,Alert, TouchableWithoutFeedback,Keyboard} from 'react-native';
import {Shadow} from "react-native-shadow-2"
import Header from "./components/Header";
import TodoItem from './components/TodoItem';
import AddTodo from './components/Addtodo';
import {MaterialIcons} from "@expo/vector-icons"
const App=()=> {
  const [todos,setTodos] = useState([
    {text:"Buy cofee",key:1},
    {text:"Practice React native",key:2},
    {text:"Make a call with your relatives",key:3},
    {text:"Make lunch and dinner",key:4}
  ]);

  
  const pressHandler = (key) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter(item=>item.key !== key)
    })
  }

  const submitHandler = (newTodo,setNewTodo) =>{
    if(newTodo.length>4){
      setTodos((prevTodos)=>{
        return [
          ...prevTodos,
          {
            text:newTodo,
            key:Math.random().toString(),
          }
        ]
      });
      setNewTodo("")
    }else{

      Alert.alert("Hi Babyyyy","The information was invalid!" ,[{text:"Ok,Mr Mahdi" }])
    }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler}/>
          <View style={styles.list}>

            <FlatList
              data={todos}
              renderItem={({item})=>(
                <TodoItem item={item} pressHandler = {pressHandler}/>
              )}
            />

          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#e1e1e1',
  },
  content:{
    padding:40,
    flex:1,
  },
  list:{
    marginTop:20,
    flex:1,
  }
 
}) 
export default App;