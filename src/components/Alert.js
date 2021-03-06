import React from 'react'

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`Alert alert-${alert.type}`}>
        <i className="fas fa-exclamation-circle"></i> {" "} {alert.msg}
      </div>
    )
  )
}

export default Alert
