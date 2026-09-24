# Week 01 — Backend Foundations

## Objective

Understand the fundamentals of building a backend
HTTP application with Node.js, TypeScript and NestJS.

## Deliverables

- [ ] NestJS API
- [ ] GET /health
- [ ] POST /users
- [ ] GET /users/:id
- [ ] Input validation
- [ ] Error handling
- [ ] Tests
- [ ] Architecture notes

## Questions I need to answer

1. What happens when an HTTP request reaches my server?
2. What is the role of a controller?
3. What is the role of a service?
4. Why can't TypeScript validate HTTP input?
5. What is dependency injection?
6. What are HTTP status codes?

### Playground project

1. A server process is a job/service that is initialised and runs on the server
2. This process runs on a specified port on the host machine e.g if running on port 3000 we would specify `localhost:3000`
 - localhost:- this is specifying the hostname i.e pointing to the current device
 - :- the colon acts as a separator 
 - 3000 :- this specifies the port number that the server is connected to
3. The diffeernce between:
 - HTTP :- It means the protocol is not encrypted and any communication between the client and server is not secure
 - HTTPS :- This means the protocol uses an encryption system making the communication secure and not prone to security attacks
4. A HTTP request includes:
 - Method:- GET/POST/PUT/PATCH/DELETE
 - Header:- includes information about the request e.g the protocol version
 - Url:- the url resource the client is trying to access
 - Body:- includes the content of the request
5. A HTTP response will include:
 - Status code:- this are codes that reference the server action e.g 200 for an ok response, 201 for a successfull resource creation
 - Headers
 - Cookies and session 
 - Body
6. GET /users fetches a collection of users while POST /users will add a new user to the collection of users