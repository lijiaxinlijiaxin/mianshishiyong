import React, { useState } from 'react'

export default function TestTest() {
  const [type, setType] = useState('none')
  function ttest() {
    setType('block')
  }
  function confirm() {
    setType('none')
  }
  return (
    <div>
      <button onClick={() => ttest()}>点击打开对话框</button>
      <div style={{ display: type, position: 'fixed', top: ' 50%', left: ' 50%', marginLeft: '-100px', marginTop: '-100px', width: 200, height: 200, background: 'blue', color: 'white' }}>
        <p>确定删除吗？</p>
        <button onClick={() => confirm()}>确定</button>
        <button onClick={() => confirm()}>取消</button>
      </div>
    </div>
  )
}
