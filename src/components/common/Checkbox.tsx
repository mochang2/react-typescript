import { ChangeEvent } from 'react'
import styled from 'styled-components'

interface CheckboxProps {
  id?: number | string
  onChange?: (event: ChangeEvent) => void
  checked: boolean
}

const Input = styled.input`
  margin: 0;

  width: 1.5em;
  height: 1.5em;

  border: 1px solid #000000;
  border-radius: 9px;

  appearance: none;

  &:checked {
    border-color: transparent;
    background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e"); // tailwind css
    background-color: limegreen;
  }

  &:hover {
    cursor: pointer;
  }
`

function Checkbox({ id, onChange, checked }: CheckboxProps) {
  return (
    <Input
      type="checkbox"
      id={id?.toString()}
      checked={checked}
      onChange={onChange}
    />
  )
}

export default Checkbox
