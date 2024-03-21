// "use client";
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist } from '@/services';
import { playlistUserEndpointModel} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";




const PlaylistAlbumCard: React.FC  = () => {

	const [objUser, setObjUser] = useState<AlbumPlaylistCardEntitie[]>([])


	useEffect(()=>{

		const accessToken = localStorage.getItem("access_token")
		const getAndAdapterPlaylistAlbumUser = async() =>{
		const jsonSavedPlaylistByUser: playlistUserEndpointModel = await getSavedPlaylist(accessToken);
		const playlistList: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(jsonSavedPlaylistByUser);
		setObjUser(playlistList);
		}

		getAndAdapterPlaylistAlbumUser()

		console.log(objUser)
	},[])

	
	objUser?.forEach(iten => {
		return (
			<div className={styles.playlistAlbumCard}>
				 <img className={styles.playlistAlbumCard_img} src={iten.photoUrl} alt="" />
				<h5 className={styles.playlistAlbumCard_name}>{iten.name}</h5>
				<p className={styles.playlistAlbumCard_details}>{iten.type} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.owner}</p>
			 </div>
		);
	})

	return(
		<></>
	)


};

export default PlaylistAlbumCard;
