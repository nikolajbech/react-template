import { Outlet } from 'react-router-dom'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { colors } from 'res/colors'

export const App = () => {
  const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
  }
  const theme = extendTheme({ config, colors })

  return (
    <div className='App'>
      <ChakraProvider theme={theme}>
        <Outlet />
      </ChakraProvider>
    </div>
  )
}
