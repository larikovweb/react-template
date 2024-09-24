import { Pages } from '@pages/index';
import { RoutePrefix } from '@utils/routes';

export type RouteType = {
  path: string;
  component: JSX.Element;
};

export const publicRoutes: RouteType[] = [
  { path: RoutePrefix.MAIN, component: <Pages.Main /> },

  //...
  { path: RoutePrefix.NOT_FOUND, component: <Pages.NotFound /> },
  { path: '*', component: <Pages.NotFound /> },
];

export const privateRoutes: RouteType[] = [];
