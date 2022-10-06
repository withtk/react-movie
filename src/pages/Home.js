import { Link } from 'react-router-dom';
import './home.css';

function Home() {
    return (
        <div className="first">
            <h1>home start</h1>
            <Link to="movieList" >Movie List로 이동</Link> <br/> <br/>
            <Link to="main" >Main</Link> <br/> <br/>
            <Link to="menu2" >menu2</Link><br/> <br/>
            <Link to="TTT" >TTTest</Link><br/> <br/>
            <Link to="login" >Login</Link><br/> <br/>
            <Link to="testInput" >testInput</Link><br/> <br/>
        </div>
    )
}

export default Home;
