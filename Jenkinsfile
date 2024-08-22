pipeline {
    agent any

    environment {
        SERVER_IP = '139.59.36.218'
        SERVER_PORT = '5000'
        SSH_USER = 'root'
        APP_DIR = '/root/node/app.js'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/deepakswins/Node1.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    def remoteCommand = """
                    cd ${/root/node/app.js}
                    git pull origin main
                    npm install
                    pm2 restart all
                    """
                    sh "ssh ${root}@ ${139.59.36.218} '${remoteCommand}'"
                }
            }
        }
    }

    post {
        success {
            echo 'Build and Deployment successful!'
        }
        failure {
            echo 'Build or Deployment failed.'
        }
    }
}
