import React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

import { colors } from 'res/colors'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    }
  }
}
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({ config, colors })

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <div>
        <Story />
      </div>
    </ChakraProvider>
  )
]
