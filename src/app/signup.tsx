import { StyleSheet , View , Text, StatusBar, TouchableOpacity } from "react-native"
import { Link, router } from 'expo-router' 

export default function Signup(){
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} />
            
            <TouchableOpacity onPress={()=> router.navigate('/signup')}>

            </TouchableOpacity>
            <Text style={ styles.title}>
                teste  
            </Text>
          
        </View>
    )
}


const styles = StyleSheet.create({
    container:{ flex:1, alignItems:'center', justifyContent:'center'}
    ,title:{fontWeight:'bold' }
})