import React from 'react';
import styles from './SomethingWrong.module.scss';
import { publicRoutes, SOMETHING_WRONG_TEXT } from '@/constants';
import { useNavigate } from 'react-router-dom';


const SomethingWrong: React.FC = ({}) => {

	const navigate = useNavigate();

	const logOut = () =>{
		window.localStorage.clear();
		navigate(publicRoutes.LANDING);
	}
	return (
		<div className={styles.somethingwrong}>
			<button className={styles.button} onClick={logOut} >
				<h4 className={styles.button_h4}>{SOMETHING_WRONG_TEXT}</h4>
			</button>
 		</div>
	);
};

export default SomethingWrong;
