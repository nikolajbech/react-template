import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

import { App } from './App'
import { Home } from 'pages'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<App />}
        >
          <Route
            index
            element={<Home />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
