
import React from 'react';
import {ScrollView, SafeAreaView, View, Text } from 'react-native';
import SchoolImageCard from '../components/SchoolImageCard';
import SiteHeaderComponent from '../components/SiteHeaderComponent';

function SudScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
      <SiteHeaderComponent
         imageSource="https://inphb.ci/static/media/SiteSud.8d60a40fc4177a07cebc.jpg" 
         headingText="Site du Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteSud.8d60a40fc4177a07cebc.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteSud2.efa137031d58130fb3f9.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteSud3.5deff3c7f79f2664d30c.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteSud5.4e6097bbfe1887e4cb20.jpg"
        name="Site Sud"
      />
      <SchoolImageCard
        imageUrl="https://inphb.ci/static/media/SiteSud6.df1e344005c77a58d5a5.jpg"
        name="Site Sud"
      />
    </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default SudScreen;
