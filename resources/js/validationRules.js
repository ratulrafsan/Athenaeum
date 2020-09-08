export default {
    required: value => !!value || 'Required',
    min: value => value.length >= 8 || 'Minimum 8 characters are required'
}
