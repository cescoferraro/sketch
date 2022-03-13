import React from "react";
import {gql, useQuery} from "@apollo/client";

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

export const Document = (): React.ReactElement => {
    const {loading, error, data} = useQuery(DocumentQuery, {
        variables: {
            shortId: "26343997-bb48-43ff-a2f7-bd6bc7ef976c"
        }
    });
    console.log(data);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    return (

        <div>
            <h2>Cesco</h2>
        </div>
    );
};