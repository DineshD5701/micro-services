pipeline {
    agent {label 'local'}
    environment {
        REGISTRY = 'local'
    }
    stages {
        stage('Build Services') {
            matrix {
                axes {
                    axis {
                        name 'SERVICE'
                        values 'auth-service', 'payment-service', 'order-service'
                    }
                }
                stages {
                    stage('Build Docker Image') {
                        steps {
                            dir("${SERVICE}") {
                                sh "docker build -t ${SERVICE}:latest ."
                            }
                        }
                    }
                }
            }
        }
        stage('Local Deploy') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d --build'
            }
        }
    }
}
