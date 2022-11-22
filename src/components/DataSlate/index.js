/* eslint-disable react/jsx-key */
import React from 'react'
import { Page, Text, View, Image } from '@react-pdf/renderer'
import PropTypes from 'prop-types'

import { dataSlateAttributeKeys } from '../Constants.js'
import Attribute from '../Attribute/index.js'
import { styles } from '../CommonStyles.js'

const DataSlate = ({ dataSlate }) =>
<Page size={{
  width: '2.5in',
  height: '3.5in'
}}>
  <View style={styles.container}>
    <View style={styles.mainContent}>
      <Text style={[styles.nameText, { flex: 0.75 }]}>{dataSlate.name}</Text>
      <View style={styles.dataSlateContentContainer}>
        <View style={styles.attributesContainer}>
          {dataSlateAttributeKeys.map(key =>
            <Attribute
                label={key.toUpperCase()}
                value={dataSlate[key]}
            />
          )}
        </View>
        <View style={styles.abilitiesContainer}>
          {dataSlate.abilities.map(ability => <View key={ability}>
            <Text style={styles.rulesTextBold}>
              {ability.split(': ')[0]}
            </Text>
            <Text style={styles.rulesTextSM}>
            {ability.split(': ')[1]}
            </Text>
            </View>
          )}
          </View>
      </View>
      <View style={styles.iconContainer}>
       <Image style={styles.icon} src='https://www.warhammer-community.com/wp-content/uploads/2018/05/40kHarlequins-May14-Header7jg.jpg' allowDangerousPaths/>
      </View>
    </View>
  </View>
</Page>

DataSlate.propTypes = {
  dataSlate: PropTypes.shape({
    name: PropTypes.string.isRequired,
    m: PropTypes.string.isRequired,
    apl: PropTypes.string.isRequired,
    ga: PropTypes.string.isRequired,
    df: PropTypes.string.isRequired,
    sv: PropTypes.string.isRequired,
    abilities: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
}

export default DataSlate
