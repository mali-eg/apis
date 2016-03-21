#!/bin/bash

DIRECTORY=`dirname $0`;

PATTERN=$1;

cd $DIRECTORY/data_src;

find . -type d|while read dname; do
  mkdir -p ../test_data/$dname;
done
find . -name "$PATTERN.txt"|while read fname; do
  filePath=`dirname $fname`;
  withoutSuffix=`basename -a -s.txt $fname`;
  echo processing $filePath/$withoutSuffix;
  cat $fname | node ../convert_response_file.js > ../test_data/$filePath/$withoutSuffix.json;
done

cd -;
