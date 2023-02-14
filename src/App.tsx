import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {ClientPage} from "./pages/ClientPage/ClientPage";
import {UserPage} from "./pages/UserPage/UserPage";


function App() {

  return (
      <div className={'w-full h-full'}>
          <BrowserRouter>
              <Routes>
                  <Route path={'/'} element={<ClientPage/>}/>
                  <Route path={'/user'} element={<UserPage/>}/>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App
