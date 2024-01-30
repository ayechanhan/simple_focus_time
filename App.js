import React, { useState } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  View,
  Platform,
} from 'react-native';
import { colors } from './src/utils/colors';
import { Focus } from './src/features/focus';

export default function App() {
  const [currentItem, setCurrentItem] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentItem ? (
        <Focus addItem={setCurrentItem} />
      ) : (
        <View>
          <Text style={{color: colors.white}}>I am going to render the timer for {currentItem}</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    backgroundColor: colors.darkblue,
  },
});
