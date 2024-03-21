// "use client";
import React, { useEffect, useState } from 'react';
import styles from './UserInfo.module.scss';
import { getDataUserEndPoint } from '@/services';
import { adapterUser } from '@/adapters';
import { User } from '@/models';
import { DATA_DESCR_USER_CARD } from '@/constants';

const UserInfo: React.FC  = () => {

	const [objUser, setObjUser] = useState<User>()

	useEffect( ()=>{

		const getInfoAndAdapter = async() =>{
			const accessToken:string | null = localStorage.getItem("access_token");
			const userdataJson = await getDataUserEndPoint(accessToken);
			const userOjb = adapterUser(userdataJson);
			setObjUser(userOjb);
		} 
		getInfoAndAdapter();
	},[])


	return (
		<a tabIndex={0} data-descr={DATA_DESCR_USER_CARD} className={styles.userInfo} href={objUser?.getUrlToPerfil} target='_blank'>
 			<span className={styles.userInfo_nameUser}>{objUser?.getdisplayName}</span>
			<img className={styles.userInfo_imgUser} src={objUser?.getPhotoUrl} />
 		</a>
	);
};

export default UserInfo;
