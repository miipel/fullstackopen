#!/bin/sh
npm run build
rm -rf ../../../fullstackopen-part3/build
cp -r build ../../../fullstackopen-part3/