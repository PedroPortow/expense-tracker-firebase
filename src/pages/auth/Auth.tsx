import React from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from "../../config/firebase-config.js"
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import googleIcon from "../../assets/google.png"

interface Props {
}

const Auth: React.FC<Props> = ({ }) => {
	const navigate = useNavigate();
	const { isAuth } = useGetUserInfo();

	const loginWithGoogle = async () => {
		const res = await signInWithPopup(auth, provider);
		console.log(res);
		const authData = {
			userId: res.user.uid,
			name: res.user.displayName,
			profilePic: res.user.photoURL,
			isAuthenticated: true,
		}

		localStorage.setItem("auth", JSON.stringify(authData))
		navigate("/expense-tracker")
	}

	if (isAuth) {
    return <Navigate to="/expense-tracker" />;
  }
  return (
    <div className='h-screen bg-gray-50 flex items-center justify-center '>
			<div className='border flex flex-col gap-y-4 p-6  w-1/4 bg-white rounded-lg shadow items-center'>
				<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>Expense Tracker</h1>
				<button className='button border h-fit p-2 rounded-md px-16 flex flex-row gap-x-1 items-center justify-center' onClick={loginWithGoogle}>
					<img src={googleIcon} className='w-[32px] h-[32px]' />
					Entrar com o Google
				</button>
			</div>
    </div> 
  );
};

export default Auth;