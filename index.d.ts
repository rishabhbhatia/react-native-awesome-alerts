import React from 'react';
import { ModalProps } from 'react-native';

export interface AwesomeAlertProps {
  show?: boolean;
  useNativeDriver?: boolean;
  showProgress?: boolean;
  title?: string;
  message?: string;
  closeOnTouchOutside?: boolean;
  closeOnHardwareBackPress?: boolean;
  showCancelButton?: boolean;
  showConfirmButton?: boolean;
  cancelText?: string;
  confirmText?: string;
  onCancelPressed?: () => void;
  onConfirmPressed?: () => void;
  onDismiss?: () => void;
  customView?: JSX.Element | React.ReactNode;
  alertContainerStyle?: object;
  overlayStyle?: object;
  progressSize?: string;
  progressColor?: string;
  contentContainerStyle?: object;
  contentStyle?: object;
  titleStyle?: object;
  messageStyle?: object;
  actionContainerStyle?: object;
  cancelButtonColor?: string;
  cancelButtonTextStyle?: object;
  cancelButtonStyle?: object;
  confirmButtonColor?: string;
  confirmButtonTextStyle?: object;
  confirmButtonStyle?: object;
  modalProps?: ModalProps;
}

declare class AwesomeAlert extends React.Component<AwesomeAlertProps> {}

export default AwesomeAlert;
