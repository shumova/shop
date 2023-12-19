import {createBrowserRouter} from 'react-router-dom';
import {App} from '@/components/App/App';
import {Suspense} from 'react';
import {LazyAbout} from '@/pages/about/About.lazy';
import {adminRoutes} from '@packages/shared/src/routes/admin';

const routes = [
    {
        path: adminRoutes.main,
        element: <App />,
        children: [
            {
                path: adminRoutes.main,
                element:  <Suspense fallback={'Loading...'}><LazyAbout /></Suspense>
            },
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;