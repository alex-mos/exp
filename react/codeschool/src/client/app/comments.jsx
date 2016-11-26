const React = require('react')
const ReactDOM = require('react-dom')
const jquery = require('jquery')

// Обёртка для комментариев
class CommentBox extends React.Component {
  constructor() {
    super()

    this.state = {
      showComments: false,
      comments: [

      ]
    }
  }

  // Стандартная функция, исполняющаяся перед первым рендеренгом компонента.
  componentWillMount() {
    _fetchComments()
  }

  render() {
    // записываем массив комонентов с комментариями в переменную.
    const comments = this._getComments();

    // Условие, по которому показывается блок комментариев.
    let commentNodes;
    if (this.state.showComments) {
      commentNodes = <div className='comment-list'>{comments}</div>
    }

    let buttonText = 'Show comments'
    if (this.state.showComments) {
      buttonText = 'Hide comments'
    }

    // Рендерим обёртку с комментариями.
    return(
      <div className='comment-box'>
        <h3>Comments</h3>
        <CommentForm addComment={this._addComment.bind(this)} />
        <CommentQuantity count={comments.length} />
        <button onClick={this._handleClick.bind(this)}>{buttonText}</button>
        {commentNodes}
      </div>
    )
  }

  // Стандартная функция, исполняющаяся после рендеринга компонента.
  componentDidMount() {
    this._timer = setInterval(() => this._fetchComments(), 5000)
  }

  // Стандартная функция, исполняющаяся после удаления компонента.
  componentWillUnMount() {
    clearInterval(this._timer)
  }

  // Функция, меняющая стейт, по которому показывается блок комментариев.
  _handleClick() {
    this.setState({
      showComments: !this.state.showComments
    })
  }

  // Функция, возвращающая комменты в виде массива реактовских компонентов.
  _getComments() {
    return this.state.comments.map((comment) => {
      return (
        <Comment
          author={comment.author}
          body={comment.body}
          key={comment.id} /> // Превращаем каждый объект в компонент.
      )
    })
  }

  // Функция, отправляющая содержимое формы комментария в массив комментариев
  _addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    }

    this.setState({
      comments: this.state.comments.concat([comment])
    })
  }

  _fetchComments() {
    jquery.ajax({
      method: 'GET',
      url: '/api/comments',
      success: (comments) => {
        this.setState({comments})
      }
    })
  }

  _deleteComment() {
    jquery.ajax({
      method: 'DELETE',
      url: `/api/comments/${comment.id}`
    })
  }
}


// Компонент, отображающий колчество комментов.
class CommentQuantity extends React.Component {
  render() {
    var commentCount = this.props.count

    if (commentCount == 0) {
      return(<h4 className='comment-count'>No comments</h4>)
    } else if (commentCount == 1) {
      return(<h4 className='comment-count'>1 comment</h4>)
    } else {
      return(<h4 className='comment-count'>{commentCount} comments</h4>)
    }
  }
}


// Форма добавления нового комментария
class CommentForm extends React.Component {
  render() {
    return(
      <form className='CommentForm' onSubmit={this._handleSubmit.bind(this)}>
        <label>Join the discussion</label>
        <div className='comment-form-fields'>
          <input placeholder='Name' ref={(input) => this._author = input} />
          <br/><br/>
          <textarea placeholder='Comment' ref={(textarea) => this._body = textarea}></textarea>
        </div>
        <div className='comment-form-actions'>
          <button type='submit'>
            Post comment
          </button>
        </div>
      </form>
    )
  }

  _handleSubmit(e) {
    e.preventDefault()

    let author = this._author
    let body = this._body

    this.props.addComment(author.value, body.value) // this method has been passed as an argument
  }
}


// Отдельный комментарий
class Comment extends React.Component {
  render() {
    return(
      <div className='comment'>
        <p className='comment-header'>{this.props.author}</p>
        <p className='comment-body'>
          {this.props.body}
        </p>
        <div className='comment-footer'>
          <a onClick={this._deleteComment.bind(this)} href='#' className='comment-footer-delete'>
            Delete comment
          </a>
        </div>
      </div>
    )
  }
}


ReactDOM.render(
  <CommentBox />, document.getElementById('story-app')
)
