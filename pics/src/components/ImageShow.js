import React from 'react'

export default function ImageShow({image}) {
  return (
    <div>
      <img alt={image.alt_description} src={image.urls.small}/>
      </div>
  )
}
