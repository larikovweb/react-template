import { createRoot } from 'react-dom/client';
import Application from './app/Application';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = createRoot(rootElement);
  root.render(<Application />);
}
