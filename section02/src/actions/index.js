import who from './who';

export function selectBook(book) {
	// console.log('A book has been selected: ', book.title);
	return {
		type: who.SELECTED_BOOK,
		payload: book,
	}
}