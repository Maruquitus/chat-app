import { Text, View, Image, TextInput, Button } from "react-native";
import styles from "../styles.js";
import { useFonts } from "expo-font";
import { useState } from "react";
import Botão from "../componentes/Botão.js";
import { auth } from "../firebase";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";

const erros = {
  "auth/invalid-email": "Verifique seu email e tente novamente",
  "vazio": "Preencha todos os campos!",
  "auth/invalid-credential": "Credenciais inválidas!"
};

const Login = () => {
  const [erro, setErro] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  let navigation = useNavigation();

  NavigationBar.setBackgroundColorAsync("white");

  const [carregado] = useFonts({
    Light: require("../assets/fontes/Quicksand-Light.ttf"),
    Regular: require("../assets/fontes/Quicksand-Regular.ttf"),
    Medium: require("../assets/fontes/Quicksand-Medium.ttf"),
    SemiBold: require("../assets/fontes/Quicksand-SemiBold.ttf"),
    Bold: require("../assets/fontes/Quicksand-Bold.ttf"),
    
  });

  if (!carregado) {
    return null;
  }

  const realizarLogin = async () => {
    if (email.length != 0 && senha.length != 0) {
      auth
        .signInWithEmailAndPassword(email, senha)
        .then(async (userCredentials) => {
          console.log(userCredentials);
          navigation.navigate('Conversas')
        })
        .catch((err) => {
          let mensagem = erros[err.code] ? erros[err.code] : "Algo deu errado.";
          console.log(err.code);
          setErro(mensagem);
        });
    } else {
      setErro(erros["vazio"]);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        resizeMode="contain"
        source={require("../assets/icon.png")}
        style={{ width: 100, height: 100, marginTop: -90, marginBottom: 20 }}
      />
      <View style={[{ width: "90%", padding: 20 }, styles.whiteWShadow]}>
        <Text style={[styles.titulo, { textAlign: "center" }]}>Login</Text>

        <Text style={[styles.label, { marginTop: 10 }]}>E-mail</Text>
        <TextInput
          style={styles.input}
          cursorColor="#3D8BE6"
          value={email || ''}
          onChangeText={(t) => {
            setEmail(t);
          }}
        />

        <Text style={[styles.label, { marginTop: 10 }]}>Senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          cursorColor="#3D8BE6"
          value={senha}
          onChangeText={(t) => {
            setSenha(t);
          }}
        />
        <TouchableOpacity onPress={() => realizarLogin()}>
          <Botão título="Entrar" />
        </TouchableOpacity>
        {erro && (
          <Text
            style={styles.erro}
          >
            {erro}
          </Text>
        )}
      </View>

      <View
        style={{
          position: "absolute",
          bottom: 20,
          flex: 1,
          height: 40,
          flexDirection: "row",
        }}
      >
        <Text
          style={{ fontFamily: "SemiBold", color: "darkgray", fontSize: 16 }}
        >
          Ainda não tem uma conta?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Registro");
          }}
        >
          <Text style={{ fontFamily: "Bold", color: "#3D8BE6", fontSize: 16 }}>
            Registre-se!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
