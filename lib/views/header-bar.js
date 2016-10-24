
/**
 * Dependencies
 */

var debug = require('../debug')('HeaderBar');
var ReactNative = require('react-native');
var React = require('react');
const { theme, settings } = require('../../config');

var {
  TouchableOpacity,
  StyleSheet,
  Image,
  View,
  Text,
} = ReactNative;

class HeaderBarView extends React.Component {
  render() {
    debug('render');

    var count = '(' + this.props.itemCount + '/100)';
    //var count = '(100/100)';

    return (
      <View style={[styles.root]}>
        <TouchableOpacity style={styles.logo}>
          <Image
            style={styles.logoImage}
            source={require('../images/header-logo.png')}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.count}>
          <Text style={styles.countText}>{count}</Text>
        </TouchableOpacity>
        {this.renderRight()}
      </View>
    )
  }

  componentWillUpdate() {
    // LayoutAnimation.easeInEaseOut();
  }

  renderLeft() {
    return <View style={styles.left}>
    </View>
  }

  renderCloseButton() {
    var visible = !!this.props.expandedMode;
    if (!visible) return;

    debug('render close button');

    return <TouchableOpacity
      testId="close-button"
      style={styles.close}
      onPress={this.props.onClosePressed.bind(this)}>
      <Image
        style={styles.closeImage}
        source={require('../images/header-bar-close.png')}/>
    </TouchableOpacity>
  }

  renderHamburgerButton() {
    var visible = !this.props.expandedMode;
    if (!visible) return;

    debug('render hamburger button');

    return <TouchableOpacity
      testId="hamburger-button"
      style={styles.hamburger}
      onPress={this.props.onMenuPress}>
      <Image
        style={styles.hamburgerImage}
        source={require('../images/header-bar-hamburger.png')}/>
    </TouchableOpacity>
  }

  renderRight() {
    return <View style={styles.right}>
      <TouchableOpacity
        style={styles.settings}
        onPress={this.props.onMenuPress}>
        <Image
          style={styles.settingImage}
          source={require('../images/header-settings-icon.png')}/>
      </TouchableOpacity>
    </View>
  }
}

HeaderBarView.propTypes = {
  style: View.propTypes.style,
  expandedMode: React.PropTypes.bool,
  onClosePressed: React.PropTypes.func,
  onMenuPress: React.PropTypes.func,
  onMorePressed: React.PropTypes.func,
}

const styles = StyleSheet.create({
  root: {
    position: 'relative',
    flexDirection: 'row',
    height: 56,
    borderBottomWidth: 0.7,
    borderBottomColor: '#ddd',
    backgroundColor: '#4a4a4a'
  },

  left: {
    width: 4,
    justifyContent: 'center',
  },

  right: {
    width: 36,
    justifyContent: 'center',
  },

  hamburger: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  hamburgerImage: {
    width: 26,
    height: 14,
  },

  close: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  closeImage: {
    width: 20,
    height: 20,
  },

  logo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
    paddingLeft: 6,
  },

  logoImage: {
    width: 214.5,
    height: 34.5,
  },

  count: {
    width: 82,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 1,
  },

  countText: {
    fontSize: 20,
    color: '#aaa',
    fontFamily: theme.fontLightItalic,
  },

  settings: {
    paddingTop: 1,
    //justifyContent: 'center',
    alignItems: 'center',
  },

  settingImage: {
    //flex: 1,
    width: 22,
    height: 22,
  }
});

/**
 * Exports
 */

module.exports = HeaderBarView;
