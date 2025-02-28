import Header from './Header';
import { Helmet } from 'react-helmet';

function Dashboard() {
    return (
        <>
            <Helmet></Helmet>

            <title>Dashboard</title>
            <meta name='description' content='Dashboard' />
            <meta name='author' content='John Smith' />
            <meta name='keywords' content='Dashboard' />
            <meta name='description' content='Dashboard' />

            <meta property='og:title' content='Dashboard' />
            <meta property='og:description' content='Dashboard' />
            <meta property='og:image' content='Dashboard' />
            <meta property='og:url' content='http://localhost:3000/dashboard' />
            <Header></Header>
            <h1>DashBoard</h1>
        </>
    );
}

export default Dashboard;
