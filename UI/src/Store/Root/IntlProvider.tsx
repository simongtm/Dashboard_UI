import { connect } from 'react-redux'
import { IntlProvider } from 'react-intl'
import { IState } from './RootState'

function defaultSelector(state) {
  const { intl } = state
  return {
    key: intl.locale,
    ...intl
  }
}

const mapStateToProps = (state:IState, { intlSelector = defaultSelector }) =>
  intlSelector(state)

export default connect(mapStateToProps)(IntlProvider)