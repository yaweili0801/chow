import React, {useState} from 'react';
import {Text,TextInput,View,Image,Button} from 'react-native';

const Dish = (props) => {
  const [amLazy, setAmLazy] = useState(true);

  return (
  <View>
    <Text>DAY {props.name}</Text>
    <Text>
      Today is Day {props.name}, and I want to  {amLazy ? 'cook':'order'}!
    </Text>
    <Button
      onPress={()=>{
        setAmLazy(false)
      }}
      disable={!amLazy}
      title={amLazy? "Let's order instead of cook!":"Thank you!"}
    />
    <TextInput
      style={{
        height: 40,
        borderColor: 'purple',
        borderWidth: 1
      }}
      defaultValue = "Dish name" />
       <Image
      source={{uri:"https://z-p3-scontent-amt2-1.xx.fbcdn.net/v/t1.18169-9/12573155_934367026611964_7772172742517747406_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=h5OnOWmN5iYAX_ffEt_&tn=Ri86nixFp3baFVhV&_nc_ht=z-p3-scontent-amt2-1.xx&oh=25f4c16a2f747e074c721be047f371f2&oe=60D4EC07"}}
      style={{width:100, height:100}}
    />
  </View>
);
};

const Menu =()=>{
  return(
    <View>
      <Dish name="1" />
      <Dish name="2"/>
      <Dish name="3"/>
    </View>
  )
}

export default Menu;
