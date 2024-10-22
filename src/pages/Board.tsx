import React, { useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header, { HeaderLinks } from 'components/Header'

export default function Board() {
  const navigate = useNavigate()

  useEffect(() => {
    if (localStorage.getItem('token') == null) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  const logout = useCallback(() => {
    localStorage.removeItem('token')
    navigate('/login', { replace: true })
  }, [navigate])

  return (
    <>
      <Header navigationShown />
      <div className="prose mb-12 px-4 pt-6">
        <h1>Welcome!</h1>
        <h2>There isn&apos;t much to do here...</h2>
        <div className="flex flex-col">
          <HeaderLinks />
        </div>

        <button className="btn btn-primary mt-4" onClick={logout}>
          Use another token
        </button>
      </div>
    </>
  )
}
