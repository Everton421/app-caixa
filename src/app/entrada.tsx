import { Text, TextInput, View } from "react-native"
import { Header } from "./components/header"

export default function entrada () {
    return(
        <View style={{ flex:1}}>

            <Header arrowColor="#000" background="#FFF" />
              <TextInput
                                 style={{ backgroundColor:'#EDEEF2', width:'80%', borderRadius:10 , marginTop:20, alignSelf:"center", elevation:5}}
                                 placeholder="pesquisar"
                                 placeholderTextColor='#7F8082'
                 />
            <Text>
                entradas
            </Text>
        </View>
    )
}