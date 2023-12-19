import {createBrowserRouter} from 'react-router-dom';
import {App} from '@/components/App/App';
import {Suspense} from 'react';
import {Shop} from '@/pages/Shop';
import {shopRoutes} from '@packages/shared/src/routes/shop';

const routes = [
    {
        path: shopRoutes.main,
        element: <App />,
        children: [
            {
                path: shopRoutes.main,
                element: <Suspense fallback={'Loading...'}><Shop /></Suspense>
            }
        ]
    },
]

export const router = createBrowserRouter(routes);

export default routes;