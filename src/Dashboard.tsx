import Header from './Header';

function Dashboard() {
    return (
        <div>
            <title>Dashboard</title>
            <meta name='description' content='Dashboard' />
            <meta name='author' content='John Smith' />
            <meta name='keywords' content='Dashboard' />
            <meta name='description' content='Dashboard' />

            <meta property='og:title' content='Dashboard' />
            <meta property='og:description' content='Dashboard' />
            <meta property='og:image' content='Dashboard' />
            <meta property='og:url' content='http://localhost:3000/' />
            <Header></Header>
            <h1>DashBoard</h1>
        </div>
    );
}

export default Dashboard;
