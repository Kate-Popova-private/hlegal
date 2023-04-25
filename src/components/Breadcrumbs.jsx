import {useMatches} from "react-router-dom";
import "../styles/_breadcrumbs.scss"

function Breadcrumbs(props) {
    let matches = useMatches();
    let crumbs = matches
        // first get rid of any matches that don't have handle and crumb
        .filter((match) => Boolean(match.handle?.crumb))
        // now map them into an array of elements, passing the loader
        // data to each one
        .map((match) => match.handle.crumb(match.data));

    return (
        <div className="breadcrumbs">
            {crumbs.map((crumb, index) => (
                <span className={`breadcrumbs__crumb breadcrumbs__crumb_${props.colorTheme}`}
                      key={index}>{crumb}</span>
            ))}
        </div>
    );
}

export default Breadcrumbs;