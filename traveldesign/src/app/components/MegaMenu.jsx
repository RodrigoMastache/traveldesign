import Link from "next/link";
import { destinationsData, experiencesData } from "../mockups/megaMenu";

export default function MegaMenu({ title, type }) {
  const data = type === "destinations" ? destinationsData : experiencesData;

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
                      <li key={item}>
                        <Link href="#">{item}</Link>
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
