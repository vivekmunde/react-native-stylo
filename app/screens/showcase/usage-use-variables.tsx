import React, { useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';

import Stylers from '../../stylo/stylers';

const UsageUseVariablesShowCase = () => {
  const [
    padding,
    paddingLarge,
    margin,
    marginLarge,
    borderRadius,
    fontColor,
    fontSize,
    colorPrimary1,
    colorWhite,
  ] = Stylers.useVariables([
    'Padding',
    'Padding.Large',
    'Margin',
    'Margin.Large',
    'Border.Radius',
    'Font.Color',
    'Font.Size',
    'Color.Primary1',
    'Color.White',
  ]);

  const styles = useRef(
    StyleSheet.create({
      screen: {
        flex: 1,
        backgroundColor: colorPrimary1.toString(),
        padding: Number(paddingLarge),
      },
      screenHeader: {
        paddingVertical: Number(paddingLarge),
      },
      screenBody: {
        padding: Number(padding),
      },
      text: {
        color: fontColor.toString(),
        fontSize: Number(fontSize),
      },
      h1: {
        fontWeight: '500',
        fontSize: 48,
        marginBottom: Number(marginLarge),
      },
      h2: {
        fontWeight: '600',
        fontSize: 32,
        marginBottom: Number(marginLarge),
      },
      paragraph: {
        marginBottom: Number(margin),
      },
      card: {
        padding: Number(padding),
        borderRadius: Number(borderRadius),
        backgroundColor: colorWhite.toString(),
      },
    }),
  ).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.screenHeader}>
        <Text style={[styles.text, styles.h1]}>Usage</Text>
      </View>
      <Text style={[styles.text, styles.h2]}>useVariables()</Text>
      <View style={styles.card}>
        <Text style={[styles.text, styles.paragraph]}>
          Variables are the core configuration values which are used to define
          the themes. Like, colors, paddings, margins etc.
        </Text>
        <Text style={styles.text}>
          The useVariables() hook is used to access the Theme Variables. A
          practical use of the useVariables() hook can be accessing & using the
          theme variable values to define styles inside the StyleSheet.create()
          API.
        </Text>
      </View>
    </View>
  );
};

export default UsageUseVariablesShowCase;
