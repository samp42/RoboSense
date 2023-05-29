import { lazy } from 'solid-js';
import type { RouteDefinition } from '@solidjs/router';

import Home from './pages/Home';

export const routes: RouteDefinition[] = [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/settings',
      component: lazy(() => import('./pages/Settings'))
    },
    {
      path: '**',
      component: lazy(() => import('./pages/Error')),
    },
  ];
  