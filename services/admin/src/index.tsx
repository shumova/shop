import {createRoot} from 'react-dom/client';
import { App } from '@/components/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode, Suspense } from 'react';
import { About } from '@/pages/about';

const root = document.getElementById('root');

if (!root) {
	throw new Error('Root not found')
}

const container = createRoot(root);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
		children: [
      {
        path: "/about",
        element: <Suspense fallback='Loading...'><About/></Suspense>,
      }
    ],
  },
])

container.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
