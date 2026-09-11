import { NextResponse } from 'next/server';

const GITHUB_API_URL = 'https://api.github.com/graphql';
const GITHUB_USERNAME = 'kazi331';

const repositoriesQuery = `
  query PortfolioRepositories($login: String!) {
    user(login: $login) {
      pinnedItems(first: 6, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            url
            description
            updatedAt
            stargazerCount
            forkCount
            repositoryTopics(first: 3) { nodes { topic { name } } }
            languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
              edges { size node { name color } }
            }
          }
        }
      }
      repositories(first: 12, orderBy: { field: UPDATED_AT, direction: DESC }, privacy: PUBLIC, ownerAffiliations: OWNER) {
        nodes {
          id
          name
          url
          description
          updatedAt
          stargazerCount
          forkCount
          repositoryTopics(first: 3) { nodes { topic { name } } }
          languages(first: 2, orderBy: { field: SIZE, direction: DESC }) {
            edges { size node { name color } }
          }
        }
      }
    }
  }
`;

type GithubLanguage = { name: string; color: string | null };
type GithubRepositoryNode = {
    id: string;
    name: string;
    url: string;
    description: string | null;
    updatedAt: string;
    stargazerCount: number;
    forkCount: number;
    repositoryTopics: { nodes: { topic: { name: string } }[] };
    languages: { edges: { size: number; node: GithubLanguage }[] };
};

type GithubResponse = {
    data?: {
        user: {
            pinnedItems: { nodes: (GithubRepositoryNode | null)[] };
            repositories: { nodes: GithubRepositoryNode[] };
        };
    };
    errors?: { message: string }[];
};

export async function GET() {
    const token = process.env.GITHUB_TOKEN;

    if (!token) {
        return NextResponse.json(
            { error: 'GitHub integration is not configured. Add GITHUB_TOKEN to the environment.' },
            { status: 503 }
        );
    }

    try {
        const response = await fetch(GITHUB_API_URL, {
            method: 'POST',
            headers: {
                Accept: 'application/vnd.github+json',
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query: repositoriesQuery, variables: { login: GITHUB_USERNAME } }),
            next: { revalidate: 900 },
        });

        const payload = await response.json() as GithubResponse;
        if (!response.ok || payload.errors?.length || !payload.data?.user) {
            return NextResponse.json(
                { error: payload.errors?.[0]?.message || 'GitHub repository request failed.' },
                { status: 502 }
            );
        }

        const pinned = payload.data.user.pinnedItems.nodes
            .filter((repository): repository is GithubRepositoryNode => Boolean(repository))
            .map((repository) => ({ ...repository, isPinned: true }));
        const pinnedIds = new Set(pinned.map((repository) => repository.id));
        const recent = payload.data.user.repositories.nodes
            .filter((repository) => !pinnedIds.has(repository.id))
            .map((repository) => ({ ...repository, isPinned: false }));

        const repositories = [...pinned, ...recent].slice(0, 6).map((repository) => ({
            id: repository.id,
            name: repository.name,
            url: repository.url,
            description: repository.description,
            updatedAt: repository.updatedAt,
            stars: repository.stargazerCount,
            forks: repository.forkCount,
            topics: repository.repositoryTopics.nodes.map(({ topic }) => topic.name),
            languages: repository.languages.edges.map(({ node }) => node),
            isPinned: repository.isPinned,
        }));

        return NextResponse.json({ repositories });
    } catch {
        return NextResponse.json({ error: 'Unable to reach GitHub right now.' }, { status: 502 });
    }
}
