import { useState } from 'react';
import { Container, Row, Button, Form, Col, InputGroup, FormGroup, FormControl, } from 'react-bootstrap';
import { BsSearch } from 'react-icons/bs';

import Photo from '../layout/Photo';
import Loading from '../layout/Loading';
import ButtonNavegacao from '../layout/ButtonNavegacao'

function Pesquisar(props) {
  const [search, setSearch] = useState(undefined)

  function submit(e) {
    if (e.target.search.value) {
      props.setRemoveLoading(false)
      e.preventDefault()
      props.setURL(`${props.baseURL}search?query=${e.target.search.value}&per_page=12`)
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  return (
    <section id="search">
      <Container className="pt-5 pb-5">
        <Form onSubmit={submit}>
          <FormGroup as={Col} xs={8} lg={6} className="mx-auto">
            <InputGroup>
              <FormControl
                type="text"
                name="search"
                placeholder="Search here.."
                value={search}
                onChange={handleChange}
              />
              <Button type="submit">
                <BsSearch />
              </Button>
            </InputGroup>
          </FormGroup>
        </Form>
      </Container>
      <main id="album">
        <Container fluid>
          <Row className="pb-3">
            <Col xs={12}>
              {search ? <h3>Fotos de {search}</h3> : null}
            </Col>
          </Row>
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

export default Pesquisar