import React from "react"
import "./features.css"
import Feed from "react-instagram-authless-feed"

const Features = () => (
  <div className='home' style={{height: "100vh"}}>
    <section className="instagram-area">
    <Feed
      userName="blenderkerala"
      className="feed"
      classNameLoading="Loading"
    />
    </section>
    <a className='view-more' target="noopener" href="https://www.instagram.com/blenderkerala/">
      <p className='view-more-text'>View More On</p>
      <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzFmMjgzMyI+PHBhdGggZD0iTTU3LjMzMzMzLDIxLjVjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLDE2LjA0NjE3IC0zNS44MzMzMywzNS44MzMzM3Y1Ny4zMzMzM2MwLDE5Ljc4NzE3IDE2LjA0NjE3LDM1LjgzMzMzIDM1LjgzMzMzLDM1LjgzMzMzaDU3LjMzMzMzYzE5Ljc4NzE3LDAgMzUuODMzMzMsLTE2LjA0NjE3IDM1LjgzMzMzLC0zNS44MzMzM3YtNTcuMzMzMzNjMCwtMTkuNzg3MTcgLTE2LjA0NjE3LC0zNS44MzMzMyAtMzUuODMzMzMsLTM1LjgzMzMzek0xMjksMzUuODMzMzNjMy45NTYsMCA3LjE2NjY3LDMuMjEwNjcgNy4xNjY2Nyw3LjE2NjY3YzAsMy45NTYgLTMuMjEwNjcsNy4xNjY2NyAtNy4xNjY2Nyw3LjE2NjY3Yy0zLjk1NiwwIC03LjE2NjY3LC0zLjIxMDY3IC03LjE2NjY3LC03LjE2NjY3YzAsLTMuOTU2IDMuMjEwNjcsLTcuMTY2NjcgNy4xNjY2NywtNy4xNjY2N3pNODYsNTAuMTY2NjdjMTkuNzg3MTcsMCAzNS44MzMzMywxNi4wNDYxNyAzNS44MzMzMywzNS44MzMzM2MwLDE5Ljc4NzE3IC0xNi4wNDYxNywzNS44MzMzMyAtMzUuODMzMzMsMzUuODMzMzNjLTE5Ljc4NzE3LDAgLTM1LjgzMzMzLC0xNi4wNDYxNyAtMzUuODMzMzMsLTM1LjgzMzMzYzAsLTE5Ljc4NzE3IDE2LjA0NjE3LC0zNS44MzMzMyAzNS44MzMzMywtMzUuODMzMzN6TTg2LDY0LjVjLTExLjg3NDEyLDAgLTIxLjUsOS42MjU4OCAtMjEuNSwyMS41YzAsMTEuODc0MTIgOS42MjU4OCwyMS41IDIxLjUsMjEuNWMxMS44NzQxMiwwIDIxLjUsLTkuNjI1ODggMjEuNSwtMjEuNWMwLC0xMS44NzQxMiAtOS42MjU4OCwtMjEuNSAtMjEuNSwtMjEuNXoiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg=="/>
    </a>
  </div>
)

export default Features;