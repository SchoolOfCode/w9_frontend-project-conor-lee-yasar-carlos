import React from 'react'

function Todo({ toDoClass, resourceClass }) {
  return (
    <div className='todo'>
        <div className={toDoClass}>
            <div className='h2'>
              <h2>Today's subjects</h2>
            </div>
            <div className='todo-list-item'>
              <p className='list-item-text'>React useState</p>
            </div>
        </div>
        <div className={resourceClass}>
            <div className='h2'>
              <h2>Resources</h2>
            </div>
            <div className='resource-list-item'>

            </div>
        </div>
    </div>
  )
}

export default Todo