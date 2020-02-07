#!/bin/sh

Red="\033[0;31m"       # Red
Green="\033[0;32m"     # Green
BICyan="\033[1;96m"    # Bold Cyan

# Reset
Color_Off="\033[0m"    # Text Reset

printf "\n\n$BICyan$( echo 'Building..' )$Color_Off"

sh scripts/build.sh

if [ $? == 0 ]
  then
    sh scripts/deploy.sh
fi

