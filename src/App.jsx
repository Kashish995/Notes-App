import './App.css'
import Navbar from '../components/Navbar'
import { useState } from 'react'

function App() {

  const [notes, setnotes] = useState([])
  const [currentNote, setcurrentNote] = useState({title: "", desc: ""})

  const handleSubmit = (e) => {
      e.preventDefault()
  }

  const handleChange = (e)=>{
    setcurrentNote({ ...currentNote, [e.target.name]: e.target.value})
  }
  return (
    <>
      <Navbar/>
      <main>
        <h1> Create Your Note</h1>
        <form action="" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title
          </label>
          <input value={currentNote.title} onChange={handleChange} type="text" name="title" id="title"/>
        </div>
        <div>
          <label htmlFor="desc">
            Description
          </label>
          <textarea name="desc" id="desc">{currentNote.desc}</textarea>
        </div>
        <button type='submit'>Create Note</button>
        </form>
      </main>
      <section>
        <h2>Your Notes</h2>
        {notes && notes.map(note => {
          return <div>{notes.title}</div>
        })}
      </section>
    </>
  )
}

export default App
