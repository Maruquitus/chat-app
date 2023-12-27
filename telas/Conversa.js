import { Text, View, Image, TextInput, Button } from 'react-native';
import styles from '../styles.js'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import Header from '../componentes/Header.js';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import Mensagem from './Mensagem.js';

const Conversa = ({route}) => {
  let dados = route.params;
  let nome = dados[0];
  let foto = dados[1];
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
        <Header texto={nome} foto={foto}/>
        <ScrollView style={{width:'100%',  marginTop: 100, paddingTop: 10, marginBottom: 70}}>
        <Mensagem tipo={1} msg='Oi! Como foi o seu dia?' />
      <Mensagem tipo={0} msg='Oi! Foi tranquilo, passei a maior parte do tempo cochilando no sol.' />
      <Mensagem tipo={1} msg='Isso parece maravilhoso! Eu também tive uma soneca, mas depois persegui algumas bolinhas.' />
      <Mensagem tipo={0} msg='Ah, bolinhas são incríveis! Eu amo perseguir e pular nelas.' />
      <Mensagem tipo={1} msg='Você viu o novo arranhador na sala de estar? É incrível!' />
      <Mensagem tipo={0} msg='Sim, eu vi! Já dei algumas arranhadas nele. Estou amando.' />
      <Mensagem tipo={1} msg='Que bom que gostou! Vamos marcar um dia para brincar juntos nele.' />
      <Mensagem tipo={0} msg='Com certeza! Eu adoraria. Talvez amanhã à tarde?' />
      <Mensagem tipo={1} msg='Perfeito! A tarde é minha hora favorita para brincar.' />
      <Mensagem tipo={0} msg='Falando em brincar, você viu o novo brinquedo de penas? É demais!' />
      <Mensagem tipo={1} msg='Não, ainda não vi. Onde está? Preciso conferir isso!' />
      <Mensagem tipo={0} msg='Está na sala. Vamos lá agora?' />
      <Mensagem tipo={1} msg='Sim, estou a caminho. Mal posso esperar para ver!' />
      <Mensagem tipo={0} msg='Você ouviu sobre o novo sabor de comida que nossos humanos compraram?' />
      <Mensagem tipo={1} msg='Não! Qual é o sabor? Espero que seja algo delicioso.' />
      <Mensagem tipo={0} msg='É salmão! É o meu novo favorito.' />
      <Mensagem tipo={1} msg='Hum, salmão é incrível! Vou pedir para os humanos comprarem para mim também.' />
      <Mensagem tipo={0} msg='Eles sempre trazem coisas boas para nós, não é mesmo?' />
      <Mensagem tipo={1} msg='Com certeza! Somos mimados, e eles adoram nos agradar.' />
      <View style={{width: 1, height: 15}}/>
        </ScrollView>
        
        {/* Input */}
        <View style={{position: 'absolute', bottom:0, paddingHorizontal: 10, width: '100%', alignSelf: 'center', flexDirection: 'row', justifyContent: 'space-between', height: 60}}>
          <TextInput placeholderTextColor='#777' placeholder='Mensagem' cursorColor="#3D8BE6" style={{fontFamily: 'Medium', fontSize: 20, borderRadius: 20, height: 50, padding: 10, width: '85%', backgroundColor: '#bbdbfa'}}/>
          <TouchableOpacity style={{backgroundColor: '#3D8BE6', borderRadius: 40, width: 50, height: 50, zIndex: 20, alignSelf: 'flex-end', top: 2}}>
            <FontAwesomeIcon style={{left: 10, top: 13}} color='white' size={25} icon="fa-solid fa-paper-plane" /> 
          </TouchableOpacity>
        </View>
        
    </View>
  );
}

export default Conversa;