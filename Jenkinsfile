/*
    Pipeline demo universale per progetti .NET Framework ed Angular
    Builda il contenuto di nomeprogetto.API e .APP
    Cambiare le variabili coi valori necessari
*/

node {
    def gitbranch = 'Dev'
    def giturl = 'http://fsg-tor1-92.altran.it/sw-hub/isp/timesheet.git'
    def credentialsId = 'Jenkins_Gitlab'
    def projectName = 'timesheet'
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
            dir("${projectName}.API") {
                bat "echo Current working dir: %cd%"
                bat ".\.nuget\nuget.exe restore ${projectName}.API.sln"
            }
        }
        stage('Build'){
            // build backend
            bat "\"${tool 'MSBuild'}\" ${projectName}.API/${projectName}.API.sln /p:Configuration=${buildConfiguration}" 
            // build frontend
            bat """
                cd ${projectName}.APP
                npm i
                npm run gulp build-app
            """
        }
        // Third stage: testing => If a test fails, stop everything
		stage('Test'){	
            dir("${projectName}.API") {
                    bat """
                    cd ${projectName}.API.Tests/bin/${buildConfiguration}/
                    dotnet test ${projectName}.API.Tests.dll
                    """
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
            bat "\"${tool 'MSBuild'}\" ./${projectName}.API/${projectName}.API/${projectName}.API.csproj /p:Configuration=${buildConfiguration} /p:PublishProfile=${publishProfile}.pubxml  /p:DeployOnBuild=true"
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
