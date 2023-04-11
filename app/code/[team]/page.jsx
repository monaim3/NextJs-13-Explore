import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';


async function fetchRepo(name) {
  const response = await fetch(
    `https://api.github.com/repos/bradtraversy/${name}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );
  const repo = await response.json();
  return repo;
}
async function TeamDeatils({ params: { team } }) {
  const repo = await fetchRepo(team);

  return (
    <div className='card'>
    <h5>  TeamDeatils :{team}</h5>
    <p>{repo.description}</p>
      <div className='card-stats'>
        <div className='card-stat'>
          <FaStar />
          <span>{repo.stargazers_count}</span>
        </div>
        <div className='card-stat'>
          <FaCodeBranch />
          <span>{repo.forks_count}</span>
        </div>
        <div className='card-stat'>
          <FaEye />
          <span>{repo.watchers_count}</span>
        </div>
      </div>

    <Link href='/code' className='btn btn-back'>
        Back To Repositories
      </Link>
    </div>
  )
}

export default TeamDeatils;