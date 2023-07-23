import {BgCard, WidthCard, Img, Heading, Description} from './styled'

const NotFoundRoute = () => (
  <BgCard>
    <WidthCard>
      <Img
        src="https://assets.ccbp.in/frontend/react-js/meetup/not-found-img.png"
        alt="not found"
      />
      <Heading>Page Not Found</Heading>
      <Description>
        we are sorry, the page you requested could not be found
      </Description>
    </WidthCard>
  </BgCard>
)
export default NotFoundRoute
