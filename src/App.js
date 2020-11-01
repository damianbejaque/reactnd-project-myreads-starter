import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Bookshelf from './Bookshelf'
import SearchBar from './SearchBar'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    showSearchPage: false
  }
  componentDidMount(){
    BooksAPI.getAll()
    .then( books => {
      this.setState( () =>({
        books
      }))
    })
  }

  render() {
    return (
      <div>
        <Route exact path='/' render={() => (
        <div className="app">
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>    
                <Bookshelf books={this.state.books}/>                
              </div>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )
        </div>
        )
        } />
        <Route path='/search'  />
      </div>
    )
  }
}

export default BooksApp
