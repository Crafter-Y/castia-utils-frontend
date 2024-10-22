const getApiUrl = () => {
  return localStorage.getItem('apiUrl') ?? 'https://castiaapi.crafter-y.de/'
}

type APIResponse = {
  success: boolean
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any
}

export const requestApi = async (
  path: string,
  method: 'GET' | 'PUT' | 'POST' | 'DELETE'
): Promise<APIResponse> => {
  const response = await fetch(getApiUrl() + path, {
    method,
    headers: {
      authorization: 'Bearer ' + localStorage.getItem('token')
    }
  })
  if (!response.ok) {
    try {
      const msg = await response.json()
      return msg
    } catch (ignored) {
      return {
        success: false,
        data: {
          error: response.status + ' ' + response.statusText
        }
      }
    }
  }
  return await response.json()
}
