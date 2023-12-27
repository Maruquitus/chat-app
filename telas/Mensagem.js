import { Text, View } from "react-native";
import { useState } from "react";

const Mensagem = (props) => {
    const [, forceUpdate] = useState();
    
  const containerStyle = {
    marginVertical: 4,
    backgroundColor: props.tipo == 1 ? "#4C2BB7" : "#3D8BE6",
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,

    marginLeft: props.tipo == 1 ? 10 : 20,
    marginRight: props.tipo == 1 ? 20 : 10,

    borderBottomLeftRadius: props.tipo === 1 ? 0 : 10,
    borderBottomRightRadius: props.tipo === 0 ? 0 : 10,
    alignSelf: props.tipo === 1 ? "flex-start" : "flex-end",
  };

  const textStyle = {
    color: "white",
    fontSize: 20,
    fontFamily: "Medium",
    alignSelf: props.tipo === 1 ? "flex-start" : "flex-end",
  };

  return (
    <View style={containerStyle}>
      <Text style={textStyle}>
        {props.msg}
      </Text>
    </View>
  );
};

export default Mensagem;
