import react from "react";
import {Text,View,StyleSheet} from "react-native"


const Header =()=>{
  return (
    <View style={styles.header}>
      <Text style={styles.title}>
        My Todos
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header:{
    height:80,
    paddingTop:40,
    backgroundColor: '#111',
    opacity:1
  },
  title:{
    textAlign: 'center',
    fontSize:20,
    fontWeight:"bold",
    color: 'white',
  }

}) 
export default Header