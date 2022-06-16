
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
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navibar />
        <Routes>
          <Route path='/' element={<Feed />} />

          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/logout' element={<Logout />} />

          <Route path='/new-article' element={<NewArticle />} />
          <Route path='articles/:id' element={<ArticleDetails />} />


          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/reading-list' element={<ReadingList />} />
          <Route path='/notifications' element={<Notifications />} />
          <Route path='*' element={<NotFound />} />

        </Routes>
        <Footer />
      </Router>



    </Provider>


  );
}

export default App;
