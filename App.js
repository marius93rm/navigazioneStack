import { StyleSheet, Text, View, Button } from 'react-native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Root = createNativeStackNavigator();

const Homepage = ( {navigation, route} ) => {
  return (
    <View style={styles.container}>
      <Text>Homepage</Text>
      <Button title="Clicca per informazioni" onPress={() => {navigation.push("Informazioni")}} />
    </View>
  );
}



const Informazioni = ({navigation, route}) => {
  return (
    <View style={styles.container}>
      <Text>{route.name}</Text>
      <Button title="Clicca per tornare alla homepage" onPress={() => {navigation.pop()}} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Root.Navigator>
        <Root.Screen name="Homepage" component={Homepage} />
        <Root.Screen name="Informazioni" component={Informazioni} />
      </Root.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
