import { gql } from "@apollo/client";

export const DocumentQuery = gql`
  query GetSketchDocument($id: String!) {
    share(id: $id) {
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
