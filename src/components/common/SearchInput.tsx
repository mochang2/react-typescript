import { ChangeEvent } from 'react'
import styled from 'styled-components'
import Image from './Image'
import { MagnifyingIcon } from 'assets/image'

interface SearchInputProps {
  value: string
  onChangeValue: (event: ChangeEvent<HTMLInputElement>) => void
}

const Wrapper = styled.section`
  margin-right: 32px;

  position: relative;
  width: 50%;
  max-width: 635px;
`

const Input = styled.input`
  padding: 4px 28px 4px 8px;

  height: 28px;
  width: calc(100% - 28px);

  border: 1px solid #c4c4c4;
  border-radius: 10px;
`

const Icon = styled(Image)`
  position: absolute;
  right: -20px;
  bottom: 8px;
  padding: 2px;

  &:hover {
    cursor: pointer;
  }
`

function SearchInput({ value, onChangeValue }: SearchInputProps) {
  return (
    <Wrapper>
      <Input placeholder="검색어 입력" value={value} onChange={onChangeValue} />
      <Icon src={MagnifyingIcon} width={'20px'} />
    </Wrapper>
  )
}

export default SearchInput
