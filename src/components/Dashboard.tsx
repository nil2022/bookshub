import { useNavigate } from 'react-router-dom';
import authService from './server/auth.appwrite';

function Dashboard() {
    const navigate = useNavigate();

    const logout = async () => {
        await authService.logout();
        alert('Logout successful');
        console.log('Logout successful');
        localStorage.removeItem('authStatus');
        navigate('/login');
    };
    return (
        <div>
            <h1 className="text-4xl font-bold  pt-36">Dashboard</h1>
            <button onClick={() => logout()}>Logout</button>
        </div>
    );
}

export default Dashboard;
