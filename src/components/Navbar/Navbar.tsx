import React, { useState } from 'react';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';

interface NavbarProps {
    
}

const Navbar: React.FC<NavbarProps> = ({  }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
	const { profilePic } = useGetUserInfo();

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    return (
        <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
            <div className="font-bold">Logo</div>
            <div className="relative">
                <img
                    src={profilePic}
                    alt="User"
                    className="h-10 w-10 rounded-full cursor-pointer"
                    onClick={toggleDropdown}
                />
                {dropdownOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Settings</a>
                        <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</a>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
