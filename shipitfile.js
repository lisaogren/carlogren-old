module.exports = function (shipit) {
  require('shipit-deploy')(shipit)

  const workspace = '/tmp/shipit/carlogren'

  shipit.initConfig({
    default: {
      workspace: workspace,
      deployTo: '/home/rascarlito/carlogren-test',
      repositoryUrl: 'git@gitlab.com:rascarlito/carlogren.git',
      keepReleases: 3,
      ignores: ['.git', 'node_modules'],
      dirToCopy: workspace + '/dist'
    },
    production: {
      servers: 'rascarlito@carlogren.com'
    }
  })

  shipit.blTask('dependencies', function () {
    return shipit.local('cd ' + workspace + ' && npm install')
      .then(function () {
        shipit.log('Successfully installed dependencies')
      })
      .catch(function () {
        shipit.log('Failed to install dependencies')
      })
  })

  shipit.blTask('build', function () {
    return shipit.local('cd ' + workspace + ' && npm run build')
      .then(function () {
        shipit.log('Successfully built the project')
      })
      .catch(function () {
        shipit.log('Failed to build the project')
      })
  })

  shipit.on('fetched', function () {
    shipit.start('dependencies', 'build')
  })
}
