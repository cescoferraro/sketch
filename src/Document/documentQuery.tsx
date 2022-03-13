import { gql } from "@apollo/client";

export const DocumentQuery = gql`
  query GetSketchDocument($shortId: String!) {
    share(shortId: $shortId) {
      shortId
      identifier
      version {
        document {
          name
          artboards {
            entries {
              id
              name
              isArtboard
              files {
                url
                height
                width
                scale
                thumbnails {
                  url
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
`;
