const base_url = process.env.BASE_URL_CONTENTFUL
const space_id = process.env.SPACE_ID_CONTENTFUL
const token = process.env.TOKEN_CONTENTFUL
import resolveResponse from 'contentful-resolve-response'

export const getBlogs = async () => {
    const res = await fetch(`${"https://cdn.contentful.com"}/spaces/${"lk8bta596tkf"}/environments/master/entries?access_token=${"xEImVZvFZiv5ex5gUy6MU0KrkJlq_bRexaQrE9Bkox4"}&content_type=blog&include=10`, { next: {  revalidate: 10 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items
}

export const getBlogSlug = async (slug: string) => {
    const res = await fetch(`${"https://cdn.contentful.com"}/spaces/${"lk8bta596tkf"}/environments/master/entries?access_token=${"xEImVZvFZiv5ex5gUy6MU0KrkJlq_bRexaQrE9Bkox4"}&content_type=blog&include=10&fields.slug=${slug}`, { next: {  revalidate: 3600 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items[0]
}