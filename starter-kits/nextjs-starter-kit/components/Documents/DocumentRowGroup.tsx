import { memo } from "react";
import { getLiveUsers } from "@/lib/actions";
import { useDocumentsFunctionSWR } from "@/lib/hooks";
import { Document } from "@/types";
import { DocumentRow } from "./DocumentRow";
import styles from "@/layouts/Documents/DocumentsList.module.css";

type Props = {
  documents: Document[];
  revalidateDocuments: () => void;
};

export const DocumentRowGroup = memo(
  ({ documents, revalidateDocuments }: Props) => {
    const documentIds = documents.map((doc) => doc.id);

    // If documents ids passed, get live users in rooms, refresh every 10s
    const { data: liveUsers = [] } = useDocumentsFunctionSWR(
      [
        documentIds?.length ? getLiveUsers : null,
        {
          documentIds,
        },
      ],
      { refreshInterval: 10000 }
    );

    return (
      <>
        {documents.map((document) => {
          const others = liveUsers.find(
            (user) => user.documentId === document.id
          )?.users;

          return (
            <DocumentRow
              key={document.id}
              document={document}
              others={others}
              className={styles.row}
              revalidateDocuments={revalidateDocuments}
            />
          );
        })}
      </>
    );
  }
);
