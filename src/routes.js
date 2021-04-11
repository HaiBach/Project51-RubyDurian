/**
 * ROUTES
 */
export default [
  {
    name: 'Dashboard',
    component: 'Dashboard',
    path: "/admin.php",
    query: {
      page: 'rubydurian'
    }
  },
  {
    name: 'Booking',
    component: 'Booking',
    path: "/admin.php",
    query: {
      page: 'rubydurian-booking'
    }
  },
  {
    name: 'Customers',
    component: 'Customers',
    path: "/admin.php",
    query: {
      page: 'rubydurian-customers'
    }
  },
  {
    name: 'Staffs',
    component: 'Staffs',
    path: "/admin.php",
    query: {
      page: 'rubydurian-staffs'
    }
  },
  {
    name: 'Services',
    component: 'Services',
    path: "/admin.php",
    query: {
      page: 'rubydurian-services'
    }
  },
  {
    name: 'Options',
    component: 'Options',
    path: "/admin.php",
    query: {
      page: 'rubydurian-options'
    }
  },




  {
    name: 'Booking1',
    path: "/admin.php",
    query: {
      page: 'rubydurian-booking',
      type: 'edit',
      id: '01',
    },
    component: 'Booking'
  },
  {
    name: 'Booking2',
    path: "/admin.php",
    query: {
      page: 'rubydurian-booking',
      type: 'edit',
      id: '02',
    },
    component: 'Booking'
  },
]