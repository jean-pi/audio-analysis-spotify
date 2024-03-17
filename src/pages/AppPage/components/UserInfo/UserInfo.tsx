"use client";
import React, { useEffect, useState } from 'react';
import styles from './UserInfo.module.scss';
import { getDataUserEndPoint } from '@/services';
import { adapterUser } from '@/adapters';
import { User } from '@/models';


const UserInfo: React.FC  = () => {

	const [objUser, setObjUser] = useState<User>()

	useEffect( ()=>{
		const accessToken:string | null = localStorage.getItem("access_token");
		console.log(accessToken);
		getDataUserEndPoint(accessToken)
		.then(response =>{
			const userOjb =  adapterUser(response)
			setObjUser(userOjb)
		})

	},[])


	return (
		<a tabIndex={0} className={styles.userInfo} href={objUser?._urlToPerfil} target='_blank'>
 			<span className={styles.userInfo_nameUser}>{objUser?.getdisplayName}</span>
			<img className={styles.userInfo_imgUser} src={objUser?.getPhotoUrl} />
 		</a>
	);
};

export default UserInfo;
