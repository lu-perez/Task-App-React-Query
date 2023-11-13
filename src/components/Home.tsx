import { Link, Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Tasks</Link>
          </li>
          <li>
            <Link to="/add">Add Task</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Home;
