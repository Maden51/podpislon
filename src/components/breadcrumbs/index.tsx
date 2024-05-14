import { Link } from "react-router-dom";
import PageLayout from "../page-layout";

type Breadcrumbs = {
  breadcrumbs: {link?: string, label: string}[];
  className: string;
  classNameDisabled: string;
}

function Breadcrumbs({breadcrumbs, className, classNameDisabled}: Breadcrumbs) {
  return (  
    <PageLayout>
        <ul className={className}>
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index}>
              {index > 0 && <span className="mx-1">/</span>}
              {breadcrumb.link ? (
                <Link className="hover:text-orange transition-colors" to={breadcrumb.link}>{breadcrumb.label}</Link>
              ) : (
                <span className={classNameDisabled}>{breadcrumb.label}</span>
              )}
            </li>
          ))}
        </ul>
    </PageLayout>
  )
}

export default Breadcrumbs;