import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { CardStyleInterpolators } from "@react-navigation/stack";
import Conversas from './telas/Conversas.js';
import Conversa from './telas/Conversa.js';
import Login from './telas/Login.js'
import Registro from './telas/Registro.js';
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';

library.add(fab, [
  faArrowLeft,
  faPaperPlane
]);

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} name="Login" component={Login} />
        <Stack.Screen options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} name="Conversa" component={Conversa} />
        <Stack.Screen options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} name="Registro" component={Registro} />
        <Stack.Screen options={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }} name="Conversas" component={Conversas} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

