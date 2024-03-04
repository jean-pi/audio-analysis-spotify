"use client";
import React from 'react';
import styles from './SearchYourLibrary.module.scss';
import { YOUR_LIBRARY_SEARCH_BAR } from '@/constants';

export type SearchYourLibraryProps = {
	// types...
}

const SearchYourLibrary: React.FC<SearchYourLibraryProps>  = ({}) => {
	return (
		<div className={styles.searchyourlibrary}>
			<input className={styles.searchyourlibrary_input} type="text" placeholder={YOUR_LIBRARY_SEARCH_BAR.textPaceholder} />
 			<span className={styles.searchyourlibrary_span} tabIndex={0}>
				<img className={styles.searchyourlibrary_span_img} src={YOUR_LIBRARY_SEARCH_BAR.img} alt={YOUR_LIBRARY_SEARCH_BAR.alt} />
			</span>
 		</div>
	);
};

export default SearchYourLibrary;
