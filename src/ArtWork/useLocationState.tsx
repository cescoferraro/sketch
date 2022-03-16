import { GetSketchDocument_share_version_document_artboards_entries } from "../typings/GetSketchDocument";
import { useLocation } from "react-router-dom";

export function useLocationState(): GetSketchDocument_share_version_document_artboards_entries {
  const location = useLocation();
  return location?.state as GetSketchDocument_share_version_document_artboards_entries;
}
