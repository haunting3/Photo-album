import Home from './components/pages/Home'
import Pesquisar from './components/pages/Pesquisar'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App(props) {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                baseURL={props.baseURL}
                photo={props.photo}
                setPhoto={props.setPhoto}
                removeLoading={props.removeLoading}
                setRemoveLoading={props.setRemoveLoading}
                URL={props.URL}
                setURL={props.setURL}
              />
            }
          />
          <Route
            path="/pesquisar"
            element={
              <Pesquisar
                baseURL={props.baseURL}
                photo={props.photo}
                setPhoto={props.setPhoto}
                removeLoading={props.removeLoading}
                setRemoveLoading={props.setRemoveLoading}
                URL={props.URL}
                setURL={props.setURL}
              />
            }
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}


export default App;
