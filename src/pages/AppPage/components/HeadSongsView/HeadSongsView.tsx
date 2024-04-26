// "use client";
import React from 'react';
import styles from './HeadSongsView.module.scss';
import { zustandBookStore } from '@/store';



const HeadSongsView: React.FC = () => {

	const {infoInContext} = zustandBookStore();


	return (
		<div className={styles.container}>
			<img className={styles.container_img} src={infoInContext.albumPlaylistSelected?.photoUrl} alt="" />
			<div className={styles.container_detailsTextContainer}>
				<h3 className={styles.container_detailsTextContainer_mainText}>{infoInContext.albumPlaylistSelected?.name}</h3>
				<h4 className={styles.container_detailsTextContainer_secondText}>
					{infoInContext.albumPlaylistSelected?.type} 
					<span className={styles.container_detailsTextContainer_secondText_pointSeparator}>•</span>  
					by {infoInContext.albumPlaylistSelected?.owner}
					<span className={styles.container_detailsTextContainer_secondText_pointSeparator}>•</span>  
					{infoInContext.albumPlaylistSelected?.numOfSongs} songs
				</h4>
			</div>
		</div>
	);
};

export default HeadSongsView;
