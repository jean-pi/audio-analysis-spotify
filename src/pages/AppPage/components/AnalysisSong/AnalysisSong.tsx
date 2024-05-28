"use client";
import React from 'react';
import styles from './AnalysisSong.module.scss';
import { ANALYSIS_AUDIO } from '@/constants';


export interface AnalysisSongProps {
	// types...
}

const AnalysisSong: React.FC<AnalysisSongProps>  = ({}) => {
	return (
		<div className={styles.analysisSong}>
			<img className={styles.analysisSong_img} src="https://www.lahiguera.net/musicalia/artistas/lana_del_rey/disco/8313/lana_del_rey_lust_for_life-portada.jpg" alt="" />
			<h5 className={styles.analysisSong_SongName}>Summer Bummer (ft. A$AP Rocky, Playboi Carti)</h5>
			<h6 className={styles.analysisSong_artistName}>Lana Del Rey</h6>
				<img className={styles.analysisSong_iconSpotify} src={ANALYSIS_AUDIO.spotifyWhiteIcon} alt="" />
			<div className={styles.analysisSong_analysisFeturesContainer}>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p>{ANALYSIS_AUDIO.Tonality}</p>
					<p>C#/D</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p>{ANALYSIS_AUDIO.Duration}</p>
					<p>2:14</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p>{ANALYSIS_AUDIO.Released}</p>
					<p>26/05/2004</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p>{ANALYSIS_AUDIO.Volume}</p>
					<p>30Db</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p>{ANALYSIS_AUDIO.Mode}</p>
					<p>Major</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p>{ANALYSIS_AUDIO.Rhythm}</p>
					<p>114bpm</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p>{ANALYSIS_AUDIO.Tempo}</p>
					<p>3/4</p>
				</div>
			</div>
			<span className={styles.analysisSong_shareContainer}><img className={styles.analysisSong_shareContainer_icon} src="" alt="" />Share</span>
 		</div>
	);
};

export default AnalysisSong;
