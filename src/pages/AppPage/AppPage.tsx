"use client";
import React from 'react';
import styles from './AppPage.module.scss';
import { ButtonDisconnectAccount, SearchMainBar } from './components';

export type AppPageProps = {
	// types...
}

const AppPage: React.FC<AppPageProps>  = ({}) => {
	return (
		<div className={styles.appPage}>
 			
			<header className={styles.layerHeaderApp}>
				<ButtonDisconnectAccount eventClick={ () => console.log("disconnect")}/>
				<SearchMainBar/>
			</header>

			<main className={styles.layerMainApp}>

			</main>

			<footer className={styles.layerFooterApp}>

			</footer>

 		</div>
	);
};

export default AppPage;
