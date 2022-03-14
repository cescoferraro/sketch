import { Location } from "history";
import { GetSketchDocument_share_version_document_artboards_entries } from "../typings/GetSketchDocument";

export function useLocationState(
  location: Location
): GetSketchDocument_share_version_document_artboards_entries {
  return location?.state as GetSketchDocument_share_version_document_artboards_entries;
}
