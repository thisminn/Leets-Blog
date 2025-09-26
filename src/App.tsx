import { Button } from './component/button/Button'
import CreateIcon from './assets/create.svg?react'
export default function App() {
  return (
    <div>
      <Button icon={<CreateIcon />}>깃로그 시작하기</Button>
    </div>
  )
}
