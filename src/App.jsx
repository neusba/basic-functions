import { useState } from 'react'
import './App.css'
import { Task } from './Task'

export default function App() {
  return (
    <>
    <article className='app-board'>
      <h1>TASK LIST</h1>
      <header className='app-functions'>
        <button className='button-function'>
          <img src="../public/plus.png" alt="" />
        </button>
        <button className='button-function'>
          <strong>Clean list</strong>
        </button>
      </header>
      <main className='app-tasks'>
        <Task task='Clean room'/>
        <Task task='Do dishes'/>
        <Task task='Make bed'/>
        <Task task='Walk dog'/>
      </main>
    </article>
    </>
  )
}

