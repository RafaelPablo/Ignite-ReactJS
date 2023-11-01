import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'

export function Checkbox() {
  return (
    <CheckboxContainer>
      <CheckboxIndicator>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}
