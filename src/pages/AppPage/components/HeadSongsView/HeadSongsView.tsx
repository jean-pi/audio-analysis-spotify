// "use client";
import React from 'react';
import styles from './HeadSongsView.module.scss';
import { zustandBookStore } from '@/store';



const HeadSongsView: React.FC = () => {

	const {albumPlaylistSelected} = zustandBookStore();


	return (
		<div className={styles.container}>
			<img className={styles.container_img} src={albumPlaylistSelected?.photoUrl} alt="" />
			<div className={styles.container_detailsTextContainer}>
				<h3 className={styles.container_detailsTextContainer_mainText}>{albumPlaylistSelected?.name}</h3>
				<h4 className={styles.container_detailsTextContainer_secondText}>
					{albumPlaylistSelected?.type} 
					<span className={styles.container_detailsTextContainer_secondText_pointSeparator}>•</span>  
					by {albumPlaylistSelected?.owner}
					<span className={styles.container_detailsTextContainer_secondText_pointSeparator}>•</span>  
					{albumPlaylistSelected?.numOfSongs} songs
				</h4>
			</div>
		</div>
	);
};

export default HeadSongsView;
