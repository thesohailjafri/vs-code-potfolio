// app/page.tsx
'use client'
import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import RepoCard from '../components/RepoCard'
import { Link } from '@chakra-ui/next-js'

export async function getStaticProps() {
  const userRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    },
  )
  const user = await userRes.json()

  const repoRes = await fetch(
    `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
    {
      headers: {
        Authorization: `token ${process.env.GITHUB_API_KEY}`,
      },
    },
  )
  let repos = await repoRes.json()
  repos = repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 6)

  return {
    props: { title: 'GitHub', repos, user },
    revalidate: 10,
  }
}
export default function Page() {
  return (
    <>
      <div>
        <div>
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={50}
            height={50}
          />
          <h3>{user.login}</h3>
        </div>
        <div>
          <h3>{user.public_repos} repos</h3>
        </div>
        <div>
          <h3>{user.followers} followers</h3>
        </div>
      </div>
      <div>
        {repos.map((repo) => (
          <RepoCard key={repo.id} repo={repo} />
        ))}
      </div>
      <div>
        <GitHubCalendar
          username={process.env.NEXT_PUBLIC_GITHUB_USERNAME}
          theme={theme}
          hideColorLegend
          hideMonthLabels
        />
      </div>
    </>
  )
}
