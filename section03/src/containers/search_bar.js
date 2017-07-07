import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = { term: '' };

		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onInputChange(event) {
		//console.log(event.target.value);
		this.setState({ term: event.target.value });
	}

	onFormSubmit(event) {
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: ''});
	}

	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="container-fluid">
					<div className="navbar-header">
						<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a className="navbar-brand" href="#">Brand</a>
					</div>

					<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

						<form className="navbar-form navbar-left main-search"
							onSubmit={this.onFormSubmit}>
							<div className="form-group form-group-search">
								<div className="input-group" >
									<span className="input-group-addon " id="basic-addon1"><i className="fa fa-search" aria-hidden="true"></i></span>
									<input type="text"
										className="form-control form-control-search"
										value={this.state.term}
										onChange={this.onInputChange}
										placeholder="Get a five-day forecasst in your favourte cites"
										aria-describedby="basic-addon1" />
								</div>
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</nav>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);