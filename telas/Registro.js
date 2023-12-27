import { Text, View, Image, TextInput, Button } from "react-native";
import styles from "../styles.js";
import { useFonts } from "expo-font";
import { useState } from "react";
import Botão from "../componentes/Botão.js";
import { auth } from "../firebase.js";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const erros = {
  "auth/invalid-email": "Verifique seu e-mail e tente novamente",
  "auth/email-already-in-use": "Alguém já utiliza esse e-mail!",
  "auth/weak-password": "Senha muito fraca!",
  vazio: "Preencha todos os campos!",
  senha: "Suas senhas estão diferentes!",
};

const Registro = () => {
  const [erro, setErro] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfSenha] = useState("");
  let navigation = useNavigation();

  const realizarRegistro = () => {
    if (senha == confirmar && senha.length != 0 && email.length != 0) {
      auth
        .createUserWithEmailAndPassword(email, senha)
        .then(() => {
          alert("Seu registro foi realizado com sucesso!");
        })
        .catch((err) => {
          setErro(erros[err.code]);
        });
    } else {
      if (senha != confirmar) setErro(erros["senha"]);
      if (senha.length == 0 || email.length == 0) setErro(erros["vazio"]);
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
        <Text style={[styles.titulo, { textAlign: "center" }]}>Registro</Text>

        <Text style={[styles.label, { marginTop: 10 }]}>E-mail</Text>
        <TextInput
          style={styles.input}
          cursorColor="#3D8BE6"
          value={email}
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

        <Text style={[styles.label, { marginTop: 10 }]}>Confirme a senha</Text>
        <TextInput
          style={styles.input}
          secureTextEntry
          cursorColor="#3D8BE6"
          value={confirmar}
          onChangeText={(t) => {
            setConfSenha(t);
          }}
        />
        <TouchableOpacity onPress={() => realizarRegistro()}>
          <Botão título="Registrar" />
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
          Já se registrou?{" "}
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Login");
          }}
        >
          <Text style={{ fontFamily: "Bold", color: "#3D8BE6", fontSize: 16 }}>
            Entre!
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Registro;
