import Reorder from '../../assets/reorder.svg?react'
import { HEADER_CONTENTS } from './HeaderContents'

type HeaderType = keyof typeof HEADER_CONTENTS

interface HeaderProps {
  type: HeaderType
}

export const Header = ({ type }: HeaderProps) => {
  return (
    <header className="w-full h-16 bg-[#FFFFFFE5] flex items-center justify-between">
      <div className="flex justify-center items-center font-normal pl-3 text-[20px] leading-[28px] gap-2">
        <Reorder />
        <p className="font-smooch">GITLOG</p>
      </div>
      <div className="pr-4">{HEADER_CONTENTS[type]}</div>
    </header>
  )
}
