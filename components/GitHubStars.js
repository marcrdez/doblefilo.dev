import React, { useEffect, useState } from "react";
import styles from "../styles/GitHubStars.module.css";

const GitHubStars = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/marcrdez/repos?sort=stars&per_page=5`,
        );
        const data = await response.json();
        const sortedData = data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count,
        );
        setRepos(sortedData);
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      }
    };

    fetchRepos();
  }, []);

  return (
    <div>
      <h3 className={styles.centered}>Starred projects</h3>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Stars</th>
          </tr>
        </thead>
        <tbody>
          {repos.map((repo) => (
            <tr key={repo.id}>
              <td>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {repo.name}
                </a>
              </td>
              <td>{repo.stargazers_count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default GitHubStars;
