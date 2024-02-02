import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStyles } from '../styled/GlobalStyles';
import { Layout } from './Layout';
import { publicRoutes } from './routes';

const Application: FC = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <RouteSelect />
      </BrowserRouter>
    </>
  );
};

const RouteSelect: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} element={component} />
        ))}
      </Route>
    </Routes>
  );
};

export default Application;
