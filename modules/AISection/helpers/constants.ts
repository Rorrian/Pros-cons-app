export const AI_IDEA_MIN_LENGTH = 5
export const AI_IDEA_MAX_LENGTH = 1000
export const AI_IDEA_REGEXP = /^(?=.*[a-zA-Z])[a-zA-Z0-9.,-\s]+$/

export const ERR_NO_JSON_ARRAYS =
  'No valid JSON arrays found in response text. Try to reformulate the ideas and generate them again.'
export const ERR_NOT_AN_ARRAY =
  'Parsed data is not an array of pros and cons. Try to reformulate the ideas and generate them again.'
export const ERR_UNKNOWN =
  'Error parsing pros/cons list: An unknown error occurred. Try to reformulate the ideas and generate them again.'
