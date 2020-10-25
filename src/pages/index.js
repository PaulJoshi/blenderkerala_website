import React from "react"
import Layout from "../components/Layout/layout"
import Menu from "../components/Menu/menu"
import {Link, navigate} from 'gatsby';
import CarouselCard from "../components/CarouselCard/carouselCard"


export default function Home() {
  return <Layout>
    <div className='container'>
      <Menu />
      <div className='home'>
        <div className='intro-area'>
          <div className='intro-text-area'>
            <h2 className='intro-text'>WELCOME</h2>
            <p className='intro-text'>We are an ardent community of Blender Artists based in Kerala, India.</p>
            <p className='intro-text'>Our mission is to build a platform for collaboration, learning and sharing on all things Blender and to encourage the use of Blender among the people of Kerala.</p>
            <p className='intro-text'>Join us below</p>
          </div>
          <div className='intro-logo-parent'><img className='intro-logo-child' src="../../blenderkeralalogo.jpg" alt='BlenderKerala logo'/></div>
        </div>
        <ul className='join-list'>
          <li className='social-icon'><a target="noopener" href="https://discord.gg/zMJfrDw"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMWYyODMzIj48cGF0aCBkPSJNMTQzLjMzMzMzLDQzYzAsMCAtMTYuNDI5NTgsLTEyLjg1NyAtMzUuODMzMzMsLTE0LjMzMzMzbC0xLjc0ODY3LDMuNDk3MzNjMTcuNTQ0LDQuMjkyODMgMjUuNTkyMTcsMTAuNDQ1NDIgMzMuOTk4NjcsMTguMDAyNjdjLTE0LjQ5NDU4LC03LjM5OTU4IC0yOC44MDY0MiwtMTQuMzMzMzMgLTUzLjc1LC0xNC4zMzMzM2MtMjQuOTQzNTgsMCAtMzkuMjU1NDIsNi45MzM3NSAtNTMuNzUsMTQuMzMzMzNjOC40MDY1LC03LjU1NzI1IDE3Ljk4MTE3LC0xNC4zODcwOCAzMy45OTg2NywtMTguMDAyNjdsLTEuNzQ4NjcsLTMuNDk3MzNjLTIwLjM1NjkyLDEuOTI0MjUgLTM1LjgzMzMzLDE0LjMzMzMzIC0zNS44MzMzMywxNC4zMzMzM2MwLDAgLTE4LjM1MDI1LDI2LjYwNjI1IC0yMS41LDc4LjgzMzMzYzE4LjQ5NzE3LDIxLjMzMTU4IDQ2LjU4MzMzLDIxLjUgNDYuNTgzMzMsMjEuNWw1Ljg3MzA4LC03LjgyOTU4Yy05Ljk2ODgzLC0zLjQ2NTA4IC0yMS4yMjc2NywtOS42NTM1IC0zMC45NTY0MiwtMjAuODM3MDhjMTEuNjAyODMsOC43NzkxNyAyOS4xMTQ1OCwxNy45MTY2NyA1Ny4zMzMzMywxNy45MTY2N2MyOC4yMTg3NSwwIDQ1LjczMDUsLTkuMTM3NSA1Ny4zMzMzMywtMTcuOTE2NjdjLTkuNzI4NzUsMTEuMTgzNTggLTIwLjk4NzU4LDE3LjM3MiAtMzAuOTU2NDIsMjAuODM3MDhsNS44NzMwOCw3LjgyOTU4YzAsMCAyOC4wODYxNywtMC4xNjg0MiA0Ni41ODMzMywtMjEuNWMtMy4xNDk3NSwtNTIuMjI3MDggLTIxLjUsLTc4LjgzMzMzIC0yMS41LC03OC44MzMzM3pNNjIuNzA4MzMsMTA3LjVjLTYuOTI2NTgsMCAtMTIuNTQxNjcsLTYuNDE3NzUgLTEyLjU0MTY3LC0xNC4zMzMzM2MwLC03LjkxNTU4IDUuNjE1MDgsLTE0LjMzMzMzIDEyLjU0MTY3LC0xNC4zMzMzM2M2LjkyNjU4LDAgMTIuNTQxNjcsNi40MTc3NSAxMi41NDE2NywxNC4zMzMzM2MwLDcuOTE1NTggLTUuNjE1MDgsMTQuMzMzMzMgLTEyLjU0MTY3LDE0LjMzMzMzek0xMDkuMjkxNjcsMTA3LjVjLTYuOTI2NTgsMCAtMTIuNTQxNjcsLTYuNDE3NzUgLTEyLjU0MTY3LC0xNC4zMzMzM2MwLC03LjkxNTU4IDUuNjE1MDgsLTE0LjMzMzMzIDEyLjU0MTY3LC0xNC4zMzMzM2M2LjkyNjU4LDAgMTIuNTQxNjcsNi40MTc3NSAxMi41NDE2NywxNC4zMzMzM2MwLDcuOTE1NTggLTUuNjE1MDgsMTQuMzMzMzMgLTEyLjU0MTY3LDE0LjMzMzMzeiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+"/></a></li>
          <div className="vl"></div>
          <li className='social-icon'><a target="noopener" href="https://www.instagram.com/blenderkerala/"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIKdmlld0JveD0iMCAwIDE3MiAxNzIiCnN0eWxlPSIgZmlsbDojMDAwMDAwOyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgZm9udC1mYW1pbHk9Im5vbmUiIGZvbnQtd2VpZ2h0PSJub25lIiBmb250LXNpemU9Im5vbmUiIHRleHQtYW5jaG9yPSJub25lIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTAsMTcydi0xNzJoMTcydjE3MnoiIGZpbGw9Im5vbmUiPjwvcGF0aD48ZyBmaWxsPSIjMWYyODMzIj48cGF0aCBkPSJNNTcuMzIyMTQsMTcuMmMtMjIuMTI0OTMsMCAtNDAuMTIyMTQsMTguMDEzODYgLTQwLjEyMjE0LDQwLjE0NDUzdjU3LjMzMzMzYzAsMjIuMTI0OTMgMTguMDEzODYsNDAuMTIyMTQgNDAuMTQ0NTMsNDAuMTIyMTRoNTcuMzMzMzNjMjIuMTI0OTMsMCA0MC4xMjIxNCwtMTguMDEzODYgNDAuMTIyMTQsLTQwLjE0NDUzdi01Ny4zMzMzM2MwLC0yMi4xMjQ5MyAtMTguMDEzODYsLTQwLjEyMjE0IC00MC4xNDQ1MywtNDAuMTIyMTR6TTEyNi4xMzMzMyw0MC4xMzMzM2MzLjE2NDgsMCA1LjczMzMzLDIuNTY4NTMgNS43MzMzMyw1LjczMzMzYzAsMy4xNjQ4IC0yLjU2ODUzLDUuNzMzMzMgLTUuNzMzMzMsNS43MzMzM2MtMy4xNjQ4LDAgLTUuNzMzMzMsLTIuNTY4NTMgLTUuNzMzMzMsLTUuNzMzMzNjMCwtMy4xNjQ4IDIuNTY4NTMsLTUuNzMzMzMgNS43MzMzMywtNS43MzMzM3pNODYsNTEuNmMxOC45NzE2LDAgMzQuNCwxNS40Mjg0IDM0LjQsMzQuNGMwLDE4Ljk3MTYgLTE1LjQyODQsMzQuNCAtMzQuNCwzNC40Yy0xOC45NzE2LDAgLTM0LjQsLTE1LjQyODQgLTM0LjQsLTM0LjRjMCwtMTguOTcxNiAxNS40Mjg0LC0zNC40IDM0LjQsLTM0LjR6TTg2LDYzLjA2NjY3Yy0xMi42NjU3MywwIC0yMi45MzMzMywxMC4yNjc2IC0yMi45MzMzMywyMi45MzMzM2MwLDEyLjY2NTczIDEwLjI2NzYsMjIuOTMzMzMgMjIuOTMzMzMsMjIuOTMzMzNjMTIuNjY1NzMsMCAyMi45MzMzMywtMTAuMjY3NiAyMi45MzMzMywtMjIuOTMzMzNjMCwtMTIuNjY1NzMgLTEwLjI2NzYsLTIyLjkzMzMzIC0yMi45MzMzMywtMjIuOTMzMzN6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/></a></li>
          <div className="vl"></div>
          <li className='social-icon'><a target="noopener" href="https://chat.whatsapp.com/LgurTiuZqck8utjfOUUWf8"><img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iOTAiIGhlaWdodD0iOTAiCnZpZXdCb3g9IjAgMCAxNzIgMTcyIgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDE3MnYtMTcyaDE3MnYxNzJ6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iIzFmMjgzMyI+PHBhdGggZD0iTTg2LDYuODhjLTQzLjYyNjA4LDAgLTc5LjEyLDM1LjQ5MzkyIC03OS4xMiw3OS4xMmMwLDEzLjYyMjQgMy41MTkxMiwyNy4wMTc3NiAxMC4xOTI3MiwzOC44Mzc2bC0xMC4wNjU0NCwzNS45MTM2Yy0wLjMzMDI0LDEuMTc5OTIgLTAuMDEwMzIsMi40NDU4NCAwLjg0MjgsMy4zMjMwNGMwLjY1NzA0LDAuNjc3NjggMS41NTE0NCwxLjA0NTc2IDIuNDY5OTIsMS4wNDU3NmMwLjI3NTIsMCAwLjU1Mzg0LC0wLjAzNDQgMC44MjU2LC0wLjA5OTc2bDM3LjQ4MjI0LC05LjI4NDU2YzExLjQ0NDg4LDYuMTQzODQgMjQuMzM0NTYsOS4zODQzMiAzNy4zNzIxNiw5LjM4NDMyYzQzLjYyNjA4LDAgNzkuMTIsLTM1LjQ5MzkyIDc5LjEyLC03OS4xMmMwLC00My42MjYwOCAtMzUuNDkzOTIsLTc5LjEyIC03OS4xMiwtNzkuMTJ6TTEyNS44MDA4LDExMy45MTkwNGMtMS42OTI0OCw0LjY4NTI4IC05LjgxMDg4LDguOTYxMiAtMTMuNzExODQsOS41MzU2OGMtMy41MDE5MiwwLjUxMjU2IC03LjkzMjY0LDAuNzMyNzIgLTEyLjc5NjgsLTAuNzk0NjRjLTIuOTQ4MDgsLTAuOTI4OCAtNi43MzIwOCwtMi4xNjAzMiAtMTEuNTc5MDQsLTQuMjI3NzZjLTIwLjM3NTEyLC04LjY4OTQ0IC0zMy42ODEwNCwtMjguOTQ3NiAtMzQuNjk5MjgsLTMwLjI4NTc2Yy0xLjAxNDgsLTEuMzM4MTYgLTguMjkzODQsLTEwLjg3Mzg0IC04LjI5Mzg0LC0yMC43NDMyYzAsLTkuODY5MzYgNS4yNDYsLTE0LjcyMzIgNy4xMTA0OCwtMTYuNzMyMTZjMS44NjQ0OCwtMi4wMDg5NiA0LjA2MjY0LC0yLjUxMTIgNS40MTgsLTIuNTExMmMxLjM1NTM2LDAgMi43MDcyOCwwLjAxNzIgMy44OTQwOCwwLjA3MjI0YzEuMjQ4NzIsMC4wNjE5MiAyLjkyNCwtMC40NzEyOCA0LjU3MTc2LDMuNDQzNDRjMS42OTI0OCw0LjAxNzkyIDUuNzU1MTIsMTMuODg3MjggNi4yNTczNiwxNC44OTUyYzAuNTA5MTIsMS4wMDQ0OCAwLjg0NjI0LDIuMTc3NTIgMC4xNzIsMy41MTU2OGMtMC42NzQyNCwxLjMzODE2IC0xLjAxMTM2LDIuMTc0MDggLTIuMDI5NiwzLjM0NzEyYy0xLjAxODI0LDEuMTczMDQgLTIuMTMyOCwyLjYxNDQgLTMuMDQ3ODQsMy41MTU2OGMtMS4wMTgyNCwxLjAwMTA0IC0yLjA3NDMyLDIuMDg0NjQgLTAuODkwOTYsNC4wOTM2YzEuMTgzMzYsMi4wMDg5NiA1LjI1OTc2LDguNTc1OTIgMTEuMzAwNCwxMy44OTQxNmM3Ljc1NzIsNi44MzE4NCAxNC4zMDM1Miw4Ljk1MDg4IDE2LjMzMzEyLDkuOTU1MzZjMi4wMjk2LDEuMDA0NDggMy4yMTY0LDAuODM1OTIgNC4zOTk3NiwtMC41MDIyNGMxLjE4MzM2LC0xLjM0MTYgNS4wNzc0NCwtNS44NTgzMiA2LjQyOTM2LC03Ljg2Mzg0YzEuMzUxOTIsLTIuMDA1NTIgMi43MDcyOCwtMS42NzUyOCA0LjU3MTc2LC0xLjAwNDQ4YzEuODY0NDgsMC42NjczNiAxMS44NTA4LDUuNTE3NzYgMTMuODgwNCw2LjUyMjI0YzIuMDI5NiwxLjAwNDQ4IDMuMzg0OTYsMS41MDY3MiAzLjg5NDA4LDIuMzQyNjRjMC41MDkxMiwwLjgzMjQ4IDAuNTA5MTIsNC44NTA0IC0xLjE4MzM2LDkuNTMyMjR6Ij48L3BhdGg+PC9nPjwvZz48L3N2Zz4="/></a></li>
        </ul>
        <section className='more-area'>
          <Link className='features-area' to="/features/">
            <CarouselCard/>
          </Link>
          <div className='request-area'>
            <p className='request-text'>Get your design needs met by our expert community members</p>
            <button className='request-button' onClick={() => navigate("/request/")}>REQUEST DESIGN</button>
          </div>
        </section>
      </div>
    </div>
  </Layout>
}