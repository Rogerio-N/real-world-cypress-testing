# Real World APP testing with Cypress + Graphql

![Cypress](https://img.shields.io/badge/Cypress-black?style=for-the-badge&logo=cypress&logoColor=white)
![TypeScript](https://img.shields.io/badge/Typescript-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Node](https://img.shields.io/badge/Node-red?style=for-the-badge&logo=npm&logoColor=white)
![Graphql](https://img.shields.io/badge/GraphQl-black?style=for-the-badge&logo=GraphQl&labelColor=%23E10098&color=%23E10098)

This project purpose is to test a real world app implemented Next + GraphQL. The real world app is a challange to create a clone from Medium, the application used to test was forked from [jimleeston](https://github.com/jimleestone/next-real-world)

Were choosen to automate the main app flows that represent the most critical/valuable flows in the app. They were:
- Login 
- Register 
- Create new article
- Read article

The test was made using [Cypress](https://www.cypress.io/), a simple yet robust javascript end-to-end web test automation framewok. For this project, were used Typescript insted default JS and used a Page-Object as the main design pattern

### Pre-requisites

- [Node 16](https://nodejs.org/en/download/)

### Setup

1 - Open the project and install its dependencies, to do this run the command in the terminal: `npm install`

2 - Once the installation finishes, you can open the cypress window. Run the command: `npx cypress open` and you are ready to go

### Test results
![image](https://github.com/Rogerio-N/real-world-cypress-testing/assets/72579647/a26b5fe7-0b55-4c83-9a2f-ad491ab20301)

### Improvements

After the devlopment of this tests, is possible to see some points that can be improved, it follows:

1 - The way the fixtures were used on this aproach could be done by developing a factory for the users and the articles. This would garantee the growth of complex cases with great segregation  

2 - Approach the architecture in a simpler way to expand. The architecture for project could be improved by the usage of contexts, using as base the DDD (Domain-Driven Development)  

3 - Implemented on a pipeline. In the real world its ideal that those tests ran in a pipeline with the application to garantee the most critical test cases is always tested  
