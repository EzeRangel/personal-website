import type { ClientEntry } from "@/lib/content";
import type { Messages } from "@/lib/i18n";

type ClientTableProps = { clients: ClientEntry[]; copy: Messages["work"]["index"]["clients"] };

// A real table on desktop (Client · What I built · Role · Year · Link). Below 640 px each row
// becomes a block and the cells take their column name from data-label.
export function ClientTable({ clients, copy }: ClientTableProps) {
  const { columns } = copy;
  return (
    <div className="cl-wrap">
      <table className="cl-table">
        <caption className="er-sr">{copy.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{columns.client}</th>
            <th scope="col">{columns.built}</th>
            <th scope="col">{columns.role}</th>
            <th scope="col">{columns.year}</th>
            <th scope="col">{columns.link}</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.slug}>
              <th scope="row" data-label={columns.client}>
                {client.confidential ? copy.confidential : client.name}
              </th>
              <td data-label={columns.built}>{client.line}</td>
              <td data-label={columns.role}>{client.role}</td>
              <td className="er-tabular" data-label={columns.year}>
                {client.year}
              </td>
              <td data-label={columns.link}>
                {client.confidential ? (
                  <span className="er-meta">{copy.underNda}</span>
                ) : client.url ? (
                  <a
                    className="er-link"
                    href={client.url}
                    rel="noopener"
                    data-track="client_link_click"
                    data-track-client={client.slug}
                  >
                    {new URL(client.url).host.replace(/^www\./, "")} ↗
                  </a>
                ) : (
                  <span className="er-meta">
                    <span aria-hidden="true">—</span>
                    <span className="er-sr">{copy.noLink}</span>
                  </span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
