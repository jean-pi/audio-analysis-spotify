// "use client";
import React from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist } from '@/services';
import { playlistUserEndpointModel, AlbumsUserEndpointModel} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";
import { getSavedAlbum } from '@/services/getDataEndpoint/getSavedAlbum';
import { useQueryFetch } from '../../hooks';
import useAppContext from '../../hooks/useAppContext';




const PlaylistAlbumCard: React.FC  = () => {

	// const [arrPlaylistAlbumByUser, setArrPlylistAlbumByUser] = useState<AlbumPlaylistCardEntitie[]>([])
	const queryGetSavedAlbum = useQueryFetch<AlbumsUserEndpointModel>(["getSavedAlbum"], getSavedAlbum);
	const queryGetSavedPlaylist = useQueryFetch<playlistUserEndpointModel>(["getSavedPlaylist"],getSavedPlaylist)
    const {infoInContext} = useAppContext();
	const savedSongsObj = new AlbumPlaylistCardEntitie("Saved Songs", "https://misc.scdn.co/liked-songs/liked-songs-300.png", "Playlist", 1000, infoInContext?.userName, "0") 
	
	if(queryGetSavedAlbum.isError || queryGetSavedPlaylist.isError){
		console.log(queryGetSavedAlbum.error, queryGetSavedPlaylist.error);
	}

	// useEffect(() => {
    //     if (queryGetSavedAlbum.data && queryGetSavedPlaylist.data) {
    //         const jsonSavedPlaylist: playlistUserEndpointModel = queryGetSavedPlaylist.data;
    //         const jsonSavedAlbums: AlbumsUserEndpointModel = queryGetSavedAlbum.data;

		
    //         const objsPlaylistAlbum: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(jsonSavedPlaylist, jsonSavedAlbums, savedSongs);
    //         setArrPlylistAlbumByUser(objsPlaylistAlbum);
    //     }
    // }, [queryGetSavedAlbum.data, queryGetSavedPlaylist.data]);


	if(queryGetSavedAlbum.isLoading || queryGetSavedPlaylist.isLoading){
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


	const objUser: AlbumPlaylistCardEntitie[] | null = 
	!queryGetSavedPlaylist.isLoading && queryGetSavedPlaylist.data && !queryGetSavedAlbum.isLoading && queryGetSavedAlbum.data
	? adapterCardAlbumPlaylist(queryGetSavedPlaylist.data, queryGetSavedAlbum.data, savedSongsObj) 
	: null;




	if(queryGetSavedAlbum.data && queryGetSavedPlaylist.data){
		return (
			<>
				{objUser && objUser.map(iten => (
					<div key={iten.getId()} className={styles.playlistAlbumCard}>
						<img className={styles.playlistAlbumCard_img} src={iten.getPhotoUrl()} alt="" />
						<h5 className={styles.playlistAlbumCard_name}>{iten.getName()}</h5>
						<p className={styles.playlistAlbumCard_details}>{iten.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.getOwner()}</p>
					</div>
				))}

			</>
		)
	}






};

export default PlaylistAlbumCard;
