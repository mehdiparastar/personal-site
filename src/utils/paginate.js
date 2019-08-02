import _ from 'lodash'

export function paginate(posts, currentPage, pageSize) {
    const startIndex = (currentPage - 1) * pageSize

    return _(posts).slice(startIndex).take(pageSize).value()
}