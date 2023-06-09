import { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  // TODO: load data from the server to have dynamic isAdmin, isInstructor, isStudent based on data
  const isAdmin = true;
  const isInstructor = true;
  const isStudent = true;

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        <Outlet />
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <div className="menu p-4 w-80 h-full bg-base-200 text-base-content flex-row-reverse">
          <div className="ms-0 me-20">
            <div className="p-5">
              <div className="flex justify-center items-center">
                <div className="text-center">
                  <div className="flex justify-center items-center">
                    <img className="rounded-full w-20 h-20" src={user?.photoURL} alt="User Profile" />
                  </div>
                  <h1 className="text-xl font-bold mt-4">{user?.displayName}</h1>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-6">
                <FaHome className="text-xl" />
                <h2 className="text-lg font-semibold">Dashboard</h2>
              </div>
            </div>

            <div>
              <ul>
                {isStudent && (
                  <>
                    <li>
                      <Link to="/dashboard/selected-classes">My Selected Classes</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/enrolled-classes">My Enrolled Classes</Link>
                    </li>
                  </>
                )}
                {isInstructor && (
                  <>
                    <li>
                      <Link to="/dashboard/add-class">Add a Class</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/my-classes">My Classes</Link>
                    </li>
                  </>
                )}
                {isAdmin && (
                  <>
                    <li>
                      <Link to="/dashboard/manage-classes">Manage Classes</Link>
                    </li>
                    <li>
                      <Link to="/dashboard/manage-users">Manage Users</Link>
                    </li>
                  </>
                )}

                <div className="divider">OR</div>

                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/classes">Classes</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
