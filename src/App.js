import React, {useState} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import './App.css'
import HomeRoute from './components/HomeRoute'
import RegisterRoute from './components/RegisterRoute'
import NotFound from './components/NotFound'
import MetupContext from './context/metupContext'

// These are the lists used in the application. You can move them to any component needed.
const topicsList = [
  {
    id: 'ARTS_AND_CULTURE',
    displayText: 'Arts and Culture',
  },
  {
    id: 'CAREER_AND_BUSINESS',
    displayText: 'Career and Business',
  },
  {
    id: 'EDUCATION_AND_LEARNING',
    displayText: 'Education and Learning',
  },
  {
    id: 'FASHION_AND_BEAUTY',
    displayText: 'Fashion and Learning',
  },
  {
    id: 'GAMES',
    displayText: 'Games',
  },
]

// Replace your code here
const App = () => {
  const {isRegisterd} = React.useContext(MetupContext)
  console.log(isRegisterd, 'app')
  const [name, setName] = useState('')
  const [topic, setTopic] = useState('')
  const [Registerd, setisRegisterd] = useState(isRegisterd)

  const changeIsRegistered = (registeredName, registeredTopic) => {
    setName(registeredName)
    setTopic(registeredTopic)
    setisRegisterd(true)
  }

  return (
    <MetupContext.Provider
      value={{
        topic,
        name,
        isRegisterd: Registerd,
        topicsList,
        changeIsRegistered,
      }}
    >
      <Switch>
        <Route exact path="/" component={HomeRoute} />
        <Route exact path="/register" component={RegisterRoute} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect to="/not-found" />
      </Switch>
    </MetupContext.Provider>
  )
}

export default App
