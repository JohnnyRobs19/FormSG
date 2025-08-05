import { AdminForbiddenError } from '.'

export const enSG: AdminForbiddenError = {
  adminForbiddenErrorPage: {
    title: 'You do not have access to this page.',
    message: 'Log in, or contact the owner of the form for more information.',
    button: {
      text: {
        back: 'Back',
      },
    },
    buttonLink: {
      text: {
        goToDashboard: 'Go to dashboard',
        login: 'Log in',
      },
    },
  },
}
