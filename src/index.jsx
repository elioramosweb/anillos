import './style.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Canvas } from '@react-three/fiber'
import Scene from './Scene'
import { OrbitControls } from '@react-three/drei'


const root = ReactDOM.createRoot(document.querySelector('#root'))

root.render(
  <React.StrictMode>
  <Canvas
  camera={{ position: [0, 0, 2] }}
  gl={{ antialias: true, alpha: false }}
  onCreated={({ gl }) => {
    gl.setClearColor('black') // ← fondo negro
  }}
>
  <ambientLight />
  <Scene />
  <OrbitControls />
</Canvas>
  </React.StrictMode>
)
