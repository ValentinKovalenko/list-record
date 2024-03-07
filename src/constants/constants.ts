export const errorsMessage: {[key: string]:string} = {
  'maxLength': 'length must be less than or equal to 20 characters',
  'required': 'Field is required',
}

export const recordStatuses = {
  'completed': 'Completed',
  'notCompleted': 'Not Completed',
}

export const options = [
  { 'value': 'all', 'label': 'All' },
  { 'value': 'completed', 'label': 'Completed' },
  { 'value': 'not Completed', 'label': 'Not Completed' },
]
