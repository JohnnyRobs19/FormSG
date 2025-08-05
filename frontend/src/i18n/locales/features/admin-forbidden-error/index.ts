export * from './en-sg'
export * from './zh-sg.example'
export * from './ms-sg.example'
export * from './ta-sg.example'

export interface AdminForbiddenErrorPageTranslations {
  title: string
  message: string
  button: {
    text: {
      back: string
    }
  }
  buttonLink: {
    text: {
      goToDashboard: string
      login: string
    }
  }
}

export interface AdminForbiddenError {
  adminForbiddenErrorPage: AdminForbiddenErrorPageTranslations
}
