
import React from 'react';
import {ScrollView, SafeAreaView, View, Text } from 'react-native';
import SchoolImageCard from '../components/SchoolImageCard';

function CentreScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteCentre.51b6b4227fcfd3f08a79.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteCentre2.75de2b54bb41e7ea84d7.jpg"
        name="Centre view"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteCentre3.4bafe7dd19470af974b3.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteCentre4.b31cb0fa353c15525e11.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteCentre1.2a3ab8fd6aac452e8b3d.jpg"
        name="Site Sud"
      />
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CentreScreen;
