/**
 * ROUTES
 */
export default [
  // {
  //   name: 'Dashboard',
  //   path: "/admin.php",
  //   component: 'Dashboard'
  // },
  {
    name: 'Dashboard',
    path: "/admin.php?page=rubydurian",
    component: 'Dashboard'
  },
  {
    name: 'Booking',
    path: "/admin.php?page=rubydurian-booking",
    component: 'Booking'
  },
  {
    name: 'Customers',
    path: "/admin.php?page=rubydurian-customers",
    component: 'Customers'
  },
  {
    name: 'Staffs',
    path: "/admin.php?page=rubydurian-staffs",
    component: 'Staffs'
  },
  {
    name: 'Services',
    path: "/admin.php?page=rubydurian-services",
    component: 'Services'
  },
  {
    name: 'Options',
    path: "/admin.php?page=rubydurian-options",
    component: 'Options'
  },
]