import React, { useEffect, Suspense } from 'react'
import NavbarComponent from '../Components/NavbarComponent'
// import CardComponent from '../Components/CardComponent'
import CarouselComponent from '../Components/CarouselComponent'
import FooterComponent from '../Components/FooterComponent'
import { Row, Container, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getCards } from '../store/actions'

const CardComponent = React.lazy(() => import('../Components/CardComponent'))
export default function Home() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getCards('https://db.ygoprodeck.com/api/v7/cardinfo.php?&num=40&offset=40&sort=new'))
  }, [dispatch])
  const cards = useSelector(state => state.cards.cards)

  return (
    <>
      <NavbarComponent></NavbarComponent>
      <CarouselComponent></CarouselComponent>
      <hr className="border border-info w-75"></hr>
      <Container>
        <Row className="justify-content-center">
          <Suspense fallback={<div>
            <h1 className="text-center text-light d-flex align-items-center">
              <em> Loading </em> <Spinner animation="grow" variant="info" />
            </h1>
          </div>}>
            {
              cards.map((card) => {
                return <CardComponent card={card} key={card.id} />;
              })
            }
          </Suspense>
          {/* {cards.length > 0 ? (
            cards.map((card) => {
              return <CardComponent card={card} key={card.id} />;
            })
          ) : (
              <div>
                <h1 className="text-center text-light d-flex align-items-center">
                  <em> Loading </em> <Spinner animation="grow" variant="info" />
                </h1>
              </div>
            )} */}
        </Row>
      </Container>
      <FooterComponent></FooterComponent>
    </>
  )
}