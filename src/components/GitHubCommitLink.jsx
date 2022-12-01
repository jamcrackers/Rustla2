const GitHubCommitLink = ({ hash, short }) => (
  <a href={`${GITHUB_URL}/commit/${hash}`}>{short}</a>
);

export default GitHubCommitLink;
