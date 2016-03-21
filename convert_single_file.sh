#!/bin/bash

DIRECTORY=`dirname $0`;

FILENAME=$1;

inputFilePath=`dirname $FILENAME`;
filePath=`echo $inputFilePath | cut -d '/' -f 2-`;

withoutSuffix=`basename -a -s.txt $FILENAME`;
echo processing $filePath/$withoutSuffix;
cat $FILENAME | node convert_response_file.js > data/$filePath/$withoutSuffix.json;
