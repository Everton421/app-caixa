import { StyleSheet , View , Text, StatusBar, TouchableOpacity } from "react-native"
import { Link, router } from "expo-router"

export default function Home(){
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} />
       
        
            <TouchableOpacity style={ styles.button} onPress={()=>  router.navigate('/entradas')}>
                <Text style={styles.title}> criar conta </Text>
            </TouchableOpacity>


        </View>
    )
}


const styles = StyleSheet.create({
    container:{ flex:1, alignItems:'center', justifyContent:'center'}
    ,title:{fontWeight:'bold' , color:'#FFF'},
        button:{ backgroundColor:'#000', padding:5}
})