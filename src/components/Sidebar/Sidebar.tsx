import React from 'react';
import { useNavigate } from 'react-router-dom';

const Sidebar: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="h-screen w-64 bg-gray-100 text-white absolute z-5 flex flex-col">
            <nav className="flex flex-col p-5">
                <button 
                    className="text-left text-gray-300 hover:bg-gray-700 py-2"
                    onClick={() => navigate('/rota1')}
                >
                    Rota 1
                </button>
                <button 
                    className="text-left text-gray-300 hover:bg-gray-700 py-2 mt-2"
                    onClick={() => navigate('/rota2')}
                >
                    Rota 2
                </button>
            </nav>
        </div>
    );
};

export default Sidebar;
