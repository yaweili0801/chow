import React from 'react';
import {Text,TextInput,View} from 'react-native';

const Dish = () => {
  return (
  <View>
    <Text>Menu</Text>
    <TextInput
      style={{
        height: 40,
        borderColor: 'purple',
        borderWidth: 1
      }}
      defaultValue = "Name me!" />
  </View>
);
};

const Menu =()=>{
  return(
    <View>
      <Text>Welcome！</Text>
      <Dish />
      <Dish />
      <Dish />
    </View>
  )
}

export default Menu;
