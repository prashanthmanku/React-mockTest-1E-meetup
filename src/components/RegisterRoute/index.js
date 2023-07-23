import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import MetupContext from '../../context/metupContext'
import {
  RegisterCard,
  WidthCard,
  Img,
  LoginForm,
  Heading,
  InputCard,
  Label,
  Input,
  Select,
  Button,
  ErrorMsg,
} from './styled'
import Header from '../Header'

const RegisterRoute = props => {
  const {history} = props
  const {topicsList, changeIsRegistered, isRegisterd} = React.useContext(
    MetupContext,
  )
  console.log(topicsList)

  const [activeTopic, setactiveTopic] = useState(topicsList[0].id)
  const [name, setName] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [activeTopicDisplayText, setactiveTopicDisplayText] = useState(
    topicsList[0].displayText,
  )

  const onChangeName = e => {
    setName(e.target.value)
  }

  const onChangeTopic = e => {
    setactiveTopic(e.target.value)
    setactiveTopicDisplayText(
      e.target.options[e.target.selectedIndex].textContent,
    )
  }

  const onSubmitForm = e => {
    e.preventDefault()
    if (name.trim() !== '') {
      changeIsRegistered(name, activeTopicDisplayText)
      history.replace('/')
    } else {
      setErrorMsg('Please enter your name')
    }
  }
  console.log(isRegisterd, 'Register')
  if (isRegisterd) {
    console.log(isRegisterd, 'Re,redirect')
    return <Redirect to="/" />
  }

  return (
    <>
      <Header />
      <RegisterCard>
        <WidthCard>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/meetup/website-register-img.png"
            alt="website register"
          />
          <LoginForm onSubmit={onSubmitForm}>
            <Heading>Let us join</Heading>
            <InputCard>
              <Label htmlFor="name">NAME</Label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={name}
                onChange={onChangeName}
              />
            </InputCard>
            <InputCard>
              <Label htmlFor="select">TOPICS</Label>
              <Select id="select" value={activeTopic} onChange={onChangeTopic}>
                {topicsList.map(each => (
                  <option value={each.id} key={each.id}>
                    {each.displayText}
                  </option>
                ))}
              </Select>
            </InputCard>
            <Button type="submit">Register Now</Button>
            {errorMsg.length !== 0 && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </LoginForm>
        </WidthCard>
      </RegisterCard>
    </>
  )
}

export default RegisterRoute
