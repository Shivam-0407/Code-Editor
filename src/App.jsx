import './App.css'
import CodeEditor from './components/CodeEditor'
import { useWindowDimensions } from './Hooks/windowDimensions'

function App() {
  const {width} = useWindowDimensions();
  return (
    <>
    <div className="App">
      <div className="title_container">
        <h1 className="title">Code-Editor</h1>
        <p className="desc">A simple no-frills code editor with syntax highlighting.</p>
        </div>
      {width<=600?<Alert />:<CodeEditor language="jsx" />}
    </div>
    </>
  )
}

function Alert(){
  return (
    <h2 className='alert'>Mobile View Not Available</h2>
  )
}

export default App
