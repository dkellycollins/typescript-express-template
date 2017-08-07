# Typescript Express Template

A template repo for developing a REST service using Express and Inverisfy.

## Folder Structure

### Auth

Contains authentication strategies. This project uses Passport for authentication. For more information see http://passportjs.org/

### Config

Contains application configuration. The index file in this folder will load and merge two configuration files; config.ts and the configuration for the current environment.

### Controllers

Controllers should only be concerned with translating requests and responses.

### DAOs

DAOs manage persisting data to a data store.

### Managers

Managers

### Messages

Contains both messages and the message factories used to build them. Messages are data returned from the API which does not always reflect the model. For example, a model may contain a date field of type Date. The corresponding message would return this date as string.

### Models

Models

### Spec

Contains tests. Tests are written in a BDD style using the SuperTest and Cucumber.js frameworks.