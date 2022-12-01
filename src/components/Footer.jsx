import "../css/Footer.scss";
import GitHubCommitLink from "./GitHubCommitLink";

const external_links = [
  {
    href: import.meta.env.DONATE_PAYPAL_URL,
    children: "Paypal",
  },
  {
    href: import.meta.env.DONATE_LINODE_URL,
    children: "Linode",
  },
  {
    href: import.meta.env.DONATE_DO_URL,
    children: "DigitalOcean",
  },
  {
    href: import.meta.env.GITHUB_URL,
    children: "GitHub",
  },
];

const Footer = () => (
  <footer>
    <div className="text-muted">
      <ul className="footer-list">
        <li>Strims.gg</li>
        <li>
          Support us via{"\u00a0"}
          {external_links
            .filter(({ href }) => href)
            .map((props, i) => (
              <a key={i} {...props} target="_blank" rel="noopener noreferrer" />
            ))
            .reduce((acc, curr, i, arr) => {
              acc.push(curr);
              if (i !== arr.length - 1) {
                acc.push(",\u00a0");
              }
              return acc;
            }, [])}
        </li>
        <li>
          {CHAT_URL && (
            <React.Fragment>
              <a href={CHAT_URL}>Chat</a>
            </React.Fragment>
          )}
        </li>
        <li>
          <a href="/api">API</a>
        </li>
        <li>
          Version{" "}
          <GitHubCommitLink
            hash={GIT_COMMIT_HASH}
            short={GIT_SHORT_COMMIT_HASH}
          />
        </li>
      </ul>
    </div>
  </footer>
);
export default Footer;
