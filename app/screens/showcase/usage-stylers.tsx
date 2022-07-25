import React, { useRef } from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';

import Stylers from '../../stylo/stylers';

const data = [
  {
    name: 'Narayan Naresh Nathani',
    profileUrl: require('../../images/face-icon-1.png'),
    role: 'UI Developer',
  },
  {
    name: 'Sumitra Suresh Sundaram',
    profileUrl: require('../../images/face-icon-2.png'),
    role: 'UX Designer',
  },
  {
    name: 'Indumati Indraneel Iyengar',
    profileUrl: require('../../images/face-icon-3.png'),
    role: 'Software Developer',
  },
];

const UsageStylersShowCase = () => {
  const styles = useRef({
    screen: Stylers.useViewStyles(['Screen']),
    screenHeader: Stylers.useViewStyles(['Screen.Header', 'Padding']),
    screenTitle: Stylers.useTextStyles(['H1']),
    screenBody: Stylers.useViewStyles(['Screen.Body', 'Padding']),
    listTitle: Stylers.useTextStyles(['H3', 'Margin.Bottom.Large']),
    list: Stylers.useViewStyles([
      'List',
      'Border.Radius',
      'BackgroundColor.Alpha10',
      'Margin.Bottom.Large',
    ]),
    listItem: Stylers.useViewStyles(['List.Item', 'Border.Top']),
    listLastItem: Stylers.useViewStyles(['List.Item']),
    listItemLeft: Stylers.useViewStyles(['List.Item.Left']),
    listItemBody: Stylers.useViewStyles(['List.Item.Body']),
    name: Stylers.useTextStyles(['Bold.Semi']),
    role: Stylers.useTextStyles(['Color.Secondary', 'Small']),
    avatar: Stylers.useImageStyles(['Avatar']),
  }).current;

  return (
    <View style={styles.screen}>
      <SafeAreaView />
      <View style={styles.screenHeader}>
        <Text style={styles.screenTitle}>Usage</Text>
      </View>
      <View style={styles.screenBody}>
        <Text style={styles.listTitle}>Stylers</Text>
        <View style={styles.list}>
          {data.map((it, index) => (
            <View
              key={index}
              style={index > 0 ? styles.listItem : styles.listLastItem}>
              <View style={styles.listItemLeft}>
                <Image style={styles.avatar} source={it.profileUrl} />
              </View>
              <View style={styles.listItemBody}>
                <Text style={styles.name}>{it.name}</Text>
                <Text style={styles.role}>{it.role}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default UsageStylersShowCase;
