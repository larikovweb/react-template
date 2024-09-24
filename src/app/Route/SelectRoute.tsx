import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from '@components/route';
import { Pages } from '@pages/index';
import { Layout } from '../Layout';
import { privateRoutes, publicRoutes } from './routes';

export const SelectRoute: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
        <Route element={<ProtectedRoute />}>
          {privateRoutes.map(({ path, component }) => (
            <Route key={path} path={path} element={component} />
          ))}
        </Route>
      </Route>
      <Route path="/404" element={<Pages.NotFound />} />
      <Route path="*" element={<Pages.NotFound />} />
    </Routes>
  );
};
