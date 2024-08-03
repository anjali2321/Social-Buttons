const Button = props => {
  const Button = props => {
    const {cls, content} = props
    return <button className={cls}>{content} </button>
  }
}

const element = (
  <div className='container'>
    <h1>Social Buttons</h1>
    <div className='card'>
      <Button cls='like-button' content='Like' />
      <Button cls='comment-button' content='Comment' />
      <Button cls='share-button' content='Share' />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
