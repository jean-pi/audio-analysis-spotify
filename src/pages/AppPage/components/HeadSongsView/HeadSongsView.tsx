"use client";
import React from 'react';
import styles from './HeadSongsView.module.scss';


export type HeadSongsViewProps = {
	imgUrl: string,
	name: string,
	type: string,
	by: string,
	numCaciones: number,
	duracion: string
}

const HeadSongsView: React.FC<HeadSongsViewProps>  = ({imgUrl,name, type,by,numCaciones,duracion}) => {
	return (
		<div className={styles.container}>
			<img className={styles.container_img} src={imgUrl} alt="" />
			<div className={styles.container_detailsTextContainer}>
				<h4 className={styles.container_detailsTextContainer_secondText}>
					{type} 
					<span className={styles.container_detailsTextContainer_secondText_pointSeparator}>•</span>  
					by {by}
					<span className={styles.container_detailsTextContainer_secondText_pointSeparator}>•</span>  
					{numCaciones} canciones , 
					{ duracion }
				</h4>
				<h3 className={styles.container_detailsTextContainer_mainText}>{name}</h3>
			</div>
		</div>
	);
};

export default HeadSongsView;
