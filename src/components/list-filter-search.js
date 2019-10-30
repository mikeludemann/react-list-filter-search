import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fortawesome/fontawesome-free/css/fontawesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import '@fortawesome/fontawesome-free/js/all.min.js';
import '@fortawesome/fontawesome-free/js/fontawesome.min.js';

class VisibleFilter extends Component {

  constructor(props) {

		super(props)

		this.state = {
			defaultValue: "",
			values: []
		}

		this.filterList = this.filterList.bind(this);

	}

	filterList(event){

		var getUpdateList = this.props.data;

		getUpdateList = getUpdateList.filter(function(item){

			return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1;

		});

		this.setState({values: getUpdateList});

	}

	componentWillMount(){

		this.setState({values: this.props.data});

	}

	render(){

		const searchFilterList = {
			padding: "20px",
			maxWidth: "200px",
			margin: "auto"
		};

		const textField = {
			lineHeight: "2",
			fontSize: "16px",
			height: "auto",
			paddingLeft: "20px",
			width: "94%",
			marginBottom: "5px"
		};

		const listContainer = {
      margin: "0",
      padding: "0"
		};

		const listElements = {
			listStyle: "none",
			border: "1px solid #ccc",
			marginTop: "-1px",
			lineHeight: "2",
			padding: "5px 0px 5px 20px",
			background: "#fff",
			width: "95%"
		};

		return (
			<div className="search--filter--list" style={searchFilterList}>
				<input type="text" placeholder="Search" onChange={this.filterList} style={textField}/>
				<ul style={listContainer}>
					{this.state.values.map(function(item) {
						return <li style={listElements} key={item}>{item}</li>
					})}
				</ul>
			</div>
		);

	}

}

VisibleFilter.propTypes = {
  props: PropTypes.array.isRequired
}

// #############################################

class DynamicFilter extends Component {

  constructor(props) {

		super(props)

		this.state = {
			defaultValue: "",
			values: []
		}

		this.filterList = this.filterList.bind(this);

	}

	filterList(event){

    var getUpdateList = this.props.data;
    var elem = document.getElementById("filterList");

		getUpdateList = getUpdateList.filter(function(item){

			return item.toLowerCase().search(event.target.value.toLowerCase()) !== -1 ? elem.style.display = "none" : elem.style.display = "";

    });
    
    console.log(getUpdateList);

		this.setState({values: getUpdateList});
    
    console.log(this.state.values);

	}

	componentWillMount(){

		this.setState({values: this.props.data});

	}

	render(){

		const searchFilterList = {
			padding: "20px",
			maxWidth: "200px",
			margin: "auto"
		};

		const textField = {
			lineHeight: "2",
			fontSize: "16px",
			height: "auto",
			paddingLeft: "20px",
			width: "94%",
			marginBottom: "5px"
		};

		const listContainer = {
      margin: "0",
      padding: "0",
      display: "none"
		};

		const listElements = {
			listStyle: "none",
			border: "1px solid #ccc",
			marginTop: "-1px",
			lineHeight: "2",
			padding: "5px 0px 5px 20px",
			background: "#fff",
			width: "95%"
		};

		return (
			<div className="search--filter--list" style={searchFilterList}>
				<input type="text" id="filterSearch" placeholder="Search" onChange={this.filterList} style={textField}/>
				<ul id="filterList" style={listContainer}>
					{this.state.values.map(function(item) {
						return <li style={listElements} key={item}>{item}</li>
					})}
				</ul>
			</div>
		);

  }
  
}

DynamicFilter.propTypes = {
  data: PropTypes.array.isRequired
}

// #############################################

export {
  VisibleFilter,
  DynamicFilter
}
