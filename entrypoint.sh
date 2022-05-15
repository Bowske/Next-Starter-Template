#!/bin/bash

echo "Starting to install node packages (yarn install)"
echo "It may take few minutes if packages are not already installed"
echo "Please wait..."
yarn

echo "Starting application..."
yarn dev
