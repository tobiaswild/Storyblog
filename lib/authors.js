import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const authorsDirectory = path.join(process.cwd(), 'authors')

export function getSortedAuthorsData() {
    // Get file names under /authors
    const fileNames = fs.readdirSync(authorsDirectory)
    const allAuthorsData = fileNames.map((fileName) => {
        // Remove ".md" from file name to get id
        const id = fileName.replace(/\.md$/, '')

        // Read markdown file as string
        const fullPath = path.join(authorsDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        // Use gray-matter to parse the author metadata section
        const matterResult = matter(fileContents)

        // Combine the data with the id
        return {
            id,
            ...matterResult.data,
        }
    })
    // Sort authors by name
    return allAuthorsData.sort((a, b) => {
        if (a.name > b.name) {
            return 1
        } else {
            return -1
        }
    })
}

export function getAllAuthorIds() {
    const fileNames = fs.readdirSync(authorsDirectory)
    return fileNames.map((fileName) => {
        return {
            params: {
                id: fileName.replace(/\.md$/, ''),
            },
        }
    })
}

export async function getAuthorData(id) {
    const fullPath = path.join(authorsDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the author metadata section
    const matterResult = matter(fileContents)

    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    // Combine the data with the id and contentHtml
    return {
        id,
        contentHtml,
        ...matterResult.data,
    }
}
