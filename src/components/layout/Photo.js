import { Col, Modal } from 'react-bootstrap';
import { BsFillPersonFill, BsDownload } from 'react-icons/bs'
import { useState } from 'react';

import styles from './Photo.module.css'

function Photo(item, key) {
  const [xlShow, setXlShow] = useState(false);
  const [photographerShow, setPhotographerShow] = useState(false);

  const onMouseEnterHandler = (e) => {
    setPhotographerShow(true)
  }

  const onMouseLeaveHandler = (e) => {
    setPhotographerShow(false)
  }

  return (
    <>
      <Col xs={12} sm={6} md={4} xl={3} className={`${styles.item}  mb-3`}>
        <img onClick={() => setXlShow(true)} width="100%" height="100%" alt="" src={item.item.src.portrait} key={key} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} />
        <div className={`${styles.photographer} ${photographerShow ? styles.photographerShow : styles.photographerHide}`} >
          <a target="_blank" href={item.item.photographer_url} className={styles.a} rel="noreferrer">
            <BsFillPersonFill className={styles.iconProfile} />
            {item.item.photographer}
          </a>
          <a href={`https://www.pexels.com/photo/${item.item.id}/download`} className={styles.a}>
            <BsDownload className={styles.iconDownload} />
          </a>
        </div>
      </Col>
      <Modal
        size="xl"
        show={xlShow}
        onHide={() => setXlShow(false)}
      >
        <Modal.Header closeButton />
        <Modal.Body><img width="100%" src={item.item.src.original} alt="" /></Modal.Body>
      </Modal>
    </>
  )
}

export default Photo