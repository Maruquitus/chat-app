import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

const larguraDaTela = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  erro: {
    top: 10,
    fontFamily: "Medium",
    color: "red",
    textAlign: "center",
    width: "100%",
    fontSize: 17,
  },
  titulo: {
    fontSize: 30,
    fontFamily: "Bold",
  },
  últimaMensagem: {
    color: '#333',
    fontFamily: "Medium",
    fontSize: 18,
    width: larguraDaTela * 0.70,
  },
  texto: {
    fontSize: 14,
    fontFamily: "Medium",
  },
  fotoConversa: {
    width: 50,
    height: 50,
    borderRadius: 50,
    top: 5
  },
  conversa: {
    backgroundColor: "white",
    width: "95%",
    alignSelf: "center",
    minHeight: 60,
  },
  label: {
    fontSize: 17,
    color: "#555",
    fontFamily: "SemiBold",
  },
  input: {
    elevation: 5,
    shadowColor: "#aaa",
    backgroundColor: "white",
    borderRadius: 15,
    fontFamily: "Medium",
    paddingHorizontal: 5,
    fontSize: 16,
    height: 40,
  },
  whiteWShadow: {
    elevation: 10,
    shadowColor: "#aaa",
    backgroundColor: "white",
    borderRadius: 20,
  },
});

export default styles;
