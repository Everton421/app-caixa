import { Button, Modal, Text, TextInput, TouchableOpacity, View } from "react-native"

interface props   {
    setVisible: ()=>{} , 
    visible:boolean
}

export const ModalConta = ({ setVisible , visible }:props )=>{
    return(

            <Modal
             visible={visible}
             transparent={true}
             animationType="slide"
             >
                <View style={{flex:1, backgroundColor: 'rgba( 50, 50, 50, 0.7 )' , width:'100%', height:'100%' , alignItems:"center", justifyContent:"center"}}>
                    <View style={{ backgroundColor: '#FFF' , width:'90%',height:'90%', borderRadius:10   }}> 
                        
                        <TouchableOpacity style={{ backgroundColor:'#3A7DFF', width:70, borderRadius:5, margin:10, padding:4 , elevation:5}} 
                        onPress={()=> setVisible(false)}
                        >
                          <Text style={{ color:'#FFF',   fontWeight:'bold'}}> voltar </Text>
                        </TouchableOpacity>

                        <View style={{alignItems:"center" ,width:'100%'}}> 
                            <TextInput
                                    style={{ backgroundColor:'#EDEEF2', width:'80%', borderRadius:10 , marginTop:20, alignSelf:"center", elevation:5}}
                                    placeholder="conta:"
                                    placeholderTextColor='#7F8082'
                                />
                            
                            <TextInput
                                style={{ backgroundColor:'#EDEEF2', width:'80%', borderRadius:10 , marginTop:20, alignSelf:"center", elevation:5}}
                                placeholder="saldo incial:  ex. R$50"
                                placeholderTextColor='#7F8082'
                            />
                                    <TouchableOpacity style={{ backgroundColor:'#3A7DFF', width:'80%', marginTop:20, borderRadius:10, padding:5, alignItems:"center", elevation:3, }}>
                                                <Text style={{ color:'#FFF', fontSize:20, fontWeight:'bold'}}>
                                                   GRAVAR
                                                </Text>
                                    </TouchableOpacity>
                        </View>
                  </View>
               </View>

            </Modal>
    )
}