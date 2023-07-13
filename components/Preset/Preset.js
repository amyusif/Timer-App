import React from 'react';
import { View } from 'react-native';
import ButtonAdd from '../Button/Button';

const Preset = ({ Change, title }) => {
  return (
    <>
      <ButtonAdd title={title} height={70} width={70} press={Change} />
    </>
  )
};

export default Preset;
