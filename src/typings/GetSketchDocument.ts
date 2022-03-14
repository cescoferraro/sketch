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
  url: string;
  height: number;
  width: number;
  scale: number;
  thumbnails: GetSketchDocument_share_version_document_artboards_entries_files_thumbnails[];
}

export interface GetSketchDocument_share_version_document_artboards_entries {
  id: string;
  name: string;
  isArtboard: boolean;
  files: GetSketchDocument_share_version_document_artboards_entries_files[];
}

export interface GetSketchDocument_share_version_document_artboards {
  entries: GetSketchDocument_share_version_document_artboards_entries[];
}

export interface GetSketchDocument_share_version_document {
  name: string | null;
  artboards: GetSketchDocument_share_version_document_artboards;
}

export interface GetSketchDocument_share_version {
  document: GetSketchDocument_share_version_document;
}

export interface GetSketchDocument_share {
  shortId: string | null;
  identifier: string;
  version: GetSketchDocument_share_version | null;
}

export interface GetSketchDocument {
  share: GetSketchDocument_share;
}

export interface GetSketchDocumentVariables {
  shortId: string;
}
