import { useState } from 'react'
import data from './data'
import Questions from './Questions'

const App = () => {
  const [questions, setQuestions] = useState(data)
  const [activeId, setActiveId] = useState(null)

  const setAccordianId = (id) => {
    const newActiveId = id === activeId ? null : id
    setActiveId(newActiveId)
  }

  return (
    <main>
      <Questions
        questions={questions}
        activeId={activeId}
        setAccordianId={setAccordianId}
      />
    </main>
  )
}
export default App
