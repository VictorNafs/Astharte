import React from 'react'

const Accueil = React.lazy(() => import('./views/accueil/Accueil'))
const Catalogues = React.lazy(() => import('./views/presentation/catalogues/Catalogues'))
const A_Propos = React.lazy(() => import('./views/presentation/a_propos/A_Propos'))
const Wara_S1 = React.lazy(() => import('./views/wara/Wara_S1'))
const Wara_S2 = React.lazy(() => import('./views/wara/Wara_S2'))

const L_E_S1 = React.lazy(() => import('./views/les_engages/L_E_S1'))
const L_E_S2 = React.lazy(() => import('./views/les_engages/L_E_S2'))
const L_E_S3 = React.lazy(() => import('./views/les_engages/L_E_S3'))

const L_S_M_S1 = React.lazy(() => import('./views/les_saisons_meurtrieres/L_S_M_S1'))
const L_S_M_S2 = React.lazy(() => import('./views/les_saisons_meurtrieres/L_S_M_S2'))
const L_S_M_S3 = React.lazy(() => import('./views/les_saisons_meurtrieres/L_S_M_S3'))
const L_S_M_S4 = React.lazy(() => import('./views/les_saisons_meurtrieres/L_S_M_S4'))

// const BasePage = React.lazy(() => import('./views/base/BasePage'))

// Base
// const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
// const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
// const Cards = React.lazy(() => import('./views/base/cards/Cards'))
// const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
// const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
// const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
// const Navs = React.lazy(() => import('./views/base/navs/Navs'))
// const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
// const Placeholders = React.lazy(() => import('./views/base/placeholders/Placeholders'))
// const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
// const Progress = React.lazy(() => import('./views/base/progress/Progress'))
// const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
// const Tables = React.lazy(() => import('./views/base/tables/Tables'))
// const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// // Buttons
// const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
// const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
// const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

// //Forms
// const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
// const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
// const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
// const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
// const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
// const Range = React.lazy(() => import('./views/forms/range/Range'))
// const Select = React.lazy(() => import('./views/forms/select/Select'))
// const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

// const Charts = React.lazy(() => import('./views/charts/Charts'))
const Vestiaires = React.lazy(() => import('./views/vestiaires/Vestiaires'))
const Wara = React.lazy(() => import('./views/wara/Wara'))
const Parole_Contre_Parole = React.lazy(() =>
  import('./views/parole_contre_parole/Parole_Contre_Parole'),
)
const Les_Engages = React.lazy(() => import('./views/les_engages/Les_Engages'))
const En_Plein_Coeur = React.lazy(() => import('./views/en_plein_coeur/En_Plein_Coeur'))
const Comme_Un_Air = React.lazy(() => import('./views/comme_un_air/Comme_Un_Air'))
const Les_Saisons_Meurtrieres = React.lazy(() =>
  import('./views/les_saisons_meurtrieres/Les_Saisons_Meurtrieres'),
)

// Icons
// const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
// const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
// const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// // Notifications
// const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
// const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
// const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
// const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

