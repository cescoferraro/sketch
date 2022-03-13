#!/bin/bash
# generate typescript definition from the backend schema
apollo client:codegen --tsFileExtension=ts \
      --localSchemaFile=schema.graphql --target=typescript --includes='src/**/*' \
      --excludes=node_modules/* --tagName=gql --no-addTypename \
      --passthroughCustomScalars \
      --outputFlat src/typings

rm ./src/typings/globalTypes.ts