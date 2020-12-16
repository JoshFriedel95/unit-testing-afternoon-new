import {shortenText} from '../utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText, longText, posts, users} from './_data_/testData'
import { text } from 'express'


test('ShortenText will not alter text over 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29)
})
test('ShortenText should cut off extra characters after 100 and add 3 periods', () => {
    const shortened = shortenText(longText)
    expect(shortened).not.toHaveLength(longText.length)
    expect(shortened.slice(-3)).toBe('...')
})
test('wordCount should check post array and return total word count', () => {
    expect(wordCount(posts)).toBe(233)
})
test('attachUserName should correctly attach a users full name to a post', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})
test('attachUserName should remove posts with no matching user', () => {
    const newPosts = attachUserName(users, posts)
    const deletedPost = posts[5]
    expect(newPosts).not.toContainEqual(deletedPost)
})