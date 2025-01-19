export const getCurrentState = (name: string) => {
  try {
    const currentState = JSON.parse(window.localStorage.getItem(name) || '{}')

    return currentState
  } catch (err) {
    console.error(
      `Error parsing state from localStorage with key "${name}":`,
      err,
    )
    window.localStorage.setItem(name, '{}')

    return {}
  }
}
