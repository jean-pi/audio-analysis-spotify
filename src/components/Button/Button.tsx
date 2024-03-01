"use client";
import React from 'react';
import styles from './Button.module.scss';

export type ButtonProps = {
	// types...
}

const Button: React.FC<ButtonProps>  = ({}) => {
	return (
		<div className={styles.button}>
 			Button works!
 		</div>
	);
};

export default Button;
