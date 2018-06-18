import 'isomorphic-fetch';

export default class extends React.Component {
  static async getInitialProps() {
    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories = await req.json()
    return { stories }
  }
  render () {
    return <div>
      <h1>LAST STORIES in HackerNews</h1>
      <div className="stories-container">
      { this.props.stories.map((story) => (
        <a href={story.url} target="_blank">
          <div className="story-container" key={story.id}>
            <h2>{story.title}</h2>
            <div className="story-info">
              <p>by</p>
              <h4>{story.user}</h4>
              <p>in</p>
              <h4>{story.domain}</h4>
            </div>
          </div>
        </a>
      )) }
      </div>
      <h2>Made by <a href="https://twitter.com/icarlossz">@iCarlosSz</a></h2>
      <style jsx>{`
        h1 {
          text-align: center;
          color: #fff;
        }

        h2 {
          text-align: center;
          color: #fff;
          font-size: 14px;
        }

        a {
          text-decoration: none;
          color: #ccc;
        }

        .stories-container {
          width: 85%;
          margin: 0 auto;
          padding: 15px 0;
        }

        .story-container {
          width: 100%;
          background-color: #fff;
          border-radius: 5px;
          margin: 20px 0;
          box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
        }

        .story-container h2 {
          color: #f55;
          font-weight: lighter;
          font-size: 18px;
          text-decoration: none;
          margin: 0;
          padding: 15px 15px;
          text-align: left;
        }

        .story-container h2:hover {
          text-decoration: underline;
        }

        .story-info {
          display: flex;
          padding: 0 15px;
        }

        .story-info h4, .story-info p{
          padding: 0 3px;
          margin: 0 0 15px;
        }
      `}</style>
      <style global jsx>{`
        * {
          font-family: system-ui;
          transition: .3s;
          color: #7b7b7b;
        }

        body {
          padding: 20px 0;
          background-color: #f55;
        }
`}</style>
    </div>
  }
}