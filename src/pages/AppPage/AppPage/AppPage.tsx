"use client";
import React from 'react';
import styles from './AppPage.module.scss';

export type AppPageProps = {
	// types...
}

const AppPage: React.FC<AppPageProps>  = ({}) => {
	return (
		<div className={styles.apppage}>
 			AppPage works!
 		</div>
	);
};

export default AppPage;
