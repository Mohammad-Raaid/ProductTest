
import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { productData } from './ProductsData';
const App = () => {

  const colors = ["Red", "Blue", "Green"]
  const renderProduct = (item) => {
    return (
      <View key={item._id} style={styles.productCardContainer}>
        <View style={styles.firstContainer}>
          {/* <Image source={{ uri: item.picture }} style={styles.productImage} /> */}
          <Image source={require("./image.jpg")} resizeMode="cover" style={styles.productImage} />
          <View style={styles.productDetailsContainer}>
            <Text style={styles.productNameText}>
              {item.productName}
            </Text>
            <Text style={styles.productPriceText}>
              <Text style={styles.titleText}>Price:</Text> {item.price}
            </Text>
            <Text style={styles.productBrandText}>
              <Text style={styles.titleText}>Brands:</Text> {item.brands.map(u => u.name).join(', ')}
            </Text>
          </View>
        </View>
        <View style={styles.secondContainer}>
          <Text style={{ ...styles.titleText, color: "#000" }}>Colors</Text>
          <View style={styles.radioContainerView}>
            {colors.map((e) => {
              return (
                <View key={e} style={styles.radioContainer}>
                  <View style={styles.radioButton}>
                    {
                      item.colors.filter(c => e == c).length > 0
                      &&
                      <View style={styles.radioButtonDot} />
                    }
                  </View>
                  <Text style={styles.radioText}>
                    {e}
                  </Text>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor="#fff" />
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          Products
        </Text>
      </View>
      <ScrollView>
        {
          productData.map(renderProduct)
        }
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    flex: 1
  },
  headerContainer: {
    borderWidth: .5,
    height: 45,
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  headerText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600"
  },
  productCardContainer: {
    borderBottomWidth: .5,
    padding: 20,
  },
  firstContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  productImage: {
    height: 100,
    width: 100,
    borderRadius: 75
  },
  productDetailsContainer: {
    marginLeft: 10,
    width: Dimensions.get("window").width / 1.6
  },
  productNameText: {
    color: "#000",
    fontWeight: "400",
  },
  titleText: {
    fontWeight: "600"
  },
  productPriceText: {
    color: "#000",
    marginTop: 5
  },
  productBrandText: {
    color: "#000",
    marginTop: 5,
    lineHeight: 20
  },
  secondContainer: {
    marginTop: 10
  },
  radioContainerView: {
    flexDirection: "row",
    marginTop: 10
  },
  radioContainer: {
    flexDirection: "row",
    marginRight: 10,
  },
  radioButton: {
    borderWidth: 1,
    height: 20,
    width: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  radioButtonDot: {
    height: 10,
    width: 10,
    borderRadius: 10,
    backgroundColor: "#000"
  },
  radioText: {
    color: "#000",
    marginLeft: 5
  }
});

export default App;
6