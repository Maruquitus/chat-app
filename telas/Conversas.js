import { Text, View, Image, TextInput, Button } from 'react-native';
import styles from '../styles.js'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Header from '../componentes/Header.js';
import { Dimensions } from 'react-native';

const larguraDaTela = Dimensions.get('window').width;

const conversas = [
    {
        nome: 'Gizmo',
        foto: 'http://placekitten.com/300/201',
        últimaMensagem: 'Eu estou na frente do carregador, a espera que você vá.',
        horário: '20:45',
        nãoLidas: 0
    },
    {
        nome: 'Garfield',
        foto: 'http://placekitten.com/300/221',
        últimaMensagem: 'Alguém sabe se o rato saiu?',
        horário: '10:23',
        nãoLidas: 1
    },
    {
        nome: 'Baby',
        foto: 'http://placekitten.com/300/210',
        últimaMensagem: '🐈‍⬛ Meus primeiros pulsos! 🌟',
        horário: '09:50',
        nãoLidas: 3
    },
    {
        nome: 'Whiskers',
        foto: 'http://placekitten.com/300/211',
        últimaMensagem: 'Alguém viu minha cadela em Santa Monica? 🤔',
        horário: '16:30',
        nãoLidas: 4
    },
    {
        nome: 'Felix',
        foto: 'http://placekitten.com/300/212',
        últimaMensagem: 'A fome me domina! 😜',
        horário: '23:59',
        nãoLidas: 5
    }
];


const Conversa = (props) => {
    navigation = useNavigation();
    var nome = props.nome;
    var foto = props.foto;
    return (
        <TouchableOpacity key={props.nome} onPress={() => {navigation.navigate('Conversa', [nome, foto])}} style={styles.conversa}>
            <View style={{flexDirection: 'row'}}>
                <Image source={{uri: props.foto}} style={styles.fotoConversa}/>
                <View style={{flexDirection: 'column', marginLeft: 7}}>
                    <Text style={{fontFamily: 'SemiBold', fontSize: 18}}>{props.nome}</Text>
                    <Text numberOfLines={1} style={[styles.últimaMensagem]}>{props.últimaMensagem}</Text>
                </View>
                <View style={{flexDirection: 'column', width:36, right: -5}}>
                    <Text style={{fontFamily: 'Medium', color: '#444', textAlign: 'center'}}>{props.horário}</Text>
                    {props.nãoLidas > 0 && <View style={{backgroundColor: '#3D8BE6', borderRadius: 40, width: 30, height: 30, alignSelf: 'center'}}>
                        <Text style={{textAlign: 'center', color: 'white', fontFamily: 'Bold', fontSize: 20, top: -2}}>{props.nãoLidas}</Text>
                    </View>}
                </View>
                
            </View>
            <View style={{width: '90%', marginTop: 10, marginBottom: 7, alignSelf: 'center', borderColor: '#ddd', borderWidth: 0.2}}/>
        </TouchableOpacity>
    );
}

const Conversas = () => {
  let navigation = useNavigation();

  const [carregado] = useFonts({
    'Light': require('../assets/fontes/Quicksand-Light.ttf'),
    'Regular': require('../assets/fontes/Quicksand-Regular.ttf'),
    'Medium': require('../assets/fontes/Quicksand-Medium.ttf'),
    'SemiBold': require('../assets/fontes/Quicksand-SemiBold.ttf'),
    'Bold': require('../assets/fontes/Quicksand-Bold.ttf'),
  });
  
  if (!carregado) {
    return null;
  }

  return (
    <View style={styles.container}>
        {/* Header */}
        <Header texto='Suas conversas'/>
        <ScrollView style={{width: '100%', marginTop: 100, paddingTop: 10}}>
            {conversas.map((c, key) => {
                return (<Conversa nãoLidas={c.nãoLidas} horário={c.horário} key={key} nome={c.nome} últimaMensagem={c.últimaMensagem} foto={c.foto}/>)
            })}
        </ScrollView>
    </View>
  );
}

export default Conversas;