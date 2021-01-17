import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './components/App';
import store from './store'
import { doArchiveStory } from './actions/archive'
import { getReadableStories } from './selectors/story'
import './index.css'

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App
        stories={getReadableStories(store.getState())}
        onArchive={id => store.dispatch(doArchiveStory(id))}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);