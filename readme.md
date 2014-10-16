# Automatic Browser Refresh

Template website for automated testing using Nightwatch.

## Index

* [Install](#install)
* [Run](#run)

## Install

    wget http://selenium-release.storage.googleapis.com/2.43/selenium-server-standalone-2.43.1.jar
    sudo npm install nightwatch -g
    git clone git@github.com:oren/automated-testing.git
    cd automated-testing

## Setup

    go run server.go                                   # run the webserver (assumes go installed)
    java -jar selenium-server-standalone-2.43.1.jar    # run the selenium server

## Run Tests

    nightwatch

=>

    [Hello] Test Suite
    ==================

    Running:  testTitle

    ✔  Element <body> was visible after 64 milliseconds.
    ✔  Testing if element <.title> contains text: "Nightwatch".

    OK. 2 total assertions passed. (2.246s)
