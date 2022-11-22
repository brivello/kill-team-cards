import { StyleSheet } from '@react-pdf/renderer'
import { MAIN_COLOR, SECONDARY_COLOR, WHITE } from './Constants'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    backgroundColor: MAIN_COLOR,
    width: '2.5in',
    height: '3.5in'
  },
  mainContent: {
    margin: 10,
    padding: 10,
    backgroundColor: WHITE,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    borderRadius: 0.4,
    border: 0.4
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    padding: 3,
    backgroundColor: MAIN_COLOR,
    color: WHITE,
    borderRadius: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    width: 150

  },
  titleText: {
    fontSize: '11px',
    fontFamily: 'Medium'
  },
  nameText: {
    fontSize: '13px',
    fontFamily: 'Bold'
  },
  rulesText: {
    fontSize: '7.5px',
    fontFamily: 'Regular'
  },
  rulesTextBold: {
    fontSize: '7.5px',
    fontFamily: 'Bold'
  },
  rulesTextSM: {
    fontSize: '6.25px',
    fontFamily: 'Regular'
  },
  typeText: {
    fontSize: '8px',
    fontFamily: 'Bold',
    flex: 4

  },
  costText: {
    fontSize: '8px',
    fontFamily: 'Bold',
    flex: 1

  },
  iconContainer: {
    position: 'absolute',
    bottom: 10,
    left: 0,
    right: 0,
    height: 40,
    zIndex: -1
  },
  icon: {
    opacity: 0.5,
    alignSelf: 'center'
  },
  dataSlateContentContainer: {
    flex: 7,
    flexDirection: 'row'
  },
  attributesContainer: {
    marginLeft: -15,
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'space-between',
    paddingBottom: 50
  },
  attributeContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  attributeLabelContainer: {
    height: 25,
    width: 25,
    borderRadius: '50%',
    backgroundColor: SECONDARY_COLOR,
    justifyContent: 'center',
    alignItems: 'center'

  },
  attributeLabel: {
    color: WHITE,
    fontSize: '11px',
    fontFamily: 'Medium'
  },
  attributeValueContainer: {
    zIndex: -0.5,
    marginLeft: -10,
    paddingLeft: 5,
    height: 20,
    width: 30,
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    backgroundColor: WHITE,
    borderColor: MAIN_COLOR,
    border: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  attributeValue: {
    color: MAIN_COLOR,
    fontSize: '9px',
    fontFamily: 'Medium'
  },
  abilitiesContainer: {
    flexDirection: 'column',
    flex: 2.25,
    marginRight: -7.5
  }
})
