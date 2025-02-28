import './App.css';
import Header from './Header';

function App() {
    return (
        <>
            <title>Home</title>
            <meta name='description' content='Home' />
            <meta name='author' content='John Smith' />
            <meta name='keywords' content='Home' />
            <meta name='description' content='Home' />

            <meta property='og:title' content='Home' />
            <meta property='og:description' content='Home' />
            <meta property='og:image' content='Home' />
            <meta property='og:url' content='http://localhost:3000/' />
            <Header></Header>
            <h1>Hello</h1>
        </>
    );
}

export default App;
