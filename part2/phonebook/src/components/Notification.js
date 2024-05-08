const Notification = ( { message }) => {
  if (!message.message) {
    return null
  }

  const style = message.error?'error': 'info';
  
  console.log(style);
  return (
    <div className={style}>
      {message.message}
    </div>
  )
}

export default Notification