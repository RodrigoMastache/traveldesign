import Link from "next/link";

export default function MegaMenu({ data = {}, title }) {
  return (
    <li className="list-unstyled nav-item dropdown has-megamenu">
      <a className="nav-link" href="#" data-bs-toggle="dropdown">
        {title}
      </a>
      <div className="dropdown-menu megamenu rounded-0" role="menu">
        <div className="container">
          <div className="row">
            {Object.entries(data).map(([region, items]) => (
              <div className="col" key={region}>
                <h5>{region}</h5>
                {items.length > 0 && (
                  <ul>
                    {items.map((item) => (
                      <li key={item.documentId}>
                        <Link
                          href={`/destinos/${item.documentId}`}
                          style={{ textTransform: "capitalize" }}
                        >
                          {item.country}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
}
