import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$ignite500',
})

export function App() {
  return <Button>Hello world</Button>
}
