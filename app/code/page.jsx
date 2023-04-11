import Link from 'next/link';
import { FaStar, FaCodeBranch, FaEye } from 'react-icons/fa';
import { resolve } from 'styled-jsx/css';

async function teamfethcApi() {
    const res = await fetch('https://api.github.com/users/bradtraversy/repos', {
        next: {
            revalidate: 60,
        },
    }

    );
    await new Promise(resolve=>setTimeout(resolve,1000))
    const data = await res.json()
    return data
}
async function Code() {
    const response= await teamfethcApi()
    return (
        <div>
    <div className='repos-container'>
      <h2>Repositories</h2>
      <ul className='repo-list'>
          {response.map((repo)=>(
           <li key={repo.id}>
             <Link href={`/code/${repo.name}`} >
             <h3>{repo.name}</h3>
              <p>{repo.description}</p>
              <div className='repo-details'>
                <span>
                  <FaStar /> 
                  {repo.stargazers_count}
                </span>
                <span>
                  <FaCodeBranch /> 
                  {repo.forks_count}
                </span>
                <span>
                  <FaEye />
                   {repo.watchers_count}
                </span>
              </div>

             </Link>
           </li>
           
          ))}
        </ul>
        </div>
        </div>
    )
}

export default Code;