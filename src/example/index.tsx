import * as React from 'react';
import * as ReactDOM from 'react-dom';
import JohnnyMnemonic from '../lib/index'

export default ReactDOM.render(
  <JohnnyMnemonic
    suggestionFunction={() => Promise.resolve(['it', 'works'])}
    onChange={() => console.log('johnnymnemonic')}
  />,
  document.getElementById('app')
);