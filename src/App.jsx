import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './Component/Auth/PrivateRoute';
import OpenRoute from './Component/Auth/OpenRoute';
import ResetPassword from './pages/ResetPassword';
import GetStarted from './pages/GetStarted';
import Navbar from './pages/common/Navbar';
import { useSelector } from 'react-redux';
import { useState } from 'react';

function App() {
  const {user} = useSelector((state) => state.profile);
  const isLoggedIn = user==null? true: false;

  return (
    <div className='w-screen min-h-screen bg-richblack-900 flex flex-col text-white'>

      <div className='pb-[70px]'>
        
        <Navbar getstarted={isLoggedIn}></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<div>home</div>}></Route>
        <Route path='/user-auth' element={<GetStarted ></GetStarted>}></Route>


        <Route path='/home' element={<Home></Home>}></Route>

        <Route path='/resetPassword' element={<OpenRoute><ResetPassword /></OpenRoute>} />


        <Route path='/dashboard' element={<PrivateRoute><Dashboard /></PrivateRoute>}>
          {/* // all child routers under dashboard

              <Route path="dashboard/my-profile" element={<MyProfile />} />
              <Route path="dashboard/settings" element={<Setting />} />

                {user?.accountType === ACCOUNT_TYPE.STUDENT && (
                  <>
                    <Route path="dashboard/cart" element={<Cart />} />
                    <Route
                      path="dashboard/enrolled-courses"
                      element={<EnrollledCourses />}
                    />
                    <Route
                      path="dashboard/purchase-history"
                      element={<PurchaseHistory />}
                    />
                  </>
                )}

                {user?.accountType === ACCOUNT_TYPE.INSTRUCTOR && (
                  <>
                    <Route path="dashboard/add-course" element={<AddCourse />} />
                    <Route path="dashboard/my-courses" element={<MyCourses />} />
                    <Route
                      path="dashboard/edit-course/:courseId"
                      element={<EditCourse />}
                    />
                    <Route
                      path="dashboard/instructor"
                      element={<InstructorDashboard />}
                    />
                  </>
                )}
                {user?.accountType === ACCOUNT_TYPE.ADMIN && (
                  <>
                    <Route path="dashboard/admin-panel" element={<AdminPannel />} />
                  </>
                )} 
          */}
        </Route>

        <Route path='*' element={<h1>Page Not Found 404</h1>}></Route>
      </Routes>


    </div>
  )
}

export default App;
