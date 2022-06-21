import React from 'react'


function ResourceItem({data, link}) {
  return (
      <a href={link} className='list-item-text'>{data}</a>
  )
}

export default ResourceItem

