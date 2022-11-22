
import React from 'react'
import { Page, Text, View, Image } from '@react-pdf/renderer'
import { styles } from '../CommonStyles'
import PropTypes from 'prop-types'

const Equipment = ({ equipment }) =>
<Page size={{
  width: '2.5in',
  height: '3.5in'
}}>
  <View style={styles.container}>
    <View style={styles.mainContent}>
      <Text style={[styles.titleText, { flex: 1 }]}>{equipment.title}</Text>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.typeText}>{equipment.type}</Text>
          <Text style={styles.costText}>{equipment.cost}</Text>
        </View>
      </View>
      <Text style={[styles.rulesText, { flex: 5 }]}>{equipment.body}</Text>
      <View style={styles.iconContainer}>
    <Image style={styles.icon} src='https://www.warhammer-community.com/wp-content/uploads/2018/05/40kHarlequins-May14-Header7jg.jpg' allowDangerousPaths/>
  </View>
    </View>
  </View>
</Page>

Equipment.propTypes = {
  equipment: PropTypes.shape({
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    cost: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
}

export default Equipment
