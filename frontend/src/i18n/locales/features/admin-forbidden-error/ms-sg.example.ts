import { PartialDeep } from 'type-fest'

import { AdminForbiddenError } from '.'

export const msSG: PartialDeep<AdminForbiddenError> = {
  adminForbiddenErrorPage: {
    title: 'Anda tidak mempunyai akses ke halaman ini.',
    message: 'Log masuk, atau hubungi pemilik borang untuk maklumat lanjut.',
    button: {
      text: {
        back: 'Kembali',
      },
    },
    buttonLink: {
      text: {
        goToDashboard: 'Pergi ke papan pemuka',
        login: 'Log masuk',
      },
    },
  },
}
