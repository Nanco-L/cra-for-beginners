import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SUMMARY_MAX = 250;

const cutSummary = (summary) => {
    const slicedSummary = summary.slice(0, SUMMARY_MAX).split(" ");
    return slicedSummary.slice(0, slicedSummary.length - 1).join(" ");
};
function Movie({ id, coverImg, title, summary, genres }) {
    return (
        <div>
            <img src={coverImg} alt={title} />
            <h2>
                <Link to={`/movie/${id}`}>{title}</Link>
            </h2>
            <p>
                {summary.length > SUMMARY_MAX
                    ? `${cutSummary(summary)}...`
                    : summary}
            </p>
            <ul>
                {genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
