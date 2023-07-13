import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const minutesToMillis = (min) => min * 1000 * 60;

const Counter = ({ minute, ispaused }) => {
  const [mills, setMills] = useState(minutesToMillis(minute));

  useEffect(() => {
    setMills(minutesToMillis(minute))
  }, [minute])

  useEffect(() => {
   if (ispaused) {
     return;
   }
    const timer = setInterval(() => {
      setMills((time) => {
        if (time === 0) {
          clearInterval(timer);
          return time;
        }
        const timeLeft = time - 1000;
        return timeLeft;
      });
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [ispaused]);

  const minutes = Math.floor(mills / 1000 / 60) % 60;
  const seconds = Math.floor(mills / 1000) % 60;
  
  return (
    <View>
      <Text style={styles.count}>
        {minutes}:{seconds < 10 ? `0${seconds}` : seconds}
      </Text>
    </View>
  );
};

export default Counter;

const styles = StyleSheet.create({
  count: {
    padding: 50,
    fontWeight: 'bold',
    fontSize: 30,
    backgroundColor: 'rgba(0,0,0,0.2)',
    marginTop: 20,
    textAlign: 'center',
    color: '#B2B2B2',
  },
});

