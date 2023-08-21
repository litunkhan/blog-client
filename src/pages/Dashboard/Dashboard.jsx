


const Dashboard = () => {
    const user = localStorage.getItem('user')
    const userdetail = JSON.parse(user)
    return (
        <div className="max-w-[230px] mx-auto shadow-lg mt-5">
             <p>UserName:{userdetail?.username}</p>
            <p>Email: {userdetail?.email}</p>
        </div>
    );
};

export default Dashboard;