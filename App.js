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
import { FocusHistory } from './src/features/FocusHistory'; 

export default function App() {
  const [currentItem, setCurrentItem] = useState();
  const [history, setHistory] = useState([]);
  return (
    <SafeAreaView style={styles.container}>
      {!currentItem ? (
        <>
        <Focus addItem={setCurrentItem} />
        <FocusHistory history={history}/>
        </>
      ) : (
        <Timer focusItem = {currentItem} onTimerEnd={(item) => setHistory([...history, item])} clearItem = {() => setCurrentItem(null)}/>
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
