import React from 'react'
import {
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  TouchableOpacity
} from 'react-native'
import { Button, Button2 } from './Style'

const styles = StyleSheet.create({
  button: {
    fontSize: 40,
    height: Dimensions.get('window').width / 4,
    width: Dimensions.get('window').width / 4,
    padding: 20,
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#888',
  },

  operationButton: {
    color: '#fff',
    backgroundColor: '#fa8231',
  },

  doubleButtton: {
    width: (Dimensions.get('window').width / 4) * 2,
  },

  tripleButton: {
    width: (Dimensions.get('window').width / 4) * 3,
  },
})


export default props => {
  const stylesButton = [styles.button]

  if(props.double) stylesButton.push(styles.doubleButtton)
  if(props.triple) stylesButton.push(styles.tripleButton)
  if(props.operation) stylesButton.push(styles.operationButton)

  return (
    <TouchableOpacity onPress={() => props.onClick(props.label)}>
      <Text style={stylesButton}>
        {props.label}
      </Text>
    </TouchableOpacity>
  )
}
