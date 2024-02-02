import { CHAT_ROUTE, MAIN_ROUTE, NOT_FOUND_ROUTE } from '../utils/index';
import { Pages } from '../pages';

export interface RouteType {
  path: string;
  component: JSX.Element;
}

export const publicRoutes: RouteType[] = [
  { path: MAIN_ROUTE, component: <Pages.Main /> },
  { path: NOT_FOUND_ROUTE, component: <Pages.NotFound /> },
];

export const privateRoutes: RouteType[] = [
  {
    path: CHAT_ROUTE,
    component: <Pages.Chat />,
  },
];
