module.exports = {
    /**
     * Application configuration section
     * http://pm2.keymetrics.io/docs/usage/application-declaration/
     */
    apps: [
      {
        name: 'UI',
        cwd: './checkin-ui',
        script: 'docker-compose',
        args: 'up',
        watch: false
      },
      {
        name: 'Server',
        cwd: './checkin-server',
        script: 'docker-compose',
        args: 'up',
        watch: false
      }
    ]
  }
  