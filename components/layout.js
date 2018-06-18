import Head from 'next/head';

export default class extends React.Component {
  render () {
    return <div>
      <Head>
        <title>{this.props.title}</title>
      </Head>
    </div>
  }
}