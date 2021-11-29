/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  Button,
  FlatList,
  Text,
} from 'react-native';
import Spinner from 'react-native-spinkit';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HeroSection, ForcastList} from './components';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      error: null,
      enabled: false,
      days: [],
    };
  }

  componentDidMount() {
    // Add Geolocation default option
    this.fetchWeather();
  }

  fetchWeather = (city = 'Ontario') => {
    this.setState({isLoading: true, location: city});
    fetch(`${WEATHER_API_URL}${city}?unitGroup=us&key=${WEATHER_API_KEY}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          days: json.days,
          isLoading: false,
        });
      })
      .catch(error =>
        this.setState({
          error: `Oops, something went wrong 😅. Try restarting the app.  `,
          isLoading: false,
        }),
      );
  };

  renderCityList = ({item}) => {
    const {isLoading} = this.state;
    return (
      <View style={styles.sectionContainer} key={item}>
        <Button
          disabled={isLoading}
          title={item}
          onPress={() => this.fetchWeather(item)}
        />
      </View>
    );
  };

  render() {
    const {isLoading, days, error} = this.state;

    if (isLoading) {
      return (
        <View style={styles.emptyContainer}>
          <Spinner type="FadingCircleAlt" size={40} color={lightGrey} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.emptyContainer}>
          <Text>{error}</Text>
        </View>
      );
    }

    return (
      <SafeAreaView>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <HeroSection {...days[0]} />
          <ForcastList data={days.slice(2, 8)} />
          <View
            style={{
              backgroundColor: Colors.white,
            }}>
            <View style={styles.sectionContainer}>
              <Button
                disabled={isLoading}
                title="Ontario"
                onPress={() => this.fetchWeather('Ontario')}
              />
            </View>
            <FlatList
              data={cities}
              renderItem={this.renderCityList}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const cities = ['Brooklyn', 'Alberta', 'Toronto', 'Los Angeles', 'London'];
const lightGrey = '#c7c6c4';
const WEATHER_API_KEY = 'YOUR KEY HERE';
const WEATHER_API_URL =
  'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 12,
    paddingHorizontal: 24,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
  },
});

export default App;
