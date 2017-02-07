# Reevoo Aggregator

Frontend app for retailer products -> model name aggregation

# Overview

This relies on a number of other applications to run correctly:

* [client_portal-admin](https://github.com/reevoo/client_portal-admin) - used for authentication into the Client Portal ecosystem
* [client_portal-aggregator_backend](https://github.com/reevoo/client_portal-aggregator/tree/master/backend) - This provides the backend

# Requirements

This relies on having `node` and `npm` installed, whose version is managed in `.node-version` as we generally manage `node` versions with [`nodenv`](https://github.com/nodenv/nodenv). It also relies on `yarn` as the package manager. To install it you can just run `npm i -g yarn` once you have `nodenv` properly setup.

If you're going to deploy (to staging or production) you will need to have installed the AWS CLI tools. In Mac you can just run `brew install awscli`. For other systems, check [the official docs](https://aws.amazon.com/cli/).

# Set up

All managed through `npm`, `yarn` and `webpack`, so simply:

```bash
# Pre-requisite to run the contract tests with Pact
bundle install

# Pre-requisite on installing node
nodenv install

# For installing and running the application
yarn install
yarn run start
```

# Test

If you need to run all the tests (unit and contract) just run

```bash
yarn run test
```

## Unit

You can run the unit tests a single time with

```bash
yarn run test:unit
```

or keep them running if you are modifying them and want to check the results live (TDD FTW!):

```bash
yarn run test:unit:watch
```

## Contract

To generate the Pact contract files and upload them to you local Pact Broker, you have to run

```bash
yarn run test:contract
```

and be sure to have [Pact Broker](https://github.com/reevoo/pact_broker) running.

# Deploy

To deploy the app run:

```bash
# Staging
./deploy.sh staging

# Production
./deploy.sh production
```

# License

This software is licensed under the [MIT license](https://opensource.org/licenses/MIT)
