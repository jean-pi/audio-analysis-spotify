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
			{/* <img className={styles.analysisSong_img} src="https://i.scdn.co/image/ab67616d0000b273e2e352d89826aef6dbd5ff8f" alt="" /> */}

			<div className={styles.analysisSong_songNameArtistContainer}>
				<h5 className={styles.analysisSong_songNameArtistContainer_songName}>Summer Bummer (ft. A$AP Rocky, Playboi Carti)</h5>
				<h6 className={styles.analysisSong_songNameArtistContainer_artistName}>Lana Del Rey</h6>
			</div>
				<img className={styles.analysisSong_iconSpotify} src={ANALYSIS_AUDIO.spotifyWhiteIcon} alt="" />
			<div className={styles.analysisSong_analysisFeturesContainer}>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p className={styles.analysisSong_analysisFeturesContainer_item_feature}    >{ANALYSIS_AUDIO.Tonality}</p>
					<p className={styles.analysisSong_analysisFeturesContainer_item_featureData}>C#/D</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p className={styles.analysisSong_analysisFeturesContainer_item_feature}    >{ANALYSIS_AUDIO.Duration}</p>
					<p className={styles.analysisSong_analysisFeturesContainer_item_featureData}>2:14</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p className={styles.analysisSong_analysisFeturesContainer_item_feature}    >{ANALYSIS_AUDIO.Released}</p>
					<p className={styles.analysisSong_analysisFeturesContainer_item_featureData}>26/05/2004</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p className={styles.analysisSong_analysisFeturesContainer_item_feature}    >{ANALYSIS_AUDIO.Volume}</p>
					<p className={styles.analysisSong_analysisFeturesContainer_item_featureData}>30Db</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p className={styles.analysisSong_analysisFeturesContainer_item_feature}    >{ANALYSIS_AUDIO.Mode}</p>
					<p className={styles.analysisSong_analysisFeturesContainer_item_featureData}>Major</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p className={styles.analysisSong_analysisFeturesContainer_item_feature}    >{ANALYSIS_AUDIO.Rhythm}</p>
					<p className={styles.analysisSong_analysisFeturesContainer_item_featureData}>114bpm</p>
				</div>
				<div className={styles.analysisSong_analysisFeturesContainer_item}>
					<p className={styles.analysisSong_analysisFeturesContainer_item_feature}    >{ANALYSIS_AUDIO.Tempo}</p>
					<p className={styles.analysisSong_analysisFeturesContainer_item_featureData}>3/4</p>
				</div>
			</div>
			<span className={styles.analysisSong_shareContainer}><img className={styles.analysisSong_shareContainer_icon} src={ANALYSIS_AUDIO.shareIcon} alt="" />Share</span>
 		</div>
	);
};

export default AnalysisSong;
