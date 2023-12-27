import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import styles from "../styles";

const Header = (props) => {
  navigation = useNavigation();
  return (
    <View
      style={{
        height: 100,
        width: "100%",
        position: "absolute",
        top: 0,
        backgroundColor: "#3D8BE6",
        flexDirection: 'row',
      }}
    >
      <TouchableOpacity onPress={() => {navigation.goBack()}}>
        <FontAwesomeIcon
            size={35}
            icon="fa-solid fa-arrow-left"
            style={{ color: "white", marginTop: 43, marginLeft: 15, width: 50, height: 50}}
          />
      </TouchableOpacity>
      {props.foto && <Image source={{uri: props.foto}} style={[styles.fotoConversa, {top: 35, marginLeft: 5}]}/>}
      <Text
        style={[{ top: 35, color: 'white', marginLeft: 10, fontFamily: "SemiBold", fontSize: 30 }]}
      >
        {props.texto}
      </Text>
    </View>
  );
};

export default Header;
