import { faAngleDown, faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect } from 'react'
import { Navbar } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { themeChange } from 'theme-change'

export const HeaderLinks = () => {
  return (
    <>
      <Link className="font-semibold" to={'/items'}>
        Items
      </Link>
      <Link className="font-semibold" to={'/players'}>
        Players
      </Link>
      <Link className="font-semibold" to={'/opportunities'}>
        Opportunities
      </Link>
    </>
  )
}

type Props = {
  navigationShown: boolean
}

export default function Header({ navigationShown }: Props) {
  const themes = [
    'dark',
    'light',
    'cupcake',
    'bumblebee',
    'emerald',
    'corporate',
    'synthwave',
    'retro',
    'cyberpunk',
    'valentine',
    'halloween',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'pastel',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'dracula',
    'cmyk',
    'autumn',
    'business',
    'acid',
    'lemonade',
    'night',
    'coffee',
    'winter',
    'dim',
    'nord',
    'sunset'
  ]

  useEffect(() => {
    themeChange(false)
  }, [])

  return (
    <Navbar className="justify-between bg-base-300 shadow-lg">
      <div>
        <Link className="btn btn-ghost text-lg font-bold" to={'/'}>
          Crafters Castia Utils Frontend
        </Link>
        {navigationShown && (
          <div className="ml-1 hidden gap-3 md:flex">
            <HeaderLinks />
          </div>
        )}
      </div>
      <div className="flex gap-2">
        <div className="dropdown dropdown-end dropdown-bottom">
          <div className="btn flex" role="button" tabIndex={0}>
            Theme
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="dropdown-content z-10 mt-2 flex max-h-96 w-64 flex-col gap-2 overflow-y-scroll rounded-box bg-base-200 px-4 py-2 shadow-2xl">
            {themes.map((theme) => (
              <button
                key={theme}
                className="btn btn-sm flex justify-between bg-base-100"
                data-key="theme"
                data-set-theme={theme}
                data-theme={theme}
              >
                {theme}
                <div className="flex gap-2">
                  <div className="h-4 w-2 rounded-box bg-primary"></div>
                  <div className="h-4 w-2 rounded-box bg-secondary"></div>
                  <div className="h-4 w-2 rounded-box bg-accent"></div>
                  <div className="h-4 w-2 rounded-box bg-neutral"></div>
                </div>
              </button>
            ))}
          </div>
        </div>
        {navigationShown && (
          <div className="dropdown dropdown-end dropdown-bottom md:hidden">
            <div className="btn flex" role="button" tabIndex={0}>
              <FontAwesomeIcon icon={faBars} />
            </div>
            <div className="dropdown-content z-10 mt-2 flex w-64 flex-col gap-2 rounded-box bg-base-200 px-4 py-2 shadow-2xl">
              <HeaderLinks />
            </div>
          </div>
        )}
      </div>
    </Navbar>
  )
}
