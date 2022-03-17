import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GetSketchDocument } from "../typings/GetSketchDocument";
import { DocumentQuery } from "./documentQuery";
import { QueryResult } from "@apollo/client/react/types/types";

export function useDocumentQuery(): QueryResult<GetSketchDocument> {
  const { id } = useParams();
  return useQuery<GetSketchDocument>(DocumentQuery, {
    variables: { id },
  });
}
