import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TermsLabel ({ labelStyle, onTermsPress, onPolicyPress }) {
  return (
    <View style={{display: 'flex', flexWrap: 'wrap', flexDirection: 'row', width: 350 }}>
      <Text style={labelStyle}>
        I am over 18 years of age and I have read and agree to the{' '}
      </Text>

      <Text
        style={{...labelStyle, ...styles.termsLink}}
        onPress={onTermsPress}>
        Terms of Service
      </Text>

      <Text style={labelStyle}>
        {' '}and{' '}
      </Text>

      <Text
        style={{...labelStyle, ...styles.termsLink}}
        onPress={onPolicyPress}>
        Privacy policy
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  termsLink: {
    color: 'black',
    textDecorationLine: 'underline',
  },
});
