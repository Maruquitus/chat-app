import { TouchableOpacity, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const Botão = (props) => {
  return (
    <TouchableOpacity onPress={() => props.ação}>
      <LinearGradient
        style={[{
          padding: 6,
          borderRadius: 20,
          width: 200,
          alignSelf: "center",
          marginTop: 10,
        }, props.style]}
        start={[0, 0]}
        end={[1, 1]}
        colors={["#4C2BB7", "#3D8BE6"]}
      >
        <Text
          style={{
            fontFamily: "SemiBold",
            color: "white",
            bottom: 1,
            fontSize: 20,
            textAlign: "center",
          }}
        >
          {props.título}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default Botão;