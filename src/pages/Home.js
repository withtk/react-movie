import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="first">
            <h1>home start</h1>
            <Link to="movieList" >Movie List로 이동</Link>
        </div>
    )
}


export default Home;
