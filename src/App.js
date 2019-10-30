import React from 'react';
import logo from './logo.svg';
import './App.css';

import { VisibleFilter, DynamicFilter } from './components/list-filter-search';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
			</header>
			<section className="content">
        <VisibleFilter 
          data={
            [
              "Apples",
              "Broccoli",
              "Tomatos",
              "Milk",
              "Eggs",
              "Water",
              "Granola",
              "Bananas",
              "Smoothie",
              "Salat",
              "Yogurt"
            ]
          }
        ></VisibleFilter>
        <DynamicFilter 
          data={
            [
              "Apples",
              "Broccoli",
              "Tomatos",
              "Milk",
              "Eggs",
              "Water",
              "Granola",
              "Bananas",
              "Smoothie",
              "Salat",
              "Yogurt"
            ]
          }
        ></DynamicFilter>
			</section>
			<footer className="App-footer">
				(c) Copyright - Mike Ludemann
			</footer>
		</div>
	);
}

export default App;
