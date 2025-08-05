import { PartialDeep } from 'type-fest'

import { zhSG as adminForbiddenError } from './features/admin-forbidden-error'
import { zhSG as publicForm } from './features/public-form'
import Translation from './types'

export const zhSG: PartialDeep<Translation> = {
  translation: {
    features: {
      adminForbiddenError,
      publicForm,
    },
  },
}
