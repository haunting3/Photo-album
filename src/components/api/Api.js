import { useState, useEffect } from "react"

import App from "../../App"

function Api() {
  const key = 'YOUR API HERE'
  const baseURL = 'https://api.pexels.com/v1/'

  const [photo, setPhoto] = useState([])
  const [removeLoading, setRemoveLoading] = useState(false)

  const [URL, setURL] = useState([`${baseURL}curated?page=1&per_page=12`])

  useEffect(() => {
    fetch(`${URL}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': key,
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setPhoto(data)
        setRemoveLoading(true)
      })
  }, [URL])

  return (

    <div>
      <App
        baseURL={baseURL}
        photo={photo}
        setPhoto={setPhoto}
        removeLoading={removeLoading}
        setRemoveLoading={setRemoveLoading}
        URL={URL}
        setURL={setURL}
      />
    </div>
  )
}

export default Api