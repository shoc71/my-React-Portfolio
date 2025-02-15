import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import ContactMePage from './components/contactMePage.jsx'
import ErrorPage from './components/errorPage.jsx'
import HomePage from './components/homePage.jsx'
import PortfolioPage from './components/portfolioPage.jsx'
import ResumePage from './components/resumePage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: '/contact-me',
        element: <ContactMePage />
      },
      {
        path: '/portfolio',
        element: <PortfolioPage />
      },
      {
        path: '/resume',
        element: <ResumePage />
      }
    ]
  }
])

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  )
}