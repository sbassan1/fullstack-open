
const Notification = ({ message, type}) => {
  if (message === null) {
    return null
  }

  const notificationTypeClass = `${'notification'} ${type}`

  return (
    <div className={notificationTypeClass}>
      {message}
    </div>
  )
}

export default Notification