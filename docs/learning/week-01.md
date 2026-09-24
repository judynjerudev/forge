# Week 01 — Backend Foundations

## Objective°

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
3. The difference between:
 - HTTP :- It means the protocol is not encrypted and any communication between the client and server is not secure
 - HTTPS :- Protects the communication channel from many forms of interception and tampering.
4. A HTTP request includes:
 - Method:- GET/POST/PUT/PATCH/DELETE
 - Header:- includes information about the request e.g the protocol version
 - Body:- includes the content of the request
5. A HTTP response will include:
 - Status line:- this are codes that reference the server action e.g 200 for an ok response, 201 for a successfull resource creation. It will also include the protocol version and the request url
 - Headers
 - Body
6. GET /users fetches a collection of users while POST /users will add a new user to the collection of users

## What I discovered by building

### Request lifecycle

A http request lifecycle involves the following:
The client(browser) makes a request e.g a user typing a url. The url is then resolved into an ip address that points to a server. Once the server receives the request, it processes it and returns the response to the client.

### What Node is doing

Node.js runs a node program that processes http/https requests coming through the network interface, processes the requests and then returns a response. 

### What I initially misunderstood

- I initially mistunderstood the https protocol in that it does not secure the application but only the request and response on transit.
- Another thing is that request headers don't include url or the protocol version. There are provided in the request status line


### assignment: HTTP investigation

1. It is not possible to aceess the request body through `req.body` because the node treats the request body as a stream of data and breaks it down to chunks. Node doesn+t wait for the whole request body to arrive thus saving on memory
2. The request body arrives as a stream of data(chunks)
3. It is necessary to parse JSON because the request body is sent in string format and to be able to access the data as an object we need to convert it to a javascript object
4. If the client sends invalid JSON we should handle it on the server as an error of 400(Invalid JSON) and send that response back to the client