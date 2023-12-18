import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.tsx'
import './styles/main.scss'
import PokemonProvider from './context/PokemonContext.tsx'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)

root.render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
)
