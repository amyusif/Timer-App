import React, {useState} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import ButtonAdd from '../../Button/Button';

export const Focus = ({addSubject, changePage}) => {
  const [tempTxt, setTempText] = useState('')

  const handlePress = () => {
    addSubject(tempTxt)
    changePage(false)
  }
  return (
    <View style={style.container}>
      <View style={style.fieldContainer}>
        <Text style={style.text}>What do you wanna focus on?</Text>
        <View style={style.inputContainer}>
          <View style = {{width: '80%'}}>
            <TextInput onSubmitEditing={({nativeEvent}) => {
              setTempText(nativeEvent.text)
            }}/>
          </View>
          <ButtonAdd press={handlePress} title="+" width={70} height={70} />
        </View>
      </View> 
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 0.25,
    paddingTop: 50,
  },
  fieldContainer: {
    flex: 0.25,
    paddingTop: 20,
  },
  text: {
    fontWeight: 'bold',
    color: '#fcf6f5',
    fontSize: 24,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
  },
});
