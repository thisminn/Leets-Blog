import Reorder from '../assets/reorder.svg?react'
export const Header = () => {
  return (
    <header className="w-full h-16 bg-[#FFFFFFE5] flex items-center">
      <div className="flex justify-center items-center font-normal px-4 pt-4 pb-3text-[20px] leading-[28px] gap-2">
        <Reorder />
        <p className="font-smooch">GITLOG</p>
      </div>
    </header>
  )
}
