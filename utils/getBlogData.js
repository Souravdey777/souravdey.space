import axios from 'axios'
import { HASHNODE_API_URL } from './constant'

const getLatestBlog = async () => {
    try {
        const result = await axios.post(HASHNODE_API_URL, {
            query: `query{
            user(username: "Souravdey777") {
                publicationDomain
                publication {
                  posts(page:0) {
                    author{
                      username
                      name
                      photo
                    }
                    title
                    coverImage
                    dateAdded
                    brief
                    slug
                  }
                }
            }
        }`
        })
        const filteredResult = result.data
        return filteredResult
    } catch (error) {
        console.error(error)
        return error
    }
}

export default getLatestBlog
