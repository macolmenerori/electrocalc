# electrocalc

This is a web application for calculating electricity costs.

Try it out [here](https://electrocalc.miguelangelcolmenero.es/)

## How to use

1. Access the app
2. Insert the power of the load (in W)
3. Insert the price of the electricity (in €/kWh)
4. Press _calculate_
5. The results are shown on a table

## Run locally

### Requirements

- Node JS `>=24.0.0`
- [PNPM](https://pnpm.io/installation) `>=10.12.1`

### Run

First, install the needed packages with

```bash
pnpm i
```

Then, start the app with

```bash
pnpm start
```

The app should be available in `localhost:3000`

## How to contribute

1. Clone the repo, create a branch and do the desired changes
2. Open a PR and wait for review

Before creating the PR ensure to run the command `pnpm verify` to perform some basic checks.

## How to dockerize

A Dockerfile is provided to build an image and create a container out of it.

The image can be generated with

```bash
docker build -t miancolrin/electrocalc .
```

And then the container can be created and run with

```bash
docker run -p 80:80 --name electrocalc  miancolrin/electrocalc
```

## How to run tests

### Jest test

```bash
pnpm test
pnpm test <TEST_FILE_NAME>
```
