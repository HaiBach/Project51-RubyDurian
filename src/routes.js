/**
 * ROUTES
 */
export default [
  {
    name: 'Dashboard',
    path: "/admin.php",
    component: 'DashboardComponent'
  },
  {
    name: 'Calendar',
    path: "/admin.php?page=rubydurian-calendar",
    component: 'CalendarComponent'
  },
  {
    name: 'Customers',
    path: "/admin.php?page=rubydurian-customers",
    component: 'CustomersComponent'
  },
  {
    name: 'Staffs',
    path: "/admin.php?page=rubydurian-staffs",
    component: 'StaffsComponent'
  },
  {
    name: 'Services',
    path: "/admin.php?page=rubydurian-services",
    component: 'ServicesComponent'
  },
  {
    name: 'Options',
    path: "/admin.php?page=rubydurian-options",
    component: 'OptionsComponent'
  },
]