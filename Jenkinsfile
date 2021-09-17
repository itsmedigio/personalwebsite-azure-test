/*
    Pipeline demo universale per progetti .NET Framework ed Angular
    Builda il contenuto di nomeprogetto.API e .APP
    Cambiare le variabili coi valori necessari
*/

node {
    def gitbranch = 'master'
    def giturl = 'https://github.com/itsmedigio/personalwebsite-angular.git'
    def credentialsId = '70f52fee-c9b7-4b6f-b680-3dd3a6d6fbf4'
    def buildConfiguration = 'Release'
    def publishProfile = 'FolderProfile'
    final scmVars = checkout(scm)
	try {
        // First stage: checkout to branch
        stage ('Checkout') {
            echo "############ Last successful commit: ${scmVars.GIT_PREVIOUS_SUCCESSFUL_COMMIT}"
			echo "############ Current branch: ${scmVars.GIT_BRANCH}"
            git branch: gitbranch, credentialsId: credentialsId, url: giturl
        } 
        // Second stage: build
        stage('NugetRestore') {
            dir("backend") {
                bat "echo Current working dir: %cd%"
                bat "nuget restore SampleWebApiAspNetCore.sln"
            }
        }
        stage('Build'){
            // build backend
            dir ("backend"){
                bat "dotnet build SampleWebApiAspNetCore.sln /p:Configuration=${buildConfiguration}"
            }
            dir ("frontend"){
                bat """
                    cd frontend
                    npm i
                    npm run build
                    xcopy dist C:/Users/ddigiovanni/Programmi/xampp/htdocs /E /H /C /I
                """
            }
        }
        // Third stage: testing => If a test fails, stop everything
		stage('Test'){	
            dir("backend") {
                    bat "dotnet test SampleWebApiAspNetCore.sln"
            }
		}
        /* Sezione SonarQube (plugin buggato?)
        stage('SonarQube Analysis') {
            def msbuildHome = tool 'MSBuild'
            def scannerHome = tool 'SonarScanner for MSBuild'
            withSonarQubeEnv() {
                bat "echo Current working dir: %cd%"
                bat "\"${scannerHome}\\SonarScanner.MSBuild.exe\" begin /k:\"TestProject\""
                bat "\"${msbuildHome}\\MSBuild.exe\" /t:Rebuild"
                bat "\"${scannerHome}\\SonarScanner.MSBuild.exe\" end"
            }
        }*/
		stage('Deploy') {
            bat "dotnet publish SampleWebApiAspNetCore.sln /p:Configuration=${buildConfiguration} /p:PublishProfile=${publishProfile}.pubxml"
		}
    notify("SUCCESSFUL")
	}
    catch(e) {
		notify("ERROR")
	    throw e
    }
}

def notify(String buildStatus) {
    emailext body:'''<a href="changeme">Link applicazione changeme</a> ${SCRIPT, template="groovy_html.template"}''', 
             subject: "${buildStatus}: Job '${env.JOB_NAME} [${env.BUILD_NUMBER}]'",
             to: "davide.digiovanni@altran.it"
}
