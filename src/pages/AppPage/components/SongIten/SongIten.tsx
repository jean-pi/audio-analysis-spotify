"use client";
import React from 'react';
import styles from './SongIten.module.scss';


export type SongItenProps = {
 	numSong: number,
	img: string,
	nameSong: string,
	artist: string,
	album: string
}

const SongIten: React.FC<SongItenProps>  = ({numSong,img,nameSong,artist,album}) => {
	return (
		<div className={styles.container}>
			<div className={styles.container_numDiv}>
				{numSong}
			</div>
			<div className={styles.container_imgSongNameArtist}>
				<img className={styles.container_imgSongNameArtist_img} src={img} alt="" />
				<div className={styles.container_imgSongNameArtist_subContainerTotext}>
					<p className={styles.container_imgSongNameArtist_subContainerTotext_p}>{nameSong}</p>
					<p className={styles.container_imgSongNameArtist_subContainerTotext_p}>{artist}</p>
				</div>
			</div>
			<div className={styles.container_album}>
				{album}
			</div>
		</div>
	);
};

export default SongIten
