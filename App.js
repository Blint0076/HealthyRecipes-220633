import React, {useState} from 'react';
import { Text, View, Image, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const homeImage = require('./assets/bruschetta.png')

function HomeScreen ({ navigation }) {
  const [numOfServ, setNumOfServ] = useState(null);
  function clearServings() {
    setNumOfServ('');
  }
  return (
    <View style={styles.main}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Bruschetta Recipe</Text>
      </View>
      <View style={styles.image1}>
        <Image source={homeImage}/>
      </View>
      <View style={styles.input1}>
        <TextInput style={styles.textinput1}
        placeholder="Enter the Number of Servings"
        placeholderTextColor='#808080'
        onChangeText={setNumOfServ}
        value={numOfServ}
        keyboardType="numeric"
        
        />
      </View>
      <View style={styles.button1}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate('BruschettaScreen', {numOfServ}); clearServings();}}>
          <Text style={styles.buttonText}>View Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


function BruschettaScreen({ route }) {
  const {numOfServ} = route.params;
  const Tomatoes = numOfServ * 4;
  const Basil =  numOfServ * 6;
  const Garlic =  numOfServ * 3;
  const OliveOil =  numOfServ * 3;
  
  return (
    <View style={styles.ingredients1}>
      <View style={styles.titleBar}>
        <Text style={styles.title}>Bruschetta</Text>
      </View>
      <View style={styles.ingredients1}>
        <Text style={styles.subHeading}>Ingredients</Text>
        <Text style={styles.list}>{Tomatoes} plum tomatoes</Text>
        <Text style={styles.list}>{Basil} basil leaves</Text>
        <Text style={styles.list}>{Garlic} garlic cloves, chopped</Text>
        <Text style={styles.list}>{OliveOil} TB olive oil</Text>
      </View>
      <View style={styles.directions}>
        <Text style={styles.subHeading}>Directions</Text>
        <Text style={styles.list}>Combine the ingredients add salt to taste.  Top French bread slices with mixture.</Text>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions = {{
          headerStyle: {
            backgroundColor: '#ff0000'
          },
          headerTintColor: '#ffffff'
        }}>
        <Stack.Screen name="Healthy Recipes" component={HomeScreen} />
        <Stack.Screen name="BruschettaScreen" component={BruschettaScreen} options={{headerTitle:  'Healthy Recipes'  }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 4,
    backgroundColor: '#ffffff'
  },
  titleBar: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    padding: 10
  },
  title: {
    textAlign: 'center',
    fontSize: 36
  },
  image1: {
    flexGrow: 1,
    padding: 0   
  },
  input1: {
    justifyContent: 'flex-end',
    flexGrow: 1,
    padding: 10
  },
  textinput1: {
    color: '#000000',
    fontSize: 16,
    padding: 0,
    margin: 1,
    height: 50,
    width: 250,
    textAlign: 'center',
    alignSelf:'center',
    outline: 'none'
  },
  button1: {
    alignItems: 'center',
    flexGrow: 1,
    padding: 10
  },
  buttonText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 14
  },
  button: {
    height: 40,
    width: 150,
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#696969'
  },
  ingredients1: {
    flexGrow: 1,
    padding: 10
  },
  subHeading: {
    fontSize: 28,
    marginLeft: 10
  },
  list: {
    fontSize: 20,
    marginLeft: 20
  },
  directions: {
    flexGrow: 1,
    padding: 10
  },

});