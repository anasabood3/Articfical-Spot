
import './index.css'
import React from 'react';
import Navibar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import NewArticle from './pages/Article/NewArticle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Feed from './pages/Feed/Feed';
import Login from './pages/Authentication/Login'
import Register from './pages/Authentication/Register'
import NotFound from './pages/NotFound';
import Dashboard from "./pages/Account/Dashboard"
import Settings from "./pages/Account/Settings"
import ReadingList from "./pages/Account/ReadingList"
import Notifications from "./pages/Account/Notifications"
import ArticleDetails from "./pages/Article/ArticleDetails"
import Logout from "./components/Account/Logout"
import AccountEdit from './pages/Account/AccountEdit';
import { Provider } from 'react-redux';
import  store  from './redux/store';
import Layout from './hocs/Layout';
import PasswordReset from './pages/Authentication/ResetPassword';
import ResetPassowordConfirm from './pages/Authentication/ResetPassowordConfirm';
import SignupForm from './components/Account/SignupForm';
import Activation from './components/Account/Activation';
import { Toaster } from 'react-hot-toast';
import CheckMail from './pages/Authentication/CheckMail';
import { CustomBrowserRouter } from './components/CustomBrowserRouter';
function App() {
  return (
    <Provider store={store}>
      <CustomBrowserRouter>
      <Layout>

      <Toaster  position="bottom-right" anim />
      <Navibar />
        <Routes>
         
          <Route exact path='/' element={<Feed />} />
          <Route path='/login' element={<Login />} />
          <Route path='/check-inbox' element={<CheckMail />} />
          <Route path='/register' element={<Register />} />
          <Route exact path='/activate/:uid/:token' element={<Activation/>} />
          <Route exact path='/reset-password' element={<PasswordReset/>} />
          <Route exact path='/password/reset/confirm/:uid/:token' element={<ResetPassowordConfirm/>} />
          
          <Route path='/logout' element={<Logout />} />

          <Route path='/new-article' element={<NewArticle />} />
          <Route path='/articles/:id' element={<ArticleDetails />} />


          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<AccountEdit />} />
          <Route path='/account' element={<AccountEdit />} />
          <Route path='/reading-list' element={<ReadingList />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='*' element={<NotFound />} />

          

        </Routes>
        <Footer />
        </Layout>
      </CustomBrowserRouter>



    </Provider>


  );
}

export default App;
