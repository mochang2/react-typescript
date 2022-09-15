import { Fragment, useState, MouseEvent } from 'react'
import styled from 'styled-components'
import Image from './Image'
import { WhiteDownArrow } from 'assets/image'
import { FaqCategoryType } from 'types'

interface SelectionProps {
  options: FaqCategoryType[]
  selectedOption: string
  defaultOption?: string
  onClickOption?: (event: MouseEvent) => void
}

const Background = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;

  background-color: transparent;
`

const Wrapper = styled.section`
  position: relative;
  width: 128px;
  height: 36px;

  border: 2px solid #7e7e7e;
  border-radius: 10px;
`

const SelectedBox = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const Select = styled.ul<{ $toggle: boolean }>`
  display: ${({ $toggle }) => ($toggle ? 'block' : 'none')};
  margin: 0;
  padding: 4px;

  position: absolute;
  left: -2px;
  top: 40px;
  width: 120px;

  border: 2px solid black;

  background-color: #ffffff;
  border: 1px solid #c4c4c4;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;

  list-style: none;
`

const Option = styled.li<{ $active?: boolean }>`
  margin: 2px 0;
  padding: 3px 0;

  text-align: center;

  max-width: 128px;

  background-color: ${({ $active }) => ($active ? '#e5e5e5' : 'unset')};

  border-radius: 10px;

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    background-color: #e5e5e5;
  }
`

function Selection({
  defaultOption,
  options,
  selectedOption,
  onClickOption
}: SelectionProps) {
  const [toggle, setToggle] = useState(false)

  const offToggle = () => {
    if (toggle) {
      setToggle(false)
    }
  }

  const handleToggle = () => {
    setToggle(!toggle)
  }

  return (
    <Fragment>
      {toggle && <Background onClick={offToggle} />}
      <Wrapper onClick={handleToggle}>
        <SelectedBox>
          {selectedOption} &nbsp;
          <Image src={WhiteDownArrow} width={'11px'} height={'7px'} />
        </SelectedBox>
        <Select $toggle={toggle} onClick={onClickOption}>
          {Boolean(defaultOption) && (
            <Option
              aria-valuetext={defaultOption}
              $active={selectedOption === defaultOption}
            >
              {defaultOption}
            </Option>
          )}
          {options.map((option) => (
            <Option
              aria-valuetext={option.name}
              key={option.id}
              $active={selectedOption === option.name}
            >
              {option.name}
            </Option>
          ))}
        </Select>
      </Wrapper>
    </Fragment>
  )
}

export default Selection
