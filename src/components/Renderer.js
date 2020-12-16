import React from 'react'
import { Spinner } from 'react-bootstrap'
import Book from "./Book";
const Renderer = books => args => {
	const { shelf, onUpdateShelf, isLoaded, componentIsRenderedBy } = args; /* The property shelf is coming only from the Search component */
	return books.length !== undefined ? books.map((book) =>
		<Book
			books={books}
			authors={book.authors}
			title={book.title}
			cover={book.imageLinks}
			shelf={shelf}
			id={book.id}
			componentIsRenderedBy={componentIsRenderedBy}
			onUpdateShelf={onUpdateShelf}
			key={book.id} />
	) : 'There are no books.'
}
const noBooks = isLoaded =>
	<div className="no-books">
		{isLoaded ? <Spinner animation="border" variant="primary" /> : 'There are no books.'}
	</div>

export default Renderer