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
import { Timer } from './src/features/Timer';
import { Focus } from './src/features/focus';

export default function App() {
  const [currentItem, setCurrentItem] = useState("Test");
  return (
    <SafeAreaView style={styles.container}>
      {!currentItem ? (
        <Focus addItem={setCurrentItem} />
      ) : (
        <Timer focusItem = {currentItem} onTimerEnd={() => {}} clearItem = {() => {}}/>
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
