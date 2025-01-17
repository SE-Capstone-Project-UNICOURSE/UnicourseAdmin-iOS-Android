import images from '@app/assets/images';
import { useAppDispatch, useAppSelector } from '@app/stores';
import { hideDialog } from '@app/stores/slices/dialog.slice';
import { DialogType } from '@app/stores/types/dialog.type';
import { Button, Image, Overlay, Text, useTheme } from '@rneui/themed';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

const AppDialog = () => {
  const { theme } = useTheme();
  const dispatch = useAppDispatch();
  const {
    isVisible,
    type,
    content,
    title,
    confirmButtonText = 'OK',
    cancelButtonText = 'Đóng',
    onConfirm,
    onCancel,
    isCustomizeButton,
  } = useAppSelector((state) => state.dialog);

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    } else {
      dispatch(hideDialog());
    }
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      dispatch(hideDialog());
    }
  };

  const getDialogStyles = () => {
    switch (type) {
      case DialogType.ERROR:
        return { color: theme.colors.error, image: images.check_fail };
      case DialogType.WARNING:
        return { color: theme.colors.warning, image: images.check_warning };
      case DialogType.ALERT:
        return { color: theme.colors.primary, image: images.check_info };
      case DialogType.SUCCESS:
        return {
          color: theme.colors.success,
          image: images.check_success,
        };
      case DialogType.NORMAL:
      default:
        return { color: theme.colors.primary, image: images.check_info };
    }
  };

  const { color, image } = getDialogStyles();

  return (
    <Overlay isVisible={isVisible} onBackdropPress={handleCancel} overlayStyle={styles.overlay}>
      <View style={[styles.content, { backgroundColor: theme.colors.background }]}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <Text style={[styles.title, { color }]} numberOfLines={3}>
            {title}
          </Text>
          <Image source={image} style={styles.image} resizeMode="contain" />
          <Text style={[styles.contentText, { color: theme.colors.grey0 }]} numberOfLines={20}>
            {content}
          </Text>
        </ScrollView>
        {!isCustomizeButton && (
          <View style={styles.footer}>
            {type !== DialogType.NORMAL && (
              <Button
                title={cancelButtonText}
                onPress={handleCancel}
                buttonStyle={[styles.button, styles.cancelButton]}
                titleStyle={styles.buttonText}
              />
            )}
            <Button
              title={confirmButtonText}
              onPress={handleConfirm}
              buttonStyle={[styles.button, { backgroundColor: color }]}
              titleStyle={styles.buttonText}
            />
          </View>
        )}
      </View>
    </Overlay>
  );
};

const styles = StyleSheet.create({
  overlay: {
    padding: 0,
    width: '90%',
    borderRadius: 10,
  },
  content: {
    borderRadius: 10,
    padding: 16,
    alignItems: 'center',
  },
  scrollContent: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  image: {
    height: 150,
    width: 150,
    marginBottom: 16,
  },
  contentText: {
    textAlign: 'center',
    marginBottom: 16,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 16,
  },
  button: {
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 10,
    minWidth: 120,
  },
  cancelButton: {
    backgroundColor: '#E0E0E0',
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default AppDialog;
