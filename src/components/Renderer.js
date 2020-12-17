import React, { useContext } from 'react'
import { Spinner } from 'react-bootstrap'
import Book from "./Book";
import { C as ctx } from './Context';

const Renderer = books => args => {
	const { shelf, componentIsRenderedBy } = args; /* The property shelf is coming only from the Search component */
	return books.length > 0 ? books.map((book) =>
		<Book
			key={book.id}
			id={book.id}
			books={books}
			authors={book.authors}
			title={book.title}
			cover={book.imageLinks}
			shelf={shelf}
			componentIsRenderedBy={componentIsRenderedBy} // Added here a a new prop
		/>
	) : NoBooksLoaded()
}

const NoBooksLoaded = () => {
	const { isLoaded } = useContext(ctx)
	return <div className="no-books">
		{isLoaded ? <Spinner animation="border" variant="primary" /> : <h6>There are no books.</h6>}
	</div>
}

export default Renderer