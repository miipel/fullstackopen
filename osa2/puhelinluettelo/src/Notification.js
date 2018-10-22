import React from 'react'

import './Notification.css'

const notification = ({message}) => {
  if (message === null) {
    return null
  }
  return (
    <div className="success">
      {message}
    </div>
  )
}

export default notification