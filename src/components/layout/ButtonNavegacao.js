import { Container, Row, Button, Col, Stack } from 'react-bootstrap';

function ButtonNavegacao(props) {
  const previousPage = (e) => {
    if (props.photo.prev_page !== undefined) {
      props.setRemoveLoading(false)
      e.preventDefault()
      props.setURL(props.photo.prev_page)
    }
  }

  const nextPage = (e) => {
    props.setRemoveLoading(false)
    e.preventDefault()
    props.setURL(props.photo.next_page)
  }

  return (
    <>
      <Container className="pt-5 pb-5">
        <Row>
          <Col md="12">
            <Stack direction="horizontal">
              <Button onClick={previousPage}>Anterior</Button>
              <Button className="ms-auto" onClick={nextPage}>Próximo</Button>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default ButtonNavegacao