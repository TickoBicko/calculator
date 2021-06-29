import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const Button = ({ color, text, flex }) => {
    return (
        <TouchableOpacity style={{
            backgroundColor: color,
            borderRadius: 64,
            alignItems: 'center',
            flex: flex != null ? flex : 1,
            justifyContent: 'center',
            margin: 5
        }}>
            <Text style={{
              color: 'white',
              fontSize: 48
            }}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button