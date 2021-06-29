import React from 'react';
import { View, Text } from 'react-native';
import Button from './components/Button';

const App = () => {
  return (
    <View style={{
      backgroundColor: 'black',
      flex: 1
    }}>
      <View style={{
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-end'
      }}>
        <Text style={{
          color: 'white',
          fontSize: 85,
          margin: 15
        }}>ff</Text>
      </View>
      <View style={{
        flex: 1.5
      }}>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Button color="#a5a5a5" text="AC" />
          <Button color="#a5a5a5" text="+/-" />
          <Button color="#a5a5a5" text="%" />
          <Button color="#ff9f0a" text="÷" />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Button color="#333333" text="7" />
          <Button color="#333333" text="8" />
          <Button color="#333333" text="9" />
          <Button color="#ff9f0a" text="×" />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Button color="#333333" text="4" />
          <Button color="#333333" text="5" />
          <Button color="#333333" text="6" />
          <Button color="#ff9f0a" text="-" />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Button color="#333333" text="1" />
          <Button color="#333333" text="2" />
          <Button color="#333333" text="3" />
          <Button color="#ff9f0a" text="+" />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row'
        }}>
          <Button color="#333333" text="0" flex={2} />
          <Button color="#333333" text="." />
          <Button color="#ff9f0a" text="=" />
        </View>
      </View>
    </View>
  )
}

export default App
