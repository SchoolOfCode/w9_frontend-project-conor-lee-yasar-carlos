import React from 'react'

function Todo({ toDoClass, resourceClass }) {
  return (
    <div className='todo'>
        <div className={toDoClass}>
            <h2>Today's subjects</h2>
            <div className='todo-list-item'>

            </div>
        </div>
        <div className={resourceClass}>
            <h2>Resources</h2>
            <div className='resource-list-item'>

            </div>
        </div>
    </div>
  )
}

export default Todo