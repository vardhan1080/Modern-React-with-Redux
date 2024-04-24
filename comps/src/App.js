import React from 'react'
import Button from './Button'

export default function App() {
  return (
    <div>
      <div>
        <Button primary>First</Button>
      </div>
      <div>
        <Button secondary>Second</Button>
      </div>
      <div>
        <Button success>Third</Button>
      </div>
      <div>
        <Button warning>Fourth</Button>
      </div>
      <div>
        <Button danger>Fourth</Button>
      </div>
    </div>
  )
}