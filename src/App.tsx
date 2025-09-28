import { Button } from './component/Button/Button'
import { Header } from './component/Header'
import CreateIcon from './assets/create.svg?react'
import { TextField } from './component/TextFiled/TextFiled'
export default function App() {
  return (
    <div>
      <TextField variant='default'/>
      <TextField variant='input'/>
      <TextField variant='click'/>
      <TextField variant='disabled'/>
      <Header />
      <div className="m-4">
        <Button variant="filled" colorScheme="primary" icon={<CreateIcon />}>
          깃로그 시작하기
        </Button>
      </div>
      <div className="m-4">
        <Button variant="filled" colorScheme="secondary" icon={<CreateIcon />}>
          깃로그 시작하기
        </Button>
      </div>
      <div className="m-4">
        <Button variant="filled" colorScheme="dark" icon={<CreateIcon />}>
          깃로그 시작하기
        </Button>
      </div>
      <div className="m-4">
        <Button variant="outline" colorScheme="primary" icon={<CreateIcon />}>
          깃로그 시작하기
        </Button>
      </div>
      <div className="m-4">
        <Button variant="outline" colorScheme="secondary" icon={<CreateIcon />}>
          깃로그 시작하기
        </Button>
      </div>
      <div className="m-4">
        <Button shape="rectangle" colorScheme="secondary" icon={<CreateIcon />}>
          깃로그 시작하기
        </Button>
      </div>
      <div className="m-4">
        <Button shape="rectangle" colorScheme="secondary" icon={<CreateIcon />}>
          깃로그 시작하기
        </Button>
      </div>
    </div>
  )
}
