import { PartialDeep } from 'type-fest'

import { AdminForbiddenError } from '.'

export const zhSG: PartialDeep<AdminForbiddenError> = {
  adminForbiddenErrorPage: {
    title: '您无权访问此页面。',
    message: '请登录，或联系表单所有者以获取更多信息。',
    button: {
      text: {
        back: '返回',
      },
    },
    buttonLink: {
      text: {
        goToDashboard: '前往仪表板',
        login: '登录',
      },
    },
  },
}
