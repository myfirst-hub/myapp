import React from 'react';
// import logo from './logo.svg';
import html2canvas from 'html2canvas';
import canvas2image from "canvas2image-2";
import { jsPDF } from 'jspdf';
import { Table, Divider, Tag } from 'antd'
import 'antd/dist/antd.css';
import './App.css';

function ImgExport() {

  const downloadCanvasIamge = (canvas, name) => {
    // 使用toDataURL方法将图像转换被base64编码的URL字符串
    var url = canvas.toDataURL('image/png')
    // 生成一个a元素
    var a = document.createElement('a')
    // 创建一个单击事件
    var event = new MouseEvent('click')
    
    // 将a的download属性设置为我们想要下载的图片名称，若name不存在则使用‘下载图片名称’作为默认名称
    a.download = name || '下载图片名称'
    // 将生成的URL设置为a.href属性
    a.href = url
    
    // 触发a的单击事件
    a.dispatchEvent(event)
}

  const copyCanvas = () => {
    console.log('document.body...............', document.body)
    // console.log('document.querySelector...............', document.getElementById('textId'))
    html2canvas(document.getElementById('table')).then((canvas) => {
      console.log('canvas....................', canvas.height)
      console.log('Canvas2Image....................', canvas2image)
      // var url = canvas.toDataURL('image/png')
      // console.log('url..............', url)
      // downloadCanvasIamge(canvas, '')
      const img = canvas2image.convertToPNG(canvas, 500, 300);
      console.log('img....................', img)
      document.getElementById('acceptRender').appendChild(img)
    }).catch(err => {
      console.log('err................',  err)
    })
  }

  const downloadImg = () => {
    html2canvas(document.getElementById('table')).then((canvas) => {
      downloadCanvasIamge(canvas, 'canvas')
    }).catch(err => {
      console.log('err................',  err)
    })
  }

  const downloadPdf = () => {
    html2canvas(document.getElementById('app')).then((canvas) => {
      const doc = new jsPDF('landscape', 'pt', 'a4')
      const url = canvas.toDataURL('image/png')
      const contentWidth = canvas.width;
      const contentHeight = canvas.height;
      const imgWidth = 595.28;
      const imgHeight = 592.28/contentWidth * contentHeight;
      doc.addImage(url, 'png', 0, 0, imgWidth, imgHeight)
      doc.save('a4.pdf')
      alert('下载成功')
    }).catch(err => {
      console.log('err................',  err)
    })
  }

  const dataSource = [
    {
      key: '1',
      name: '胡彦斌',
      age: 32,
      address: '西湖区湖底公园1号',
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      address: '西湖区湖底公园1号',
    },
  ];
  
  const columns = [
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return (
    <div className="App" id="app">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div id='textId' style={{ backgroundColor: 'black', margin: '10px', height: '300px', width: '500px', textAlign: 'center', lineHeight: '300px', border: '1px solid red' }}>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
        <div id='textId' style={{ backgroundColor: 'red', margin: '10px', height: '300px', width: '500px', textAlign: 'center', lineHeight: '300px', border: '1px solid red' }}>
          <p>
            Edit112 <code>src/App.js</code> and save to reload.
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
        <div id="table">
          <Table dataSource={dataSource} columns={columns} />;
        </div>
        <button onClick={copyCanvas}>复制</button>
        <button onClick={downloadImg}>下载</button>
        <button onClick={downloadPdf}>下载PDF</button>
        <div id='acceptRender' style={{ backgroundColor: 'black' }}>
          <a></a>
        </div>
      </header>
    </div>
  );
}

export default ImgExport;
