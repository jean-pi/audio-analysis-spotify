// "use client";
import React from 'react';
import styles from './SearchMainBar.module.scss';

import { ICON_FIND, PLACEHOLDER_SEARCH_MAIN_BAR_TEXT } from '@/constants';

export type SearchMainBarProps = {
	// types...
}

const SearchMainBar: React.FC<SearchMainBarProps>  = ({}) => {
	return (
		<div className={styles.barSearchContainer}>
        	<img className={styles.barSearchContainer_img} src={ICON_FIND.url} alt={ICON_FIND.alt} />
        	<input className={styles.barSearchContainer_inputText} type="text" id="bar-search" autoComplete="off" name="mainSearchBar" placeholder={PLACEHOLDER_SEARCH_MAIN_BAR_TEXT} />
    	</div>
	);
};

export default SearchMainBar;
