module.exports = {
  properties: ['name', 'description'],
  postInstall: ['git init', 'npm i']
}
