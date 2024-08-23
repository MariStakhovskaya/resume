import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import Error404 from '../components/Error404/Error404';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error404 />,
  },
]);
