import { Platform } from "react-native";
import {
  check,
  RESULTS,
  request,
  PermissionStatus,
  Permission,
  PERMISSIONS,
  IOSPermission,
  AndroidPermission,
} from "react-native-permissions";

export const isIOS = Platform.OS === "ios";

export const checkForPermission = async (
  permissionOf: AndroidPermission | IOSPermission
) => {
  const response = await check(permissionOf);
  switch (response) {
    case RESULTS.UNAVAILABLE:
    case RESULTS.LIMITED:
    case RESULTS.GRANTED:
    case RESULTS.BLOCKED:
      return response;
    case RESULTS.DENIED:
      return await requestForPermission(permissionOf);
  }
};

export const requestForPermission = async (permissionOf: Permission) =>
  await request(permissionOf);

export const getBooleanForPermission = (permissionStatus: PermissionStatus) => {
  if (!isIOS) {
    if (
      permissionStatus === RESULTS.GRANTED ||
      permissionStatus === RESULTS.LIMITED
    ) {
      return true;
    }
  } else {
    if (permissionStatus === RESULTS.GRANTED) {
      return true;
    }
  }
  return false;
};

export const getStorageOrLibraryPermission = async () => {
  let permission: PermissionStatus;
  if (!isIOS) {
    permission = await checkForPermission(
      PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
    );
  } else {
    permission = await checkForPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
  }
  return getBooleanForPermission(permission);
};

export const getPhotoPermission = async () => {
  let permission: PermissionStatus;
  if (!isIOS) {
    if (Number(Platform.Version) >= 30) {
      permission = await checkForPermission(
        PERMISSIONS.ANDROID.READ_MEDIA_IMAGES
      );
    } else {
      permission = await checkForPermission(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
    }
  } else {
    permission = await checkForPermission(PERMISSIONS.IOS.CAMERA);
  }
  return getBooleanForPermission(permission);
};

export const getVideoPermission = async () => {
  let permission: PermissionStatus;
  if (!isIOS) {
    if (Number(Platform.Version) >= 30) {
      permission = await checkForPermission(
        PERMISSIONS.ANDROID.READ_MEDIA_VIDEO
      );
    } else {
      permission = await checkForPermission(
        PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
      );
    }
  } else {
    permission = await checkForPermission(PERMISSIONS.IOS.CAMERA);
  }
  return getBooleanForPermission(permission);
};

export const getMicrophonePermission = async () => {
  let permission: PermissionStatus;
  if (!isIOS) {
    permission = await checkForPermission(PERMISSIONS.ANDROID.RECORD_AUDIO);
  } else {
    permission = await checkForPermission(PERMISSIONS.IOS.MICROPHONE);
  }
  return getBooleanForPermission(permission);
};

export const getCameraPermission = async () => {
  let permission: PermissionStatus;
  if (!isIOS) {
    permission = await checkForPermission(PERMISSIONS.ANDROID.CAMERA);
  } else {
    permission = await checkForPermission(PERMISSIONS.IOS.CAMERA);
  }
  return getBooleanForPermission(permission);
};
