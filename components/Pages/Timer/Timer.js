import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Counter from '../../Features/TimerFeatures/Countdown/Countdown';
import ButtonAdd from '../../Button/Button';
import Preset from '../../Preset/Preset'
import {useKeepAwake} from 'expo-keep-awake';

const TimerPage = ({ grabTask }) => {
  const [started, setStarted] = useState(false);
  const [trackTime, setTrackTime] = useState(20)
  useKeepAwake()
// const handlePressTimer = (min) => {
//   setTrackTime(min)
// }

  return (

    <View style={styles.main}>
      <Counter ispaused={!started} minute={trackTime} />
      <View style={styles.wrapper}>
        <Text style={styles.focusTxt}>Focusing On:</Text>
        <Text style={styles.task}>{grabTask}</Text>
      </View>
      <View style = {{alignItems: 'center', width: '100%'}}>
        {!started ? (
          <ButtonAdd
            title="Start"
            height={70}
            width={70}
            press={() => {
              setStarted(true);
            }}
          />
        ) : (
          <ButtonAdd
            title="Pause"
            height={70}
            width={70}
            press={() => {
              setStarted(false);
            }}
          />
        )}
      </View>
      <View style = {{flexDirection: 'row', justifyContent: 'space-evenly', paddingTop: 50}}>
      <Preset  title={10} Change={() => setTrackTime(10)}/>
      <Preset  title={15} Change={() => setTrackTime(15)}/>
      <Preset  title={30} Change={() => setTrackTime(30)}/>
      </View>
    </View>
  );
};

export default TimerPage;

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  focusTxt: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
  task: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  wrapper: {
    flex: 0.1,
    padding: 20,
  },
});
