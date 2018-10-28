import { Query } from 'react-apollo'
import { gql } from 'graphql-tag'
import SingleItem from '../components/SingleItem'

const Item = props => (
  <div>
    <SingleItem id={props.query.id} />
  </div>
)

export default Item
