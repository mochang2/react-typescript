import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  color?: string
  onClick?: (event: MouseEvent) => void
  children: ReactNode
}

const Button = styled.button<{ $color?: string }>`
  padding: 9.5px 23.5px;

  min-width: 84px;
  height: 42px;

  font-size: 1rem;
  color: ${({ $color }) => $color ?? '#000000'};

  background-color: transparent;

  border: 1px solid #c4c4c4;
  border-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`

function TransparentButton({ color, onClick, children }: ButtonProps) {
  return (
    <Button $color={color} onClick={onClick}>
      {children}
    </Button>
  )
}

export default TransparentButton
