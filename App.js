import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Focus } from './components/Pages/Focus/Focus';
import TimerPage from './components/Pages/Timer/Timer';

export default function App() {
  const [subject, setSubject] = useState(' ');
  const [page, setPage] = useState(true);
  return (
    <View style={styles.container}>
      {page ? (
        <Focus addSubject={setSubject} changePage={setPage} />
      ) : (
        <TimerPage grabTask={subject} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#990011',
    paddingTop: 40,
  },
});
