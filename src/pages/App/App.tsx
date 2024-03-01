"use client";
import React from 'react';
import styles from './App.module.scss';

export type AppProps = {
	// types...
}

const App: React.FC<AppProps>  = ({}) => {
	return (
		<div className={styles.app}>
 			App works!
 		</div>
	);
};

export default App;
