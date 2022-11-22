import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from '@react-pdf/renderer'
import { styles } from '../CommonStyles'

const Attribute = ({ label, value }) => <View style={styles.attributeContainer}>
  <View style={styles.attributeLabelContainer}>
    <Text style={styles.attributeLabel}>{label}</Text>
  </View>
  <View style={styles.attributeValueContainer}>
    <Text style={styles.attributeValue}>{value}</Text>
  </View>
</View>

Attribute.propTypes = {
  label: PropTypes.isRequired,
  value: PropTypes.isRequired
}

export default Attribute
