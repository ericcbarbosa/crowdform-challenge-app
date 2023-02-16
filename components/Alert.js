import { Modal, StyleSheet, View } from 'react-native';
import colors from "../theme/colors";
import Button from "./Button";

export default function Alert({ visible, onClose, children }) {
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={visible}
      onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {children}

          <Button
            onPress={onClose}
            title="OK"
            style={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    marginTop: 15,
    display: 'flex',
    width: '100%',
    padding: 5,
    height: 40,
    minWidth: 60,
  },
  buttonClose: {
    backgroundColor: colors.primary,
  },
});
