# **Setting up the server**

- Create .env file on ./services with the DB_URL of your local server.

- Create Docker instance on port 3999

```
docker run -p 0.0.0.0:3999:27017 --name acnh-collection-mongo -d mongo:4.2.0
```
