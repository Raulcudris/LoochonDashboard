export const paths = {
  home: '/',
  auth: {
    //signIn: '/auth/sign-in',
    signIn: '',
    //signUp: '/auth/sign-up',
    signUp: '',
    //resetPassword: '/auth/reset-password'
    resetPassword: ''
  },
  dashboard: {
    overview: '/dashboard',
    account: '/dashboard/account',
    users: '/dashboard/users',
    integrations: '/dashboard/integrations',
    settings: '/dashboard/settings',
  },
  errors: { notFound: '/errors/not-found' }
  ,
} as const;
