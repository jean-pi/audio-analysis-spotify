// "use client";
import React, { useEffect, useRef } from 'react';
import styles from './HeadSongsView.module.scss';
import { zustandBookStore } from '@/store';



const HeadSongsView: React.FC = () => {

	const {albumPlaylistSelected} = zustandBookStore();
	const mainTextRef = useRef<HTMLHeadingElement>(null);


    useEffect(() => {
        // Calcula el tamaño óptimo del texto basado en la longitud del texto del título
		if (mainTextRef.current) {
			const mainText = mainTextRef.current;
			const textLength = mainText.innerText.length;
		
			// Obtén el tamaño de la pantalla
			const screenWidth = window.innerWidth;
		
			// Define los breakpoints y los tamaños de fuente base
			let baseFontSize;
			if (screenWidth < 576) {
				// Pantallas pequeñas (por ejemplo, teléfonos)
				baseFontSize = 24;
			} else if (screenWidth < 768) {
				// Pantallas medianas (por ejemplo, tablets)
				baseFontSize = 32;
			} else if (screenWidth < 992) {
				// Pantallas grandes (por ejemplo, laptops)
				baseFontSize = 40;
			} else {
				// Pantallas extra grandes (por ejemplo, monitores de escritorio grandes)
				baseFontSize = 48;
			}
		
			// Ajusta la fórmula para incluir el tamaño de la pantalla
			const fontSize = Math.max(10, baseFontSize - textLength * 0.5);
		
			mainText.style.fontSize = `${fontSize}px`;
		}
		
		
    }, [albumPlaylistSelected?.name]);


	return (
		<div className={styles.container}>
			<img className={styles.container_img} src={albumPlaylistSelected?.photoUrl} alt="" />
			<div className={styles.container_detailsTextContainer}>
				<h3 ref={mainTextRef} className={styles.container_detailsTextContainer_mainText}>{albumPlaylistSelected?.name}</h3>
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
