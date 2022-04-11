import React, { useEffect } from "react"
import Sidebar from "./components/Sidebar"
import Editor from "./components/Editor"
import Split from "react-split"
import { nanoid } from "nanoid"

export default function App() {
  const [notes, setNotes] = React.useState(
    () => JSON.parse(localStorage.getItem("notes")) || []
  )
  const [currentNoteId, setCurrentNoteId] = React.useState(
    (notes[0] && notes[0].id) || ""
  )

  function createNewNote() {
    const newNote = {
      id: nanoid(),
      body: "# Type your markdown note's title here"
    }
    setNotes(prevNotes => [newNote, ...prevNotes])
    setCurrentNoteId(newNote.id)
  }

  // обновить текст изменённой заметки и поставить её первой в массиве заметок.
  function updateNote(text) {
    setNotes(oldNotes => {
      let notesWithChangedNote = oldNotes.map(oldNote => {
        if (oldNote.id === currentNoteId) {
          return { ...oldNote, body: text }
        } else {
          return oldNote
        }
      })
      const changedNote = notesWithChangedNote.find(note => note.id === currentNoteId)
      const notesWithoutChangedNote = notesWithChangedNote.filter(note => note.id !== currentNoteId)
      return [changedNote, ...notesWithoutChangedNote]
    })
  }

  function deleteNote(event, id) {
    event.stopPropagation()
    setNotes(oldNotes => oldNotes.filter(note => note.id !== id))
  }

  function findCurrentNote() {
    return notes.find(note => {
      return note.id === currentNoteId
    }) || notes[0]
  }

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  return (
    <main>
      {notes.length > 0 ?
          <Split
            sizes={[30, 70]}
            direction="horizontal"
            className="split"
          >
            <Sidebar
              notes={notes}
              currentNote={findCurrentNote()}
              setCurrentNoteId={setCurrentNoteId}
              newNote={createNewNote}
              deleteNote={deleteNote}
            />
            {
              currentNoteId &&
              notes.length > 0 &&
              <Editor
                currentNote={findCurrentNote()}
                updateNote={updateNote}
              />
            }
          </Split>
          :
          <div className="no-notes">
            <h1>You have no notes</h1>
            <button
              className="first-note"
              onClick={createNewNote}
            >
              Create one now
            </button>
          </div>
      }
    </main>
  )
}
