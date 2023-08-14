import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FilliereComponent = ({ data }) => {
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.column}>{item.path}</Text>
      <View style={styles.specializationsColumn}>
        {item.specializations.map((specialization, index) => (
          <Text key={index} style={styles.specializationText}>
            {specialization}
          </Text>
        ))}
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Table Header */}
      <View style={styles.headerRow}>
        <Text style={styles.headerColumn}>Fillieres</Text>
        <Text style={styles.headerColumn}>Specialisations</Text>
      </View>

      {/* Table Content */}
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  headerRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: 'orange',
    paddingBottom: 5,
    marginBottom: 10,
  },
  headerColumn: {
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 5,
    marginBottom: 10,
  },
  column: {
    flex: 1,
  },
  specializationsColumn: {
    flex: 1,
  },
  specializationText: {
    marginBottom: 2,
    fontSize: 16
  },
});

export default FilliereComponent;
