pipeline {
    agent any
    
    stages {
        stage('Build Docker Image') {
            steps {
                script {
                    def gitCommitHash = sh(
                        script: 'git rev-parse --short HEAD',
                        returnStdout: true
                    ).trim()
                    def imageName = "Galower/simple-express:${gitCommitHash}"
                    docker.build(imageName)
                }
            }
        }
    }
}
