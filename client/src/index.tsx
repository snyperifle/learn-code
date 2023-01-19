import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import {
  // createBrowserRouter,
  BrowserRouter,
  Route,
  // RouterProvider,
  Routes,
} from 'react-router-dom';
// import ErrorPage from './components/ErrorPage/ErrorPage';
import Home from './features/Home/Home';
import Weather from './features/Weather/Weather';
import BurgerMenu from './components/BurgerMenu/BurgerMenu';
import { StyledLink, WhiteDivider } from './styled-components/styles';
//======================================================
const container = document.getElementById('root')!;
const root = createRoot(container);
//======================================================
root.render(
  <React.StrictMode>
    <Provider store={store} >

      <BrowserRouter>
        <div id="outer-container">
          <BurgerMenu 
            pageWrapId={ "page-wrap" } 
            outerContainerId={'outer-container'}
            width={ '20%' }
          >
            <StyledLink to={'/'} >Home</StyledLink>
            <WhiteDivider />
            <StyledLink to={'/Weather'} >Weather</StyledLink>
            <WhiteDivider />
          </BurgerMenu>
          <div id='page-wrap'>
            <Routes>
              <Route path='/' element={ <Home /> }/>
              <Route path='/Weather' element={ <Weather /> }/>
            </Routes>
          </div>
        </div>
        </BrowserRouter>
        
    </Provider>
  </React.StrictMode>
);
//======================================================
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
