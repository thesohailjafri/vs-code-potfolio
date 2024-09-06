import { Repo } from '@/types/type'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { FaGithubAlt } from 'react-icons/fa6'
import { PiEyesFill, PiGitFork, PiLink, PiStar } from 'react-icons/pi'

type Props = {
  repo: Repo
}

export default function RepoCard({ repo }: Props) {
  return (
    <Box>
      <Box>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
      </Box>
      <Box>
        <Box>
          <Box>
            <PiEyesFill /> {repo.watchers}
          </Box>
          <Box>
            <PiGitFork /> {repo.forks}
          </Box>
          <Box>
            <PiStar /> {repo.stargazers_count}
          </Box>
        </Box>
        <Box>
          <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
            <FaGithubAlt height={20} width={20} />
          </a>
          {repo.homepage && (
            <a href={repo.homepage} target="_blank" rel="noopener noreferrer">
              <PiLink height={20} width={20} />
            </a>
          )}
        </Box>
      </Box>
    </Box>
  )
}
