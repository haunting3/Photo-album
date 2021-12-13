import { Container, Row, Col } from 'react-bootstrap'

import Photo from '../layout/Photo'
import ButtonNavegacao from '../layout/ButtonNavegacao'
import Loading from '../layout/Loading'

function Home(props) {
  return (
    <section id="Home">
      <Container className="pt-5 pb-1">
        <Row>
          <Col xs={12}>
            <h3>Fotos aleatórias.</h3>
          </Col>
        </Row>
      </Container>
      <main id="album">
        <Container fluid>
          <Row>
            {props.removeLoading && props.photo.photos.map((photos) => (
              <Photo
                item={photos}
                key={photos.id}
              />
            ))}
            {!props.removeLoading && <Loading />}
          </Row>
        </Container>
      </main>
      <ButtonNavegacao
        photo={props.photo}
        setPhoto={props.setPhoto}
        setRemoveLoading={props.setRemoveLoading}
        URL={props.URL}
        setURL={props.setURL}
      />
    </section>
  )
}

export default Home