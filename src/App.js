import React from 'react';
import { Tldraw } from '@tldraw/tldraw'
import '@tldraw/tldraw/tldraw.css'

import './App.css';
const store = {
  roomId: 'example6',
}
function App() {
  return (
    <div className="App">
      <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw />
      </div>
      <div style={{ position: 'fixed', inset: 0 }}>
        <Tldraw />
      </div>
    </div>
  );
}

export default App;
