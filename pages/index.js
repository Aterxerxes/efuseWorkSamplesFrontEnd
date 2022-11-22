import { RecoilRoot } from 'recoil'
import Head from 'next/head'

import PostList from "../components/PostList"

export default () => ( 
  <main>
    <RecoilRoot>
      <Head>
        <title>John Hansen - Work Sample</title>
      </Head>
      <PostList />
    </RecoilRoot>
  </main>
)
