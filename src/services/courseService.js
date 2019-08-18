import http from './httpService'
import config from '../../src/config.json'
 
export function createCourse(course) {
    return http.post(config.api_course, course)
}

export function getCourses() {
    return http.get(config.api_course)
}

export function deleteCourse(courseId){
    return http.delete(config.api_course + '/' + courseId)
}

export function updateCourse(course){
    const body = {...course}
    delete body._id
    return http.put(`${config.api_course}/${course._id}`,body)
}

export function getCourseCount(){
    return http.get(config.api_course + '/count')
}