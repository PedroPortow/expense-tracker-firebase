interface UserInfo {
  name: string;
  profilePhoto: string;
  userId: string;
  isAuth: boolean;
}

export const useGetUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("auth") || '{}') as UserInfo;

  const { name = '', profilePhoto = '', userId = '', isAuth = false } = userInfo;

  return { name, profilePhoto, userId, isAuth };
};
