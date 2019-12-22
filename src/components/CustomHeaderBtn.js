import React from 'react'
import { View, Text } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons";


import {HeaderButton, HeaderButtons} from 'react-navigation-header-buttons'
import { TouchableOpacity } from 'react-native-gesture-handler';
const CustomHeaderBtn = (props) => {
    return (
      
    // the `passMeFurther` variable here contains props from <Item .../> as well as <HeaderButtons ... />
    // and it is important to pass those props to `HeaderButton`
    // then you may add some information like icon size or color (if you use icons)
    <TouchableOpacity>
    <HeaderButton {...props} IconComponent={MaterialCommunityIcons} iconSize={23} />
    </TouchableOpacity>
  
    )
}

export default CustomHeaderBtn
