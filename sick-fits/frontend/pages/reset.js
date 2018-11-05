import Reset from '../components/Reset'

const ResetPage = props => (
  <>
    <p>Reset your password! {props.query.resetToken}</p>
    <Reset resetToken={props.query.resetToken} />
  </>
)

export default ResetPage
