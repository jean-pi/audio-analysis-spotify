"use client";
import React from 'react';
import styles from './Landing.module.scss';

export type LandingProps = {
	// types...
}

const Landing: React.FC<LandingProps>  = ({}) => {
	return (
		<div className={styles.landing}>
 			Landing works!
 		</div>
	);
};

export default Landing;
