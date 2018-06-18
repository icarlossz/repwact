import 'isomorphic-fetch'
import Layout from '../components/layout';

export default class extends React.Component {
  static async getInitialProps({ query }) {
    const req = await fetch(`https://api.hackerwebapp.com/item/${query.id}`)
    const story = await req.json()
    return { story }
  }
  render () {
    return <Layout title={this.props.story.title}>
      <h1>{this.props.story.title}</h1>
      <div className="comments-container">
        { this.props.story.comments.map((comment) => (
          <div className="comment">
            <div dangerouslySetInnerHTML={ { __html: comment.content } }></div>
            <div>By { comment.user }</div>
          </div>
        )) }
      </div>
    <style jsx>{`
      .comments-container {
        width: 85%;
        margin: 0 auto;
      }
      .comment {
        background-color: #fff;
        padding: 10px 10px 20px;
        margin: 20px 0;
        border-radius: 5px;
        box-shadow: 2px 2px 15px rgba(0,0,0,.2);
      }
    `}</style>
    </Layout>
  }
}