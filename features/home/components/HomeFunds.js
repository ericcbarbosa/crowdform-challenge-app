import {FlatList, StyleSheet, Text, View} from "react-native";
import Card from "../../../components/Card";

export default function HomeFunds({ funds, onPress }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Funds</Text>

      <FlatList
        data={funds}
        horizontal={true}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        renderItem={({item}) => (
          <Card
            name={item.name}
            color={item.color}
            id={item.id}
            icon={item.icon}
            value={item.value}
            percentStatus={item.percentStatus}
            onPress={onPress}
          />
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 20,
  },
  list: {},
})
