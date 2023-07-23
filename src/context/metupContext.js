import React from 'react'

const MetupContext = React.createContext({
  isRegisterd: false,
  name: '',
  topic: '',

  changeIsRegistered: () => {},
})

export default MetupContext
