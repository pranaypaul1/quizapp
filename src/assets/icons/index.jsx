import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './Home'
import {theme} from "../../utils/theme"
import Mail from './mail'
import SquareLock from './SquareLock'
import UserIcon from './User'


const Icon = ({name,...props}) => {

    const icons={
        home:Home,
        mail:Mail,
        SquareLock:SquareLock,
        UserIcon:UserIcon,
       
    }
    const IconComponent=icons[name]
  return (
    <IconComponent 
    height={props.size || 24}
    width={props.size || 24}
    strokeWidth={props.strokeWidth || 1.9}
    color={theme.colors.textLight}
  {...props}
    
    />
     

    
  )
}

export default Icon

const styles = StyleSheet.create({})