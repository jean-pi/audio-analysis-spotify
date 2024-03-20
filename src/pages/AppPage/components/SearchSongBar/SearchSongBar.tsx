// "use client";
import React from 'react';
import styles from './SearchSongBar.module.scss';
import { ICON_FIND, PLACEHOLDER_SEARCH_SONG_BAR_TEXT } from '@/constants';


export type SearchSongBarProps = {
    
}

const SearchSongBar: React.FC<SearchSongBarProps>  = () => {
	return (
		<div className={styles.barSearchContainer}>
        	<img className={styles.barSearchContainer_img} src={ICON_FIND.url} alt={ICON_FIND.alt} />
        	<input className={styles.barSearchContainer_inputText} type="text" id="bar-search" autoComplete="off" name="mainSearchBar" placeholder={PLACEHOLDER_SEARCH_SONG_BAR_TEXT} />
    	</div>
 	);
};
 
export default SearchSongBar;
