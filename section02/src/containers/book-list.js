import React, { Component } from 'react';
import { connect } from 'react-redux';

import { selectBook } from '../actions';
import { bindActionCreators } from 'redux';

class BookList extends Component {
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li key={book.title} 
					className="list-group-item"
					onClick={() => this.props.selectBook(book)}>
					{book.title}
				</li>
			);
		});
	}
	render() {
		return (
			<ul className="list-group col-sm-4">
				{this.renderList()}
			</ul>
		);
	}
}

function mapStateToProps(state) {
	// Whatever is return will show up as props
	// inside of BookList
	return {
		books: state.books,
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ selectBook }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);