import React, { memo, useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import TextInput from '../components/TextInput';
import BackButton from '../components/BackButton';
import { theme } from '../core/theme';
import { emailValidator, passwordValidator } from '../core/utils';
import { Navigation } from '../types';
import {
    getCameraPermission,
    getMicrophonePermission,
    getPhotoPermission,
    getStorageOrLibraryPermission,
    getVideoPermission,
  } from '../permission';


  const [hasStoragePermission, setHasStoragePermission] =
  useState<boolean>(false);

  const [hasCameraPermission, setHasCameraPermission] =
    useState<boolean>(false);
