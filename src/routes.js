/**
 * ROUTES
 */
export default [
  {
    name: 'Home',
    path: "/admin.php",
    component: 'HomeComponent'
  },
  {
    name: 'Calendar',
    path: "/admin.php?page=rubydurian-calendar",
    component: 'CalendarComponent'
  },
  {
    name: 'Options',
    path: "/admin.php?page=rubydurian-options",
    component: 'OptionsComponent'
  },
]