import * as React from 'react';
import View from '../view/View';
import { StyledEngineProvider } from '@mui/material/styles';
import './App.css';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <div className="App">
        <View />
      </div>
    </StyledEngineProvider>
  );
};

export default App;
