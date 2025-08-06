import { PartialDeep } from 'type-fest'

import { taSG as adminForbiddenError } from './features/admin-forbidden-error'
import { taSG as publicForm } from './features/public-form'
import Translation from './types'

export const taSG: PartialDeep<Translation> = {
  translation: {
    features: {
      adminForbiddenError,
      publicForm,
    },
  },
}
