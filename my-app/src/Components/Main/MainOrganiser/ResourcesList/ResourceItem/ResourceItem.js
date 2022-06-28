import React from 'react'


// Props:
// data is the actual text for the resource
// url is the location for the resource
function ResourceItem({data, link}) {
  return (
    <div className='resource-list-item'>
      <a target="_blank" href={link} className="resource-list-text" rel="noreferrer">{data}</a>
    </div>
  )
}

export default ResourceItem

