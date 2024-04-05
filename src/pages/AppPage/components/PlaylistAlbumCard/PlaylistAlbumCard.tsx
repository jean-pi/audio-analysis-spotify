import React, { useEffect } from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist, getSavedAlbum } from '@/services';
import { userAlbumItens, playlistUserIten} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";
import { useInfiniteQueryFetch } from '../../hooks';
import useAppContext from '../../hooks/useAppContext';
import { useInView } from 'react-intersection-observer';

const PlaylistAlbumCard: React.FC  = () => {

    const {infoInContext} = useAppContext();
	const savedSongsObj = new AlbumPlaylistCardEntitie("Saved Songs", "https://misc.scdn.co/liked-songs/liked-songs-300.png", "Playlist", 1000, infoInContext?.userName, "0") 
	const {ref, inView} = useInView();


	const fetchAlbumsUser = useInfiniteQueryFetch<userAlbumItens[]>(["albums"], getSavedAlbum);
	const fetchPlaylistUser = useInfiniteQueryFetch<playlistUserIten[]>(["playlist"], getSavedPlaylist)

	useEffect(()=>{
		if(inView && (fetchAlbumsUser.hasNextPage || fetchPlaylistUser.hasNextPage)){
			fetchAlbumsUser.fetchNextPage();
			fetchPlaylistUser.fetchNextPage();
		}
	},[inView, fetchAlbumsUser.hasNextPage, fetchPlaylistUser.hasNextPage])



	if(fetchAlbumsUser.isError || fetchPlaylistUser.isError){
		console.log(fetchAlbumsUser.error, fetchPlaylistUser.error);
	}

	if(fetchAlbumsUser.isLoading || fetchPlaylistUser.isLoading){
		const htmlLoading = (
			<div className={styles.albumPlaylistCardLoading}>
				<div className={styles.albumPlaylistCardLoading_img}></div>
				<div className={styles.albumPlaylistCardLoading_name}>######</div>
				<div className={styles.albumPlaylistCardLoading_details}>####</div>
			</div>
		)
		const htmlLoadingArr: JSX.Element[] = [];
		for (let i = 0; i < 30; i++) {
			htmlLoadingArr.push(htmlLoading);
		}
		return (
			<>
				{htmlLoadingArr.map((item, index) =>(
					<div key={index}>{item}</div>
				))}
			</>
		)
	}


	if(fetchAlbumsUser.status === "success" && fetchPlaylistUser.status === "success"){
		console.log(fetchPlaylistUser.data)
		const objUserPlaylistAlbumUser: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(fetchPlaylistUser.data.pages[0] , fetchAlbumsUser.data.pages[0], savedSongsObj)
		return (
			<>
				{objUserPlaylistAlbumUser && objUserPlaylistAlbumUser.map((iten, index) => {
					if(objUserPlaylistAlbumUser.length - 3 === index){
						return(
							<div key={iten.getId()} ref={ref} className={styles.playlistAlbumCard}>
								<img className={styles.playlistAlbumCard_img} src={iten.getPhotoUrl()} alt="" />
								<h5 className={styles.playlistAlbumCard_name}>{iten.getName()}</h5>
								<p className={styles.playlistAlbumCard_details}>{iten.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.getOwner()}</p>
							</div>
						) 
					}  
					return(
						<div key={iten.getId()} className={styles.playlistAlbumCard}>
							<img className={styles.playlistAlbumCard_img} src={iten.getPhotoUrl()} alt="" />
							<h5 className={styles.playlistAlbumCard_name}>{iten.getName()}</h5>
							<p className={styles.playlistAlbumCard_details}>{iten.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.getOwner()}</p>
						</div>
					) 
				})}
			</>
		)
	}





};

export default PlaylistAlbumCard;
