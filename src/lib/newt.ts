import { createClient } from "newt-client-js";
import { SPACE_ID, TOKEN, APP_UID } from '$env/static/private';

const client = createClient({
  spaceUid: SPACE_ID,
  token: TOKEN,
  apiType: 'cdn' // You can specify "cdn" or "api".
})

const ArticleId = 'article'

//必要なプロパティのみ定義
export type Article = {
  _id: string,
  title: string,
  slug: string,
  body?: string,
}

//記事の一覧を取得
export const getArticleList = async () => {
  const response = await client.getContents<Article>({
    appUid:APP_UID,
    modelUid:ArticleId,
    query:{
      select: ['_id', 'title', 'body', 'slug']
    }
    //limitなどの指定をできるが今回は割愛
  })
  return response
}

//指定された記事を取得
export const getArticle = async ({contentId}:{contentId:string}) =>{
  const article = await client.getContent<Article>({
    appUid:APP_UID,
    modelUid:ArticleId,
    contentId:contentId,
    query:{
      select: ['title', 'body'],
      // body: { fmt: 'text' },
    }
  })
  return article
}