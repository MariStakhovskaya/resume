import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import './i18n';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes/roter';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <RouterProvider router={router} />,
);
