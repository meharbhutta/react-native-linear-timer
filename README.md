# react-native-linear-timer
Linear Timer component for React Native

<a href="https://twitter.com/intent/follow?screen_name=meharbhutta">
    <img 
        src="https://img.shields.io/twitter/follow/meharbhutta.svg?style=social&logo=twitter"
        alt="follow on Twitter"
    >
</a>

## NPM

- stable release version: ![version](https://img.shields.io/badge/version-1.1.0-blue.svg?cacheSeconds=2592000)
- package downloads: ![downloads](https://img.shields.io/badge/downloads-22%2Fweek-brightgreen.svg?cacheSeconds=2592000)
- [![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)

## Show Cases

| **IOS** | **Android** |
| :---------------------------------- | :------------------------------------ |
| ![](https://raw.githubusercontent.com/meharbhutta/react-native-linear-timer/master/example/screenshot-ios.gif) | ![](https://raw.githubusercontent.com/meharbhutta/react-native-linear-timer/master/example/screenshot-android.gif) |

## Getting Started

### Installation

```bash
npm i react-native-linear-timer --save
```

### Basic Usage

- Install react-native-cli first

```bash
$ npm install -g react-native-cli
```

### Note: [GUIDE](https://facebook.github.io/react-native/docs/getting-started)

- Initialization of a react-native project

```bash
$ react-native init AwesomeProject
```

- Then, edit `AwesomeProject/App.js`, like this:

```javascript
import * as React from 'react';
import { View } from 'react-native';
import LinearTimer from 'react-native-linear-timer';

type Props = {}
export default class App extends React.Component<Props> {
    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white'
                }}
            >
            <LinearTimer
                min={2}
                onTimeElapsed={() => {
                    console.log('Timer Finished!');
                }}
            />
        </View>
        );
    }
}
```

### Props

| parameter | type  | required | description | default |
| :--------------------- | :------------------------------------------------------------------------------------- | :------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :-------------------------------------------------------- |
| min | number | yes |  Time in minutes  |  |
| height | number | no | The height of the component | `38` |
| rermainingEndThreshold | number | no | The threshold width after which the remaining end color change | `10` |
| elapsedIndicatorColor | string | no | The elapsed time indicator color | `"#A8C3BC"` |
| remainingIndicatorColor | string | no | The remaining time indicator color | `"#0E3657"` |
| rermainingEndIndicatorColor | string | no | The remaining end time indicator color after threshold | `"#cc0000"` |
| style | object | no | To override the timer style | default |
| textStyle | object  | no | To override the text style | default |
| onTimeElapsed | function | no | Callback for the timer end | () => {} |

### To run example

```bash
cd example
npm install
react-native run-android (For android)
react-native run-ios (For ios)
```

#### In case of any issue follow the [GUIDE](https://facebook.github.io/react-native/docs/getting-started).
