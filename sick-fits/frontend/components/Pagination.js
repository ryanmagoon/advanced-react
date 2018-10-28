import React from 'react'
import PaginationStyles from './styles/PaginationStyles'
import gql from 'graphql-tag'
import { Query } from 'react-apollo'
import Head from 'next/head'
import Link from 'next/link'
import { perPage } from '../config'
import Error from './ErrorMessage'

const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    itemsConnection {
      aggregate {
        count
      }
    }
  }
`

const Pagination = ({ page }) => (
  <Query query={PAGINATION_QUERY}>
    {({ data, loading, error }) => {
      if (loading) return <p>Loading...</p>
      if (error) return <Error error={error} />
      const { count } = data.itemsConnection.aggregate
      const pages = Math.ceil(count / perPage)
      return (
        <PaginationStyles>
          <Head>
            <title>
              Sick Fits! — Page {page} of {pages}
            </title>
          </Head>
          <Link
            href={{
              pathname: 'items',
              query: { page: page - 1 }
            }}
          >
            <a aria-disabled={page <= 1}>👈🏻 Prev</a>
          </Link>
          <p>
            Page {page} of {pages}!
          </p>
          <p>{count} Total Items</p>
          <Link
            href={{
              pathname: 'items',
              query: { page: page + 1 }
            }}
          >
            <a aria-disabled={page >= pages}>Next 👉🏻</a>
          </Link>
        </PaginationStyles>
      )
    }}
  </Query>
)

export default Pagination
