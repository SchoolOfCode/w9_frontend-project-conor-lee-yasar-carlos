import React from 'react'


function ResourceItem({data, link}) {
  return (
    <div className='resource-list-item'>
      <a target="_blank" href={link} className="resource-list-text">{data}</a>
    </div>
  )
}

export default ResourceItem

