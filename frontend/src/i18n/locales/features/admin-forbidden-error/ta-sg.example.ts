import { PartialDeep } from 'type-fest'

import { AdminForbiddenError } from '.'

export const taSG: PartialDeep<AdminForbiddenError> = {
  adminForbiddenErrorPage: {
    title: 'இந்தப் பக்கத்தை அணுக நீங்கள் அனுமதி பெற்றவர்கள் அல்ல.',
    message:
      'உள்நுழையவும், அல்லது மேலும் தகவல்களுக்கு படிவ உரிமையாளரை தொடர்பு கொள்ளவும்.',
    button: {
      text: {
        back: 'பின் செல்க',
      },
    },
    buttonLink: {
      text: {
        goToDashboard: 'டாஷ்போர்டுக்கு செல்லவும்',
        login: 'உள்நுழைக',
      },
    },
  },
}
