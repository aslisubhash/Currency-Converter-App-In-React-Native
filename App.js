import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity
  
} from 'react-native';

const currencyPerRupee = {
  DOLLAR: 0.014,
  EURO: 0.012,
  POUND: 0.011,
  RUBEL: 0.93,
  AUSDOLLAR: 0.2,
  CANDOLLAR: 0.019,
  YEN: 1.54,
  DINAR: 0.0043,
  BITCOIN: 0.000004
}

const App = () => {
  const [inputValue, setInput] = useState(0);
  const [resultValue, setResultValue] = useState(0);


  return (
    <>
    <ScrollView backgroundColor= "#1b262c">
      <SafeAreaView style = {styles.container}>

        <View style = {styles.resultContainer}>
          <Text style = {styles.resultValue}>
            12.23
          </Text>
        </View>

        <View style = {styles.inputContainer}>
          <TextInput 
          style={styles.input}
          keyboardType= "numeric"
          placeholder= "Enter Vlaue"
          placeholderTextColor= "#c1c1c1"
          
          >

          </TextInput>
        </View>

        <View style={styles.convertButtonContainer}>
          {Object.keys(currencyPerRupee).map((currency)=>(
            <TouchableOpacity>
              <Text style={styles.temp}>{currency}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </SafeAreaView>
    </ScrollView>
    </>
  )
}


export default App;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1b262c"
  },
  resultContainer: 
  {
    height: 70,
    marginTop: 80,
    justifyContent: "center",
    borderColor: "#bbe1fa",
    borderWidth: 2,
    alignItems: "center"  
  },

  resultValue : {
    fontSize: 30,
    color: "#FFF",
    fontWeight: "bold",

  },

  inputContainer:{
    height: 70,
    marginTop: 10,
    justifyContent: "center",
    alignItems:"center",
    borderWidth: 2,
    borderColor: "#bbe1fa"
  },

  input: {
    fontSize: 30,
    textAlign: "center",
    color: "#FFFFFF"
  },
  convertButtonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10
  },
  temp: {
    color: "#FFF"
  }
  
})