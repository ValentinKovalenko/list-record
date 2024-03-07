import './App.scss'
import AddRecord from './components/screens/addRecord/add-record'
import ListRecord from './components/screens/listRecord/list-record'

function App():JSX.Element {
  return (
    <div>
      <AddRecord/>
      <ListRecord/>
    </div>
  )
}

export default App
