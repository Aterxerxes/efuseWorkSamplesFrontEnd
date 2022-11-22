import { RecoilRoot } from 'recoil'

import PostList from "../components/PostList"

export default () => ( 
  <main>
    <RecoilRoot>
      <PostList />
    </RecoilRoot>
  </main>
)
