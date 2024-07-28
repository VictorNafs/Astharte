/* eslint-disable */

import { CNavItem, CNavTitle } from '@coreui/react'
import './_nav.css'

const _nav = [
  {
    component: CNavItem,
    name: 'Accueil',
    to: '/accueil',
    badge: {
      color: 'info',
    },
  },
  {
    component: CNavTitle,
    name: 'Présentation',
    className: 'underline-title',
  },
  // {
  //   component: CNavItem,
  //   name: 'À Venir',
  //   to: '/presentation/catalogues',
  // },
  {
    component: CNavItem,
    name: 'Catalogue',
    to: '/presentation/catalogues',
  },
  {
    component: CNavItem,
    name: 'À Propos',
    to: '/presentation/a_propos',
  },

  {
    component: CNavTitle,
    name: 'Productions séries',
    className: 'underline-title',
  },
  // {
  //   component: CNavGroup,
  //   name: 'Productions',
  //   to: 'base#/',
  //   icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Wara',
  //       to: '/base/accordion',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Les Engagés',
  //       to: '/base/breadcrumbs',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Contact',
  //   to: '/charts',
  //   icon: <CIcon icon={cilInbox} customClassName="nav-icon" />,
  // },
  {
    component: CNavItem,
    name: 'Vestiaires',
    to: '/vestiaires',
  },
  {
    component: CNavItem,
    name: 'Vestiaires Libérés',
    to: '/vestiairesLiberes',
  },
  {
    component: CNavItem,
    name: 'Wara',
    to: '/wara',
  },
  {
    component: CNavItem,
    name: 'Les Engagés',
    to: '/les_engages',
  },
  {
    component: CNavItem,
    name: 'Les Saisons Meurtrières',
    to: '/les_saisons_meurtrieres',
  },

  {
    component: CNavTitle,
    name: 'Productions unitaires',
    className: 'underline-title',
  },

  {
    component: CNavItem,
    name: 'Comme Un Air',
    to: '/comme_un_air',
  },

  {
    component: CNavItem,
    name: 'En Plein Coeur',
    to: '/en_plein_coeur',
  },

  {
    component: CNavItem,
    name: 'Parole Contre Parole',
    to: '/parole_contre_parole',
  },

  {
    component: CNavItem,
    name: 'Virage',
    to: '/virage',
  },
]

export default _nav
