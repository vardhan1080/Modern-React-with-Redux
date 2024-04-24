import { GoBell, GoAlert } from 'react-icons/go'
import Button from './Button'

export default function App() {

  const handleClick = () => {
    console.log('button clicked');
  };

  return (
    <div>
      <div>
        <Button primary outline onClick={handleClick} className="mb-5"><GoBell />ABCDEFGH</Button>
      </div>
      <div>
        <Button secondary onMouseEnter={handleClick}><GoAlert />ABCDEFGH</Button>
      </div>
      <div>
        <Button success>ABCDEFGH</Button>
      </div>
      <div>
        <Button warning outline rounded>ABCDEFGH</Button>
      </div>
      <div>
        <Button danger>ABCDEFGH</Button>
      </div>
    </div>
  )
}