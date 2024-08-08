import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>hello</div>,
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}
