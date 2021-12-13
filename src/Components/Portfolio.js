import React from "react";

const Portfolio = ({ data }) => {
	if (data) {
		var projects = data.projects.map(function (projects) {
			var projectImage = "images/portfolio/" + projects.image;
			return (
				<div key={projects.title} className="columns portfolio-item">
					<div className="item-wrap">
						<a
							href={projects.url}
							title={projects.title}
							target="_blank"
							rel="noreferrer"
						>
							<img alt={projects.title} src={projectImage} />
							<div className="overlay">
								<div className="portfolio-item-meta">
									<h5>{projects.title}</h5>
									<p>{projects.category}</p>
								</div>
							</div>
							<div className="link-icon">
								<i className="fa fa-link"></i>
							</div>
						</a>
					</div>
				</div>
			);
		});
	}

	return (
		<section id="portfolio">
			<div className="row">
				<div className="twelve columns collapsed">
					<h1>Check Out Some of My Work!</h1>

					<div
						id="portfolio-wrapper"
						className="bgrid-quarters s-bgrid-thirds cf"
					>
						{projects}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Portfolio;
