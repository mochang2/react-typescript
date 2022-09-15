import { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Image } from 'components/common'
import { WhiteRightArrow } from 'assets/image'

export interface VerticalMenuProps {
  icon: string
  name: string
  children: MenuChildrenType[]
  linkTo?: string
}

interface MenuChildrenType {
  name: string
  linkTo: string
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`

const Category = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  padding: 0 10px;

  height: 45px;

  font-weight: ${({ $active }) => ($active ? '600' : 'unset')};
  color: ${({ $active }) => ($active ? '#000000' : 'unset')};

  background-color: ${({ $active }) => ($active ? '#ffffff' : 'unset')};

  border-radius: 10px;

  &:hover {
    color: #000000;

    background-color: #ffffff;
  }
`

const ParentCategory = styled(Category)`
  justify-content: space-between;

  height: 45px;
`

const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;
  font-weight: 500;
`

const RightContainer = styled.div<{ open: boolean }>`
  width: 6px;

  transform: ${({ open }) => (open ? 'rotate(90deg)' : 'rotate(0)')};
`

const ChildCategory = styled(Category)`
  padding-left: 20px;
`

function VerticalMenu({ icon, name, children, linkTo }: VerticalMenuProps) {
  const [open, setOpen] = useState(
    children.some((child) => location.pathname.startsWith(child.linkTo))
  )

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Wrapper>
      <ParentCategory
        to={linkTo ?? '#'}
        onClick={handleOpen}
        $active={
          Boolean(linkTo) && location.pathname.startsWith(linkTo as string)
        }
      >
        <LeftContainer>
          <Image src={icon} width={'16px'} />
          &nbsp;{name}
        </LeftContainer>
        <RightContainer open={open}>
          {children.length !== 0 && <Image src={WhiteRightArrow} />}
        </RightContainer>
      </ParentCategory>
      {open &&
        children.map((child, index) => {
          return (
            <ChildCategory
              to={child.linkTo}
              $active={location.pathname.startsWith(child.linkTo)}
              key={index}
            >
              &nbsp;{child.name}
            </ChildCategory>
          )
        })}
    </Wrapper>
  )
}

export default VerticalMenu
