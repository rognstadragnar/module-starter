module.exports = (user, chalk) => ({
  name: 'Module starter',
  description:
    'A starter for building npm modules with Typescript, flow or ES6 using microbundle',
  properties: [
    {
      name: 'name',
      type: 'text',
      message: 'Enter your name',
      validation: response => {
        // valid npm-name
        const regex = /^[^\.^\_]([a-z\-\_\.]){1,214}$/
        return regex.test(response)
      },
      errorMessage:
        'Please enter a valid name without whitespace and that does not start with a dot or an underscore.'
    },
    {
      name: 'description',
      type: 'text',
      message: 'Enter a description',
      validation: response => (response ? response.length < 350 : true),
      errorMessage:
        'You must enter a description and it must be shorter than 350 characters'
    },
    {
      name: 'username',
      message: 'Enter username and email',
      initial: `${user.name} ${user.email ? '(' + user.email + ')' : ''}`
    }
  ],
  commands: {
    postInstall: ['git init', 'npm i']
  }
})
