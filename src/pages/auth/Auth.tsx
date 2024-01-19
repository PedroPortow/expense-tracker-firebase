import React from 'react';
import { AuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider, githubProvider} from "../../config/firebase-config.js"
import { Navigate, useNavigate } from 'react-router-dom';
import { useGetUserInfo } from "../../hooks/useGetUserInfo.js";
import googleIcon from "../../assets/google.png"
import githubIcon from "../../assets/github.png"

interface Props {
}

const Auth: React.FC<Props> = ({ }) => {
	const navigate = useNavigate();
	const { isAuthenticated } = useGetUserInfo();

	const login = async (type: string) => {
    let provider;

    if (type === "github") {
        provider = githubProvider;
    } else if (type === "google") {
        provider = googleProvider; // Certifique-se de que essa variável está definida corretamente
    } 

    try {
        const res = await signInWithPopup(auth, provider as AuthProvider);
        let authData = {
            userId: res.user.uid,
            name: res.user.displayName,
            profilePic: res.user.photoURL,
            isAuthenticated: true,
        };

        console.log(res);
        localStorage.setItem("auth", JSON.stringify(authData));
        navigate("/expense-tracker");
    } catch (error) {
        // Tratar possíveis erros aqui
        console.error("Erro na autenticação", error);
    }
}

	if (isAuthenticated) {
    return <Navigate to="/expense-tracker" />;
  }
  return (
    <div className='h-screen bg-gray-50 flex items-center justify-center '>
			<div className='border flex flex-col gap-y-4 p-6  w-1/4 bg-white rounded-lg shadow items-center'>
				<h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl '>Expense Tracker</h1>
				<button className='button container border h-fit p-2 rounded-md px-16 flex flex-row gap-x-1 items-center text-nowrap justify-center text-neutral-800' onClick={() => login("google")}>
					<img src={googleIcon} className='w-[32px] h-[32px]' />
					Entrar com Google
				</button>
				<button className='button container border h-fit p-2 rounded-md px-16 flex flex-row gap-x-2 items-center text-nowrap justify-center text-neutral-800' onClick={() => login("github")}>
					<img src={githubIcon} className='w-[22px] h-[22px]' />
					Entrar com Github
				</button>
			</div>
    </div> 
  );
};

export default Auth;