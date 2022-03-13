/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetSketchDocument
// ====================================================

export interface GetSketchDocument_share_version_document_artboards_entries_files_thumbnails {
  url: string | null;
  height: string | null;
  width: string | null;
}

export interface GetSketchDocument_share_version_document_artboards_entries_files {
  url: string | null;
  height: number | null;
  width: number | null;
  scale: number | null;
  thumbnails: (GetSketchDocument_share_version_document_artboards_entries_files_thumbnails | null)[] | null;
}

export interface GetSketchDocument_share_version_document_artboards_entries {
  id: string | null;
  name: string | null;
  isArtboard: boolean | null;
  files: (GetSketchDocument_share_version_document_artboards_entries_files | null)[] | null;
}

export interface GetSketchDocument_share_version_document_artboards {
  entries: (GetSketchDocument_share_version_document_artboards_entries | null)[] | null;
}

export interface GetSketchDocument_share_version_document {
  name: string | null;
  artboards: GetSketchDocument_share_version_document_artboards | null;
}

export interface GetSketchDocument_share_version {
  document: GetSketchDocument_share_version_document | null;
}

export interface GetSketchDocument_share {
  shortId: string | null;
  version: GetSketchDocument_share_version | null;
}

export interface GetSketchDocument {
  share: GetSketchDocument_share;
}

export interface GetSketchDocumentVariables {
  shortId: string;
}
