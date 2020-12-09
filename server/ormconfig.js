const srcConfig = {
    "type": "mysql",
    "host": "api.peeradmit.ml",
    "port": 3306,
    "username": "root",
    "password": "example",
    "database": "testdb",
    "synchronize": true,
    "logging": false,
    "entities": [
       "src/entity/**/*.ts"
    ],
    "migrations": [
       "src/migration/**/*.ts"
    ],
    "subscribers": [
       "src/subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "src/entity",
       "migrationsDir": "src/migration",
       "subscribersDir": "src/subscriber"
    }
 }

const prodConfig = {
    "type": "mysql",
    "host": "db",
    "port": 3306,
    "username": "root",
    "password": "long_password_here",
    "database": "quickdb",
    "synchronize": true,
    "logging": false,
    "entities": [
       "entity/**/*.js"
    ],
    "migrations": [
       "migration/**/*.js"
    ],
    "subscribers": [
       "subscriber/**/*.js"
    ],
    "cli": {
       "entitiesDir": "entity",
       "migrationsDir": "migration",
       "subscribersDir": "subscriber"
    }
 }

module.exports = process.env.TS_NODE ? srcConfig : prodConfig;