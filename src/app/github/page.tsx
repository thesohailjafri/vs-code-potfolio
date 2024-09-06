'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import GitHubCalendar from 'react-github-calendar'
import RepoCard from '../components/RepoCard'
import { Link } from '@chakra-ui/next-js'

export default function Page() {
  const [user, setUser] = useState(null)
  const [repos, setRepos] = useState([])
  const theme = {
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  }
  // Fetch GitHub data when the component mounts
  useEffect(() => {
    async function fetchGitHubData() {
      // Fetch user data
      const userRes = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_API_KEY}`,
          },
        },
      )
      const userData = await userRes.json()
      setUser(userData)

      // Fetch repositories and sort them
      const repoRes = await fetch(
        `https://api.github.com/users/${process.env.NEXT_PUBLIC_GITHUB_USERNAME}/repos?per_page=100`,
        {
          headers: {
            Authorization: `token ${process.env.GITHUB_API_KEY}`,
          },
        },
      )
      let reposData = await repoRes.json()
      reposData = reposData
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 6)
      setRepos(reposData)
    }

    fetchGitHubData()
  }, [])

  if (!user) return <div>Loading...</div>

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
