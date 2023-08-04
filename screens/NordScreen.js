
import React from 'react';
import {ScrollView, SafeAreaView, View, Text } from 'react-native';
import SchoolImageCard from '../components/SchoolImageCard';

function NordScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteNord1.29fa9562182d105df486.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteNord3.d8ab756659a03e7ed445.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteNord4.6539d9c82f383f32cacb.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteNord2.99407f1b3739669c6ca7.jpg"
        name="Site Sud"
      />
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default NordScreen;

