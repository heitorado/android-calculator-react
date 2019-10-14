import styled from 'styled-components/native'

export const Button = styled.TouchableOpacity`
  flex: 1;
  background-color: ${props => props.number > 5 ? 'white' : 'blue'}
`
export const Button2 = styled.TouchableOpacity`
  background-color: black;
  flex: 1;
`

