import { faAngleRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Header from 'components/Header'
import { requestApi } from 'helper/api'
import { createRef, useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const input = createRef<HTMLInputElement>()
  const [error, setError] = useState<string>()
  const navigate = useNavigate()

  const handleSubmit = useCallback(async () => {
    setError(undefined)
    localStorage.setItem('token', input.current!.value)
    const response = await requestApi('validate', 'GET')
    if (!response.success) {
      setError(response.data?.error)
      return
    }
    navigate('/')
  }, [input, navigate])

  return (
    <>
      <Header navigationShown={false} />
      <div className="mt-16 flex items-center justify-center px-4 sm:px-8">
        <div className="prose flex w-full flex-col items-center rounded-sm bg-base-200 px-4 py-2 shadow-2xl md:w-2/3 xl:w-1/2">
          <h2>This site is not public. (for now)</h2>
          <h3>You need to specify your API Token</h3>
          {error && (
            <div className="mb-2 flex w-full items-center gap-2 rounded-md bg-accent px-4 py-1">
              <FontAwesomeIcon icon={faClose} className="text-accent-content" />
              <span className="text-accent-content">{error}</span>
            </div>
          )}
          <div className="flex w-full gap-2">
            <input
              className="input input-ghost w-full bg-base-100"
              type="text"
              ref={input}
              placeholder="Your API Token goes here"
            />
            <button className="btn btn-ghost" onClick={handleSubmit}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
