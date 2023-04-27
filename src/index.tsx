import { createRoot } from 'react-dom/client';
import { hydrate } from 'react-dom';
import Application from './app/Application';
import { createContext } from 'react';
import UserStore from './store/UserStore';

export const Context = createContext<{ user: UserStore }>({
  user: new UserStore(),
});

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  if (rootElement.hasChildNodes()) {
    hydrate(<Application />, rootElement);
  } else {
    root.render(
      <Context.Provider
        value={{
          user: new UserStore(),
        }}>
        <Application />
      </Context.Provider>,
    );
  }
}
