import Profile from '../../assets/profile_icon.svg?react'
import { Button } from '../Button/Button'
// type SidebarType = 'GUEST' | 'USER'

// interface SiderbarProps {
//   type: SidebarType
// }
export const Sidebar = () => {
  return (
    <aside className="h-screen w-[240px] border-r flex flex-col border-[#E6E6E6] bg-[#E6E6E6] gap-2.5 p-6">
      <Profile />
      <p className="text-[14px] font-light leading-[1.6] tracking-[-0.5%] text-[#333333]">
        You can make anything by writing
      </p>
      <div className='flex flex-row items-center justify-center'>
        <Button children={'깃로그 시작하기'} />
        <Button children={'깃로그 쓰기'} />
      </div>
    </aside>
  )
}
