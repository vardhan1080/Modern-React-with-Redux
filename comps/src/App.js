import React from 'react'
import Button from './Button'

export default function App() {
  return (
    <div>
      <div>
        <Button primary outline>ABCDEFGH</Button>
      </div>
      <div>
        <Button secondary>ABCDEFGH</Button>
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