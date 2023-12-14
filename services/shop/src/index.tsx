import {createRoot} from 'react-dom/client';
import { App } from '@/components/App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { StrictMode, Suspense } from 'react';
import { Shop } from '@/pages/shop';

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
        path: "/shop",
        element: <Suspense fallback='Loading...'><Shop/></Suspense>,
      }
    ],
  },
])

container.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
