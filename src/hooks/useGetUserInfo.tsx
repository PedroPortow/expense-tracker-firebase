interface UserInfo {
  name: string;
  profilePic: string;
  userId: string;
  isAuthenticated: boolean;
}

export const useGetUserInfo = () => {
  const userInfo = JSON.parse(localStorage.getItem("auth") || '{}') as UserInfo;

  const { name = '', profilePic = '', userId = '', isAuthenticated = false } = userInfo;

  return { name, profilePic, userId, isAuthenticated };
};
