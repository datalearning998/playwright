pipeline {
  agent any
  tools {nodejs "node"}
  stages {
    stage('Build') {
      steps {
        git branch: 'main', changelog: false, credentialsId: '13b0bc95-b56b-42f4-932b-2c4234026f5b', poll: false, url: 'https://github.com/datalearning998/playwright.git'
        sh 'npm install'
        sh 'npx playwright install'
        sh 'npx playwright test tests/assertionsDemo.spec.js --project=chromium --headed'
      }
        post {
        success {
          archiveArtifacts(artifacts: 'homepage-*.png', followSymlinks: false)
          sh 'rm -rf *.png'
        }
      }
        
    }
      
  }
}
