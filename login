$ curl -X POST http://localhost:3060/api/auth/login -H "Content-Type: application/json" -d '{"email": "john.doe@example.com", "password": "SecurePass123"}'

{
  "message": "Login successful",
  "authtoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG4uZG9lQGV4YW1wbGUuY29tIiwiaWQiOiI2NWU4YjFjM2Q0ZTVmNjA3MTgyOWExIiwiaWF0IjoxNzA5NzYzNTAwLCJleHAiOjE3MDk3NjcxMDB9.qR3sTuVw5xYz1Ab2Cd3Ef4Gh5Ij6Kl7Mn8Op9Qr0StUv",
  "email": "john.doe@example.com",
  "userName": "John Doe"
}
