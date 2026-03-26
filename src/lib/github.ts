import axios from "axios";

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
  updated_at: string;
}

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  totalStars: number;
}

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "prakash";

export async function getGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await axios.get<GitHubRepo[]>(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github.v3+json",
        },
      }
    );
    return res.data;
  } catch (error) {
    console.error("Failed to fetch GitHub repos:", error);
    return [];
  }
}

export async function getGitHubStats(): Promise<GitHubStats> {
  try {
    const [userRes, reposRes] = await Promise.all([
      axios.get(`https://api.github.com/users/${GITHUB_USERNAME}`),
      axios.get(
        `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`
      ),
    ]);

    const totalStars = reposRes.data.reduce(
      (acc: number, repo: GitHubRepo) => acc + repo.stargazers_count,
      0
    );

    return {
      publicRepos: userRes.data.public_repos,
      followers: userRes.data.followers,
      following: userRes.data.following,
      totalStars,
    };
  } catch (error) {
    console.error("Failed to fetch GitHub stats:", error);
    return {
      publicRepos: 0,
      followers: 0,
      following: 0,
      totalStars: 0,
    };
  }
}
