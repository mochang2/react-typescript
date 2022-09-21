import { useState, Fragment } from 'react'
import { TransparentButton } from 'components/common'
import { CategoryCreationModal } from 'components/faq'

function CategoryCreationButtion() {
  const [open, setOpen] = useState(false)

  const handleOpen = () => {
    setOpen(!open)
  }

  return (
    <Fragment>
      <TransparentButton color="#DF1F26" onClick={handleOpen}>
        카테고리 추가
      </TransparentButton>
      {open && <CategoryCreationModal onClose={handleOpen} />}
    </Fragment>
  )
}

export default CategoryCreationButtion
