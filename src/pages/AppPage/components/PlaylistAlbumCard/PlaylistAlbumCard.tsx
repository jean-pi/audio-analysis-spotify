// "use client";
import { useEffect, useState } from 'react';
import React from 'react';
import styles from './PlaylistAlbumCard.module.scss';
import { getSavedPlaylist } from '@/services';
import { playlistUserEndpointModel, userAlbumEndpointModel} from '@/models';
import { adapterCardAlbumPlaylist } from '@/adapters';
import { AlbumPlaylistCardEntitie } from "@/models";
import { getSavedAlbum } from '@/services/getDataEndpoint/getSavedAlbum';




const PlaylistAlbumCard: React.FC  = () => {

	const [arrPlaylistAlbumByUser, setArrPlylistAlbumByUser] = useState<AlbumPlaylistCardEntitie[]>([])


	useEffect(()=>{

		const accessToken = localStorage.getItem("access_token")

		const getAndAdapterPlaylistAlbumUser = async() =>{
			const jsonSavedPlaylistByUser: playlistUserEndpointModel = await getSavedPlaylist(accessToken);
			const jsonSavedAlbumsByUser: userAlbumEndpointModel = await getSavedAlbum(accessToken);

			const playlistList: AlbumPlaylistCardEntitie[] = adapterCardAlbumPlaylist(jsonSavedPlaylistByUser,jsonSavedAlbumsByUser);

			setArrPlylistAlbumByUser(playlistList);
		}

		getAndAdapterPlaylistAlbumUser()

	},[])

	

	return (

		<>
			{arrPlaylistAlbumByUser.map(iten => (
				<div key={iten.getId()} className={styles.playlistAlbumCard}>
					<img className={styles.playlistAlbumCard_img} src={iten.getPhotoUrl()} alt="" />
					<h5 className={styles.playlistAlbumCard_name}>{iten.getName()}</h5>
					<p className={styles.playlistAlbumCard_details}>{iten.getType()} <span className={styles.playlistAlbumCard_details_separation}>•</span> {iten.getOwner()}</p>
				</div>
			))}
		</>

	)





};

export default PlaylistAlbumCard;
