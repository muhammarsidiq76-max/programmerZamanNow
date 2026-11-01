import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
    const [token, setToken] = useState(null);

    // Cek apakah ada token di localStorage saat web pertama kali dibuka
    useEffect(() => {
        const savedToken = localStorage.getItem('auth_token');
        if (savedToken) {
            setToken(savedToken);
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('auth_token');
        setToken(null);
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'system-ui' }}>
            <h1>📚 Aplikasi Perpustakaan Sanctum</h1>
            
            {/* Tampilkan Dashboard jika token ada, jika tidak tampilkan Login */}
            {token ? (
                <Dashboard logout={handleLogout} />
            ) : (
                <Login setToken={setToken} />
            )}
        </div>
    );
}

export default App;