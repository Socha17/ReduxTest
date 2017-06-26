import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'reac-redux';
import { createStore } from 'redux';
import PlayerReducer from './src/reducers/players'
import Scoreboard from './src/containers/Scoreboard';

render(
  <Scoreboard/>,
  document.getElementById('root')

)
