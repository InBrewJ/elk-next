import Header from '../components/Header';
import fetch from 'isomorphic-unfetch';
import Link from 'next/link';

const genLog = () => {
  console.log('genning a log...');
}

const Index = props => (
  <>
    <Header/>
    <div>
      <p>Next, hello!</p>
      <div className='log-gen'>
        <button onClick={genLog}>
          Gen a log
        </button>
      </div>
    </div>
    <h1>Batman TV Shows (after the millenium)</h1>
    <ul>
      {props.shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
          <img src={show.image.medium} />
          <p>Premiered on: {show.premiered}</p>
        </li>
      ))}
    </ul>
  </>
);

Index.getInitialProps = async function() {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  const theMillenium = new Date(2000, 1, 1)

  // Get and get this log into elastic search...

  console.log(`is a batman`);

  const modernTitles = data.filter(entry => {
    const entryDate = new Date(entry.show.premiered.replace('-',','))
    return  entryDate > theMillenium
  }).map(entry => {
    return entry.show
  })

  return {
    shows: modernTitles
  };
};

export default Index;