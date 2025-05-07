/*
 * © 2025 Aleksandr Gumroian (https://aleksan4eg.dev)
 *
 * This is free software, licensed under the GNU General Public License v3.
 * See /LICENSE for more information.
 */

/*
 * This file contains GraphQL queries for the Literal API.
 * Literal API website: https://literal.club/pages/api
 * The queries are used to fetch data from the API.
 */

export const fetchBooksQuery = `
query fetchBooksByStatus(
  $limit: Int!
  $offset: Int!
  $status: ReadingStatus!
  $userId: String!
) {
  booksByReadingStateAndProfile(
    limit: $limit
    offset: $offset
    readingStatus: $status
    profileId: $userId
  ) {
    ... on Book {
      id
      slug
      cover
      title
      authors {
        name
      }
    }
  }
}
`;

export const fetchProgressQuery = `
query fetchProgress($bookIds: [String!]!, $isActive: Boolean) {
  readingProgresses(bookIds: $bookIds, active: $isActive) {
    ... on ReadingProgress {
      bookId
      progress
      capacity
      completed
    }
  }
}
`;
