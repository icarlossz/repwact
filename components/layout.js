import Head from 'next/head';

export default class extends React.Component {
  render () {
    return <div>
      <Head>
        <title>{this.props.title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <meta name="theme-color" content="#ff6600" />
        <link rel="apple-touch-icon" href="/static/icon.png" />
        <meta name="apple-mobile-web-app-title" content="Hacker News" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
      </Head>

      {this.props.children}

      <h2>Made by <a href="https://twitter.com/icarlossz">@iCarlosSz</a></h2>
      <style jsx global>{`
        * {
          font-family: system-ui;
          transition: .3s;
          color: #7b7b7b;
        }

        body {
          padding: 20px 0;
          background-color: #f55;
        }

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
      `}</style>
    </div>
  }
}