// "use client";
// import React, { useEffect, useState } from 'react';
import styles from './UserInfo.module.scss';
import { getDataUserEndPoint } from '@/services';
import { adapterUser } from '@/adapters';
import { User, userEndpointModel } from '@/models';
import { DATA_DESCR_USER_CARD } from '@/constants';
// import useAppContext from '../../hooks/useAppContext';
import { useQueryFetch } from '../../hooks';

const UserInfo: React.FC  = () => {

	// const [objUser, setObjUser] = useState<User>();
	// const {setInfoInContext} = useAppContext();
	const queryGetSavedPlaylist = useQueryFetch<userEndpointModel>(["getDataUser"], getDataUserEndPoint)


	if(queryGetSavedPlaylist.isError){
		console.log(queryGetSavedPlaylist.error)
	}

	if(queryGetSavedPlaylist.isLoading){
		return (
			<div>...........###</div>
		)
	}

	const objUser: User | null = queryGetSavedPlaylist.data ? adapterUser(queryGetSavedPlaylist.data) : null;

	// setInfoInContext({
	// 	userName: userOjb.getdisplayName,
	// })
	// useEffect(()=>{
	// 	if(queryGetSavedPlaylist.data){
	// 		const userOjb: User = adapterUser(queryGetSavedPlaylist.data);
	// 		// setObjUser(userOjb);
	// 		setInfoInContext({
	// 			userName: userOjb.getdisplayName,
	// 		})
	// 	}

	// },[queryGetSavedPlaylist.data])


	// useEffect( ()=>{

	// 	const getInfoAndAdapter = async() =>{
	// 		try {
	// 			const resUserdata = await getDataUserEndPoint();
	// 			if(!resUserdata.ok) throw new Error("not ok: error al obtener usar data" + resUserdata.status);
	// 			const jsonUserData:userEndpointModel =  await resUserdata.json()
	// 			const userOjb = adapterUser(jsonUserData);
	// 			setObjUser(userOjb);
	// 			setInfoInContext({
	// 				userName: userOjb.getdisplayName,
	// 			})
	// 		} catch (error) {
				
	// 		}

	// 	} 
	// 	getInfoAndAdapter();
	// },[])


	return (
		<>
			{objUser && (
				<a tabIndex={0} data-descr={DATA_DESCR_USER_CARD} className={styles.userInfo} href={objUser?.getUrlToPerfil} target='_blank'>
					<span className={styles.userInfo_nameUser}>{objUser?.getdisplayName}</span>
					<img className={styles.userInfo_imgUser} src={objUser?.getPhotoUrl} />
				</a>
			)}
		</>
	);
};

export default UserInfo;
