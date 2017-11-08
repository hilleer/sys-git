# Rest api's

Lecture notes and assignments given [here](https://github.com/datsoftlyngby/soft2017fall-system-integration-teaching-material/blob/master/lecture_notes/09-REST_APIs.ipynb).

## Assignments

### Calculator

Simple rest server that can do simple calculations.

**Addition:** `/calc/addition/[a, b, c, d]` will add all numbers in the array together.

**Subtraction:** `/calc/subtract/:a/:b` will subtract b from a.

## Commands

### Calculator

Start the server with the rest api: `npm run calc-start`

Start the server with the rest api in dev mode: `npm run calc-dev`

