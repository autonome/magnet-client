[![Stories in Ready](https://badge.waffle.io/mozilla-magnet/magnet.png?label=ready&title=Ready)](https://waffle.io/mozilla-magnet/magnet)
# Magnet

> A nearby content discovery client for Android and iOS built with React-Native.

## Setup

0. Make sure that you have node >= v5.11.0 and npm >= 3.8.6
1. Install react-native on your machine: `npm install react-native react-native-cli -g`
2. Clone this project: `git clone git@github.com:mozilla-magnet/magnet.git && cd magnet`
3. Install dependencies: `npm install`
4. Start the development server: `npm start`

## Running on Android

5. Follow the ['running on device' instructions](https://facebook.github.io/react-native/docs/running-on-device-android.html#running-on-device)
6. Run `react-native run-android`

## Running on iOS

5. Install ['Carthage'](https://github.com/Carthage/Carthage) you can use the ['latest release'](https://github.com/Carthage/Carthage/releases). And perform the following from the `ios` directory:
```bash
carthage bootstrap --platform iOS
```
If you already have Carthage installed, this step has been added as part of the `postinstall` npm scripts.

6. Follow the ['running on device' instructions](https://facebook.github.io/react-native/docs/running-on-device-ios.html#content).

If you don't have a team certificate for the Mozilla organization choose your own developer certificate (or create one) and change the bundle indentifier.

## Dev Notes

For building on Mac OS X...

* The default Java on Mac OS X is too old, so you'll need to download and install Java 8.

For iOS Builds...

* If you're seeing the carthage commands failing, you may need to open both the Magnet and MagnetScannerIOS projects in XCode and set the Swift Version option “Use Legacy Swift Language Version” to "Yes" in order to explicitly use the legacy version (2.3).

* If you're seeing the carthage commands failing, you may also need to force 2.3 on the command line when using carthage, eg: TOOLCHAINS=com.apple.dt.toolchain.Swift_2_3 carthage build. More info at https://carpeaqua.com/2016/06/17/picking-your-swift-toolchain-from-xcodebuild/.

* NOTE: Tricky bit here - if you're now seeing Swift compiler errors (fixing these errors is covered below, but keep reading please) when doing "carthage bootstrap ...", you'll need to fix the failing code in the projects in Carthage/Checkouts, and then do "carthage build", because "carthage bootstrap" overwrites your changes by re-checking out the code again.

* If you see Swift compiler errors in the MagnetScannerIOS project about "CBCentralManagerState.PoweredOn". You can fix these by replacing "CBCentralManagerState.PoweredOn" with just ".PoweredOn".

* If you're seeing Swift compiler errors in the MagnetScannerIOS project about "Value of optional type 'String?' not unwrapped; did you mean to use '!' or '?'?", you can fix by appending "!" after the variable. For example "return !url.scheme.isEmpty" turns into "return !url.scheme!.isEmpty".
