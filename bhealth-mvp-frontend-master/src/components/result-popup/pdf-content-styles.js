import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

export const stylesPdf = StyleSheet.create({
    viewer: {
        width: '100%',
        height: '100%',
    },
    flexRow: {
      flexDirection: 'row',
      backgroundColor: 'green',
      borderBottom: '2px solid red',
      marginBottom: '25px'
    },
  });