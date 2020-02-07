#!/bin/sh

Red="\033[0;31m"       # Red
Green="\033[0;32m"     # Green
BICyan="\033[1;96m"    # Bold Cyan

# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BICyan$( echo Running linting service )$Color_Off"

source .env

npm run lint

if [ $? != 0 ]
  then exit 1
fi

printf "\n\n$Green$( echo 'Linting successful. Moving on.' )$Color_Off"

printf "\n\n$BICyan$( echo 'Building for production' )$Color_Off"

npm run build