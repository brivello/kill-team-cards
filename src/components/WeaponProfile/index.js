/* eslint-disable react/jsx-key */
import React from 'react'
import { Page, Text, View, Image } from '@react-pdf/renderer'
import PropTypes from 'prop-types'
import Attribute from '../Attribute/index.js'
import { weaponProfileAttributeKeys } from '../Constants.js'
import { styles } from '../CommonStyles.js'

const WeaponProfile = ({ weaponProfile }) =>
    <Page size={{
      width: '2.5in',
      height: '3.5in'
    }}>
  <View style={styles.container}>
    <View style={styles.mainContent}>
    <Text style={[styles.nameText, { flex: 0.75 }]}>{weaponProfile.name}</Text>
      <View style={styles.dataSlateContentContainer}>
        <View style={styles.attributesContainer}>
          {weaponProfileAttributeKeys.map(key =>
            <Attribute
                label={key.toUpperCase()}
                value={weaponProfile[key]}
            />
          )}
        </View>
        </View>
      <View style={styles.iconContainer}>
       <Image style={styles.icon} src='https://www.warhammer-community.com/wp-content/uploads/2018/05/40kHarlequins-May14-Header7jg.jpg' allowDangerousPaths/>
      </View>
    </View>
  </View>
</Page>

WeaponProfile.propTypes = {
  weaponProfile: PropTypes.shape({
    name: PropTypes.string.isRequired,
    a: PropTypes.string.isRequired,
    bs: PropTypes.string.isRequired,
    d: PropTypes.string.isRequired
  }).isRequired
}

export default WeaponProfile
