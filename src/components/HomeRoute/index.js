import React from 'react'
import {Link} from 'react-router-dom'
import MetupContext from '../../context/metupContext'
import Header from '../Header'
import {
  HomeCard,
  HomeWidthCard,
  RegisterCard,
  RegisterHeading,
  RegisterDescription,
  Button,
  UserWelcomeCard,
  NameHeading,
  WelcomeDescription,
  Img,
} from './styled'

const HomeRoute = () => {
  const {isRegisterd, name, topic} = React.useContext(MetupContext)
  console.log('Home', isRegisterd)

  const renderRegisterCard = () => (
    <RegisterCard>
      <RegisterHeading>Welcome to Meetup</RegisterHeading>
      <RegisterDescription>Please register for the topic</RegisterDescription>
      <Link to="/register">
        <Button type="button">Register</Button>
      </Link>
    </RegisterCard>
  )

  const renderWelcomUserCard = () => (
    <UserWelcomeCard>
      <NameHeading>Hello {name}</NameHeading>
      <WelcomeDescription>Welcome to {topic}</WelcomeDescription>
    </UserWelcomeCard>
  )

  return (
    <>
      <Header />
      <HomeCard>
        <HomeWidthCard>
          {isRegisterd ? renderWelcomUserCard() : renderRegisterCard()}
          <Img
            src="https://assets.ccbp.in/frontend/react-js/meetup/meetup-img.png"
            alt="meetup"
          />
        </HomeWidthCard>
      </HomeCard>
    </>
  )
}
export default HomeRoute
