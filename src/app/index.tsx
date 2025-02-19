import { StyleSheet , View , Text, StatusBar, TouchableOpacity, FlatList, TextInput } from "react-native"
import { Link, router } from "expo-router"
import { useState,useEffect } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import { RenderItemConta } from "./components/itemConta";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./database/firebaseConfig";
import { ModalConta } from "./components/modalNovaConta";


export default function Home(){

    const [data , setData] = useState( []);
    const [visible , setVisible] = useState(false);
    
    async function filter  () {
        const querySnapshot = await getDocs(collection(db, "contas"))

        let aux =[]
            querySnapshot.forEach((snapshot)=>{
                snapshot.id
                let obj = snapshot.data()
                obj.id = snapshot.id
                aux.push( obj )
            })

            if( aux.length > 0 ){
             // console.log(aux)
                setData(aux)
            }
        }  
    
    useEffect(
        ()=>{
            filter();
        },[])

 
   

        return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#FFF" barStyle={"dark-content"} />

               <View style={{ backgroundColor: '#3A7DFF', width:'100%', height:'30%', borderBottomLeftRadius:35, borderBottomRightRadius:35, elevation:5 }}>
                    <View style={{ alignItems:"center", margin:10, justifyContent:"space-between", flexDirection:"row"}} >
                        <Text style={{ color:'#FFF', fontSize:20, fontWeight:'bold'}}>
                            Login
                        </Text>
                       <Ionicons name="notifications" size={30} color="#FFF" />
                    </View>

                    <View style={{ alignItems:"center", justifyContent:"center" , height:'100%'}}>
                     <TouchableOpacity style={{ backgroundColor:'#FFF', width:'80%', borderRadius:10, padding:5, alignItems:"center", elevation:3, }}  
                     onPress={()=> setVisible(true) }
                     >
                       <Text style={{ color:'#7F8082', fontSize:20, fontWeight:'bold'}}>
                            Cadastrar Conta
                        </Text>
                      </TouchableOpacity>
                     </View>
               </View>

                <ModalConta  setVisible={setVisible} visible={visible}/>
                  <TextInput
                     style={{ backgroundColor:'#EDEEF2', width:'80%', borderRadius:10 , marginTop:20, alignSelf:"center", elevation:5}}
                     placeholder="pesquisar"
                     placeholderTextColor='#7F8082'
                  />

            <View style={{ width:'90%',  alignSelf:"center"}}>
                <FlatList
                data={data}
                        renderItem={({item})=>  RenderItemConta(item)}
                />
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{width:'100%', flex:1, backgroundColor:'#FFF'}
    ,title:{fontWeight:'bold' , color:'#FFF'},
        button:{ backgroundColor:'#000', padding:5}
})