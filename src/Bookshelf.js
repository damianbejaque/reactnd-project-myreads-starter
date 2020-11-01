import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class Bookshelf extends Component{
    render(){
    const { books } = this.props

    return(
        <div className="bookshelf">
        <h2 className="bookshelf-title">Currently Reading</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
                {books.map( book => (
                    <Book key={book.id} book={book}  />
                    )
                )}
            </li>
          </ol>
        </div>
      </div>
    )
        }
}
export default Bookshelf;