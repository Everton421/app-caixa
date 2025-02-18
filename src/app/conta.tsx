import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useEffect, useState } from "react";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Header } from "./components/header";
import { useLocalSearchParams } from "expo-router";
 
 
export default   function Conta   (   ){ 

    const params:any = useLocalSearchParams()
    const [ movimentos , setMovmentos]= useState([])
    const [ saldo , setSaldo] = useState<Number>(); 
    const  [ conta , setConta] = useState();

    const [ verSaldo, setVerSaldo ] = useState<boolean>(false);

    useEffect(
        ()=>{
            if(params.movimentos){
                setMovmentos( JSON.parse(params.movimentos) );
            }   
            if(params.saldo){
                setSaldo(Number(params.saldo))
            } 
            
             if( params.conta){
                 setConta(   JSON.parse(params.conta as string ) )
             }
        },[]
    )
   

    const [ configListItems ] = useState(
        [
            { 
                sequencia:1,
                title:'entradas',
                icon: <MaterialCommunityIcons name="arrow-down-thick" size={34} color="#7F8082" />
            },
            { 
                sequencia:1,
                title:'saidas',
                icon:    <MaterialCommunityIcons name="arrow-up-thick" size={34} color="#7F8082" />
            },
            { 
                sequencia:1,
                title:'movimentações',
                icon: <MaterialCommunityIcons name="bank-transfer" size={34} color="#7F8082" />
            },
        ])

type icon ={ icon:string, title:string }

const renderItensConfiList = (item:icon)=>{
     return(
        <TouchableOpacity
              style={{  width:130, height:130,   borderRadius:35 ,   alignItems:"center", justifyContent:"center"  }}>
                <View style={{  width:70, height:70,    borderRadius:35 , backgroundColor:'#FFF', alignItems:"center", justifyContent:"center" }}>
                    { item.icon }  
                </View>
            <Text style={{ fontWeight:'bold', color:'#FFF'}}> { item.title }  </Text>
        </TouchableOpacity>

     )
}

const renderItensTransactions = (item)=>{
    return(
        <View style={{  justifyContent:"space-between",  flexDirection:"row", padding:5 ,margin:7, backgroundColor:'#3A7DFF', alignItems:"center",   borderRadius:10, elevation:3}}>   
                 <Text style={ styles.textMov } >  tipo: { item.tipo === 'e' ? ( 'entrada '  ): ('saida ' ) } </Text>
                
                <Text style={ [ styles.textMov  ]} >   valor: { item.tipo === 'e' ? ( '+'+(item.valor).toFixed(2) ): ('-' +(item.valor).toFixed(2)) }  </Text>
                
                { item.tipo === 'e' ? 
                (
                  <View style={{ backgroundColor:'#FFF', borderRadius:5}}  >
                    <Entypo name="arrow-bold-up" size={24} color="green" />
                  </View>
                  ):
                  (   <View style={{ backgroundColor:'#FFF', borderRadius:5}}  >
                    <Entypo name="arrow-bold-down" size={24} color="red" />
                   </View> ) }
               

                   

        </View>
    )
}


    return(
      <View style={ styles.container}>
           
           <Header   arrowColor="#000" background="#FFF"    /> 

           <View>
             <View style={ styles.headerBank }>
                    <FontAwesome  name="bank" size={24} color="#FFF" />
                    
                    { conta ? 
                    (
                        <Text style={{ fontWeight:'bold', color:'#FFF'}}>
                            { conta}
                    </Text>

                    ):(
                        <Text style={{ fontWeight:'bold', color:'#FFF'}}>
                        conta  
                    </Text>
                    )}
                </View>
                   
            </View>

            <View style={{ alignItems:"center" ,justifyContent:"center",    marginTop:10, flexDirection:"row"}} >
               
                {
                    verSaldo ? (
                        <Text style={{ fontWeight:"bold", color:'#FFF', fontSize: 25}}>R${ (Number(saldo) | 0).toFixed(2) }  </Text>
                    ):(  <Text style={{ fontWeight:"bold", color:'#FFF', fontSize: 25}}>R$ **** </Text>  )
                }

                < TouchableOpacity 
                style={{  marginLeft:8  }}
                onPress={()=>{ 
                        { verSaldo ? setVerSaldo(false) : setVerSaldo(true)}
                    }}>
                        { verSaldo ? (
                            <Entypo name="eye" size={30} color="white" />   
                        ) :(
                            <Entypo name="eye-with-line" size={30} color="white" />
                        )
                    
                    }
                </TouchableOpacity>

            </View>
        
        <View style={{  alignItems:'center', justifyContent:"center",  marginTop:15  }}>     
                <FlatList
                    horizontal={true}
                    data={configListItems}        
                    renderItem={({item})=>  renderItensConfiList(item)    }
                    />
       </View>
        
        <View style={{ flex:1, width:'100%'  ,alignItems:"center", backgroundColor:'#FFF', borderTopLeftRadius:45, borderTopRightRadius:45, marginTop:20}}>
            <View style={{ marginTop:25, width:'95%'  }}>
                <Text style={{ fontWeight:"bold", marginLeft:10, color:'#7F8082'}}>
                    movimentações
                </Text>
            
                    <FlatList
                        data={movimentos || []}        
                        renderItem={({item})=>  renderItensTransactions(item)    }
                        />
         
            </View>
        </View>
      </View>
    )
}

export const styles = StyleSheet.create({
    container:{ 
        flex:1,
        backgroundColor:'#3A7DFF'
    },
    headerBank:{
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        margin:15,
        padding:3,
    },
    textMov:{
        fontWeight:'bold',
        color:'#FFF'
    }
})