// const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Accueil' },
  { path: '/accueil', name: 'Accueil', element: Accueil },
  { path: '/presentation', name: ' Présentation', element: Catalogues, exact: true },
  { path: '/presentation/catalogues', name: 'Catalogue', element: Catalogues },
  { path: '/presentation/a_propos', name: 'À Propos', element: A_Propos },
  // { path: '/base', exact: true, name: 'Productions', element: BasePage },
  // { path: '/base/accordion', name: 'Wara', element: Accordion },
  // { path: '/base/breadcrumbs', name: 'Les Engagés', element: Breadcrumbs },
  // { path: '/base/cards', name: 'Cards', element: Cards },
  // { path: '/base/carousels', name: 'Carousel', element: Carousels },
  // { path: '/base/collapses', name: 'Collapse', element: Collapses },
  // { path: '/base/list-groups', name: 'List Groups', element: ListGroups },
  // { path: '/base/navs', name: 'Navs', element: Navs },
  // { path: '/base/paginations', name: 'Paginations', element: Paginations },
  // { path: '/base/placeholders', name: 'Placeholders', element: Placeholders },
  // { path: '/base/popovers', name: 'Popovers', element: Popovers },
  // { path: '/base/progress', name: 'Progress', element: Progress },
  // { path: '/base/spinners', name: 'Spinners', element: Spinners },
  // { path: '/base/tables', name: 'Tables', element: Tables },
  // { path: '/base/tooltips', name: 'Tooltips', element: Tooltips },
  // { path: '/buttons', name: 'Buttons', element: Buttons, exact: true },
  // { path: '/buttons/buttons', name: 'Buttons', element: Buttons },
  // { path: '/buttons/dropdowns', name: 'Dropdowns', element: Dropdowns },
  // { path: '/buttons/button-groups', name: 'Button Groups', element: ButtonGroups },
  // { path: '/charts', name: 'Contact', element: Charts },
  { path: '/vestiaires', name: 'Vestiaires', element: Vestiaires },
  { path: '/wara', name: 'Wara', element: Wara },
  { path: '/parole_contre_parole', name: 'Parole_Contre_Parole', element: Parole_Contre_Parole },
  { path: '/les_engages', name: 'Les_Engages', element: Les_Engages },
  { path: '/en_plein_coeur', name: 'En_Plein_Coeur', element: En_Plein_Coeur },
  { path: '/comme_un_air', name: 'Comme_Un_Air', element: Comme_Un_Air },
  {
    path: '/les_saisons_meurtrieres',
    name: 'Les_Saisons_Meurtrieres',
    element: Les_Saisons_Meurtrieres,
  },

  { path: '/wara/saison1', name: 'Wara Saison 1', element: Wara_S1 },
  { path: '/wara/saison2', name: 'Wara Saison 2', element: Wara_S2 },

  { path: '/les_engages/saison1', name: 'Les Engages Saison 1', element: L_E_S1 },
  { path: '/les_engages/saison2', name: 'Les Engages Saison 2', element: L_E_S2 },
  { path: '/les_engages/saison3', name: 'Les Engages Saison 3', element: L_E_S3 },

  {
    path: '/les_saisons_meurtrieres/saison1',
    name: 'Les Saisons Meurtrieres Saison 1',
    element: L_S_M_S1,
  },
  {
    path: '/les_saisons_meurtrieres/saison2',
    name: 'Les Saisons Meurtrieres Saison 2',
    element: L_S_M_S2,
  },
  {
    path: '/les_saisons_meurtrieres/saison3',
    name: 'Les Saisons Meurtrieres Saison 3',
    element: L_S_M_S3,
  },
  {
    path: '/les_saisons_meurtrieres/saison4',
    name: 'Les Saisons Meurtrieres Saison 4',
    element: L_S_M_S4,
  },

  // { path: '/forms', name: 'Forms', element: FormControl, exact: true },
  // { path: '/forms/form-control', name: 'Form Control', element: FormControl },
  // { path: '/forms/select', name: 'Select', element: Select },
  // { path: '/forms/checks-radios', name: 'Checks & Radios', element: ChecksRadios },
  // { path: '/forms/range', name: 'Range', element: Range },
  // { path: '/forms/input-group', name: 'Input Group', element: InputGroup },
  // { path: '/forms/floating-labels', name: 'Floating Labels', element: FloatingLabels },
  // { path: '/forms/layout', name: 'Layout', element: Layout },
  // { path: '/forms/validation', name: 'Validation', element: Validation },
  // { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  // { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  // { path: '/icons/flags', name: 'Flags', element: Flags },
  // { path: '/icons/brands', name: 'Brands', element: Brands },
  // { path: '/notifications', name: 'Notifications', element: Alerts, exact: true },
  // { path: '/notifications/alerts', name: 'Alerts', element: Alerts },
  // { path: '/notifications/badges', name: 'Badges', element: Badges },
  // { path: '/notifications/modals', name: 'Modals', element: Modals },
  // { path: '/notifications/toasts', name: 'Toasts', element: Toasts },
  // { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
