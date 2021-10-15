import React from 'react';
// import logo from './logo.svg';
import html2canvas from 'html2canvas';
import canvas2image from "canvas2image-2";
import './App.css';

function App() {

  const copyCanvas = () => {
    console.log('document.body...............', document.body)
    // console.log('document.querySelector...............', document.getElementById('textId'))
    html2canvas(document.getElementById('textId')).then((canvas) => {
      console.log('canvas....................', canvas.height)
      console.log('Canvas2Image....................', canvas2image)
      const img = canvas2image.convertToPNG(canvas, 500, 300);
      console.log('img....................', img)
      document.getElementById('acceptRender').appendChild(img)
    }).catch(err => {
      console.log('err................',  err)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div id='textId' style={{ backgroundColor: 'black', margin: '10px', height: '300px', width: '500px', textAlign: 'center', lineHeight: '300px', border: '1px solid red' }}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div id='hrefId' style={{ margin: '10px', height: '300px', width: '400px', textAlign: 'center', lineHeight: '300px', border: '1px solid blue' }}>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </div>
        <button onClick={copyCanvas}>复制</button>
        <div id='acceptRender' style={{ backgroundColor: 'black' }}></div>
      </header>
    </div>
  );
}

export default App;
