import React, { useContext } from 'react'
import { Card, Form, ListGroup } from 'react-bootstrap'
import { C as ctx } from './Context'

const Book = props => {
	const { books, updateShelf, shelves } = useContext(ctx)
	const { componentIsRenderedBy, authors, title, cover, id } = props

	let setDefaultShelfValue = () => {
		let bookShelf = "none";
		// Handles the case where the books rendered by the search view have the equivelant status in the bookcase
		if (componentIsRenderedBy === "search") {
			for (let book of shelves) {
				if (book.id === id) {
					bookShelf = book.shelf
				}
			}
			// Handles the case where the books rendered by the main view have the equivelant status in the bookcase
		} else {
			for (let book of books) {
				if (book.id === id) {
					bookShelf = book.shelf
				}
			}
		}
		return bookShelf
	}

	return (
		<ListGroup.Item className="m-2">
			<Card style={{ width: '15rem', boxShadow: '0 .4px 10px rgba(0,0,0)' }}>
				<Card.Img height={250} variant="top" src={cover !== undefined ? cover.thumbnail : 'https://dummyimage.com/138x203/b3b3b3/ffffff.png&text=not+available'} alt={title} />
				<Card.Body>
					<Card.Title>{title || "No title"}</Card.Title>
					<Card.Text>{authors || "Anonymous"}</Card.Text>
				</Card.Body>
				<Form>
					<Form.Group className="mx-1 ">
						<Form.Control as="select" custom defaultValue={setDefaultShelfValue()} onChange={(e) => updateShelf(id, e.target.value)}>
							<option disabled>Move to...</option>
							<option value="currentlyReading"> Currently Reading</option>
							<option value="wantToRead">Want to Read</option>
							<option value="read">Read</option>
							<option value="none">None</option>
						</Form.Control>
					</Form.Group>
				</Form>
			</Card>
		</ListGroup.Item >
	)
}

export default Book