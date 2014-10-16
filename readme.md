# Automated Testing

Template website for automated testing using [Nightwatch](https://github.com/beatfactor/nightwatch).

## Index

* [Install](#install)
* [Run](#run)

## Install

    sudo npm install nightwatch -g
    git clone git@github.com:oren/automated-testing.git
    cd automated-testing
    wget http://selenium-release.storage.googleapis.com/2.43/selenium-server-standalone-2.43.1.jar

## Setup

    go run example-server.go   # run sample webserver (assumes go installed)
    # open new terminal

## Run Tests

    nightwatch

=>

    [Hello] Test Suite
    ==================

    Running:  testTitle

    ✔  Element <body> was visible after 64 milliseconds.
    ✔  Testing if element <.title> contains text: "Nightwatch".

    OK. 2 total assertions passed. (2.246s)
