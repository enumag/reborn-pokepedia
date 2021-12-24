#!/bin/bash
ionic cap copy
ionic cap update android
ionic cap update ios
cordova-res android --skip-config --copy
cordova-res ios --skip-config --copy