import React from "react";
import 'normalize.css';

import { Provider, defaultTheme } from '@adobe/react-spectrum';

import { TimerPage } from '../focus/timer/pages';

const App = () => (
  <Provider theme={defaultTheme} colorScheme="light">
    <TimerPage />
  </Provider>
);

export default App;
