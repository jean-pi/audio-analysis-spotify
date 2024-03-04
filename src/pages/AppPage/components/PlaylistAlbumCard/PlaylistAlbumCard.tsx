"use client";
import React from 'react';
import styles from './PlaylistAlbumCard.module.scss';

export type PlaylistAlbumCardProps = {
	objCard: {
		type: string,
        name: string,
        owner: string,
        numCanciones: number,
        img: string
	}
}

const PlaylistAlbumCard: React.FC<PlaylistAlbumCardProps>  = ({objCard}) => {
	return (
		<div className={styles.playlistAlbumCard}>
 			<img className={styles.playlistAlbumCard_img} src={objCard.img} alt="" />
			<h5 className={styles.playlistAlbumCard_name}>{objCard.name}</h5>
			<span className={styles.playlistAlbumCard_details}>{objCard.type} <span className={styles.playlistAlbumCard_details_separation}>•</span> {objCard.owner}</span>
 		</div>
	);
};

export default PlaylistAlbumCard;
