import { Button } from '../Button/Button'
import CreateIcon from '../assets/create.svg?react'
import ChatIcon from '../assets/chat.svg?react'
import MoreVertIcon from '../assets/more_vert.svg?react'

const WriteButton = (
  <Button
    shape="rectangle"
    variant="outline"
    colorScheme="secondary"
    children={'깃로그 쓰기'}
    icon={<CreateIcon />}
  />
)

const ActionIcons = (
  <div className="flex items-center gap-2">
    <ChatIcon />
    <MoreVertIcon />
  </div>
)

const PublishButtons = (
  <div className="flex items-center gap-1">
    <button className="px-3 py-2 font-normal text-[14px] leading-[1.6] trakcing-[-0.5%] text-[#FF3F3F]">
      삭제하기
    </button>
    <button className="px-3 py-2 font-normal text-[14px] leading-[1.6] tracking-[-0.5%] text-[#000000]">
      게시하기
    </button>
  </div>
)

export const HEADER_CONTENTS = {
  WRITE: WriteButton,
  ICONS: ActionIcons,
  PUBLISH: PublishButtons,
}
