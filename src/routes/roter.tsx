import { createBrowserRouter } from 'react-router-dom';

import { App } from '../App';
import Error404 from '../components/Error404/Error404';
import { Main } from '../components/Main/Main';
import { Project } from '../components/Portfolio/Project/Project';

export const router = createBrowserRouter([
  {
    path: '/resume/',
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: 'portfolio/:id',
        element: <Project />,
      },
    ],
  },
]);
