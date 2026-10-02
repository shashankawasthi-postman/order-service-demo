# Order Service (Demo)

Demo microservice for managing customer orders.

This is a **demo repo**: dummy, in-memory data and no authentication. It exists to
demonstrate an API spec paired with a minimal running implementation (e.g. for
Postman collection generation, mock servers, or API design walkthroughs).

## Contents

- [`openapi.yaml`](./openapi.yaml) — OpenAPI 3.0 spec describing the `orders` API.
- [`server.js`](./server.js) — Minimal Express server implementing the spec with in-memory dummy data.
- [`package.json`](./package.json) — Dependencies (just Express).

## Run it

```bash
npm install
npm start
```

The server starts on `http://localhost:4002`.

## Endpoints

| Method | Path | Description |
| --- | --- | --- |
| GET | `/health` | Health check |
| GET | `/orders` | List all orders |
| POST | `/orders` | Create an order |
| GET | `/orders/:id` | Get an order by ID |
| PUT | `/orders/:id` | Update an order |
| DELETE | `/orders/:id` | Delete an order |

## Import into Postman

Import [`openapi.yaml`](./openapi.yaml) directly into Postman (File → Import) to generate
a collection, or point Postman's mock server / API Builder at this spec.
