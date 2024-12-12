import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';
import ScreenWrapper from '@/src/components/ScreenWrapper';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';

const Main = () => {
  const navigation = useNavigation();
  const router = useRouter();

  return (
    <ScreenWrapper bg="#4C88A9">
      <View style={styles.container}>
        <Text style={styles.text}>SEMO CSH</Text>
        
      </View>
      <View style={styles.buttonContainer}>
          <Button
            title="Get Started"
            onPress={() => navigation.navigate('Login')}
            color="red"
          />
        </View>
    </ScreenWrapper>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
  
  },
  text: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center', 
  },
  buttonContainer: {
    marginBottom: 20, 
    width: '80%',
    marginHorizontal:40,
   borderRadius:20,
  }
});
