//Importing libraries

import React from 'react';
import { Text, View } from 'react-native';


//Creating a component

const Header = (props) => {
  const { textStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

const styles = {

  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    backgroundColor: '#D3D3D3',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 4,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20

  }
};

//Make this component available to other parts of the app

export { Header };
