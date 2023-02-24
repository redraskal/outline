import { Share } from "@server/models";
import { presentUser } from ".";

export default function presentShare(share: Share, isAdmin = false) {
  const data = {
    id: share.id,
    documentId: share.documentId,
    documentTitle: share.document?.title,
    documentUrl: share.document?.url,
    published: share.published,
    url: share.canonicalUrl,
    urlId: share.urlId,
    createdBy: presentUser(share.user),
    includeChildDocuments: share.includeChildDocuments,
    lastAccessedAt: share.lastAccessedAt || undefined,
    views: share.views || 0,
    createdAt: share.createdAt,
    updatedAt: share.updatedAt,
  };

  if (!isAdmin) {
    delete data.lastAccessedAt;
  }

  return data;
}
