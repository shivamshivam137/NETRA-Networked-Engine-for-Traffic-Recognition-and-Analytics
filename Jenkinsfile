pipeline {
    agent any

    tools {
        // Requires NodeJS plugin configured in Jenkins Global Tool Configuration
        nodejs 'NodeJS-20'
    }

    environment {
        CI = 'true'
    }

    stages {
        stage('Checkout SCM') {
            steps {
                echo '📥 Pulling repository from GitHub...'
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo '📦 Installing npm packages in NETRA_Core...'
                dir('NETRA_Core') {
                    sh 'npm install'
                }
            }
        }

        stage('Automated Tests & Quality') {
            steps {
                echo '🧪 Running Automated Smoke & Unit Tests...'
                dir('NETRA_Core') {
                    sh 'npm test'
                }
            }
        }

        stage('Build Production Bundle') {
            steps {
                echo '🔨 Compiling Vite Production Build...'
                dir('NETRA_Core') {
                    sh 'npm run build'
                }
            }
        }

        stage('Archive Build Artifacts') {
            steps {
                echo '📦 Archiving distribution assets...'
                archiveArtifacts artifacts: 'NETRA_Core/dist/**', fingerprint: true, allowEmptyArchive: false
            }
        }
    }

    post {
        success {
            echo '🎉 NETRA CI/CD Pipeline Build SUCCESSFUL!'
        }
        failure {
            echo '❌ NETRA CI/CD Pipeline Build FAILED!'
        }
    }
}
