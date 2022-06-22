import React from 'react'


function ResourceItem({data, link}) {
  return (
    <div className='resource-list-item'>
      <a href={link} >{data}</a>
    </div>
  )
}

export default ResourceItem

