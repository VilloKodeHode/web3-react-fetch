

import { FaGithub } from "react-icons/fa";
import './App.css'
import { BossCards } from './components/Bosses/BossCards'

function App() {
  fetchData();

  return (
    <>
    {/* <FaGithub /> */}
      <BossCards/>
    </>
  )
}

export default App
