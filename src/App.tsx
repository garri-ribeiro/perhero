import React from "react";
import 'normalize.css';

import { Provider, defaultTheme, Content } from '@adobe/react-spectrum';

const App = () => (
  <Provider theme={defaultTheme}>
    <Content>
        Hello perhero with react-spectrum
    </Content>
  </Provider>
);

export default App;
