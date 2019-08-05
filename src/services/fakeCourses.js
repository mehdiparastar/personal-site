const courses = [
    {
        id: 1,
        title: 'دوره NodeJs',
        imageUrl:
            'https://toplearn.com/img/course/img-course-%D8%B4%D9%86%D8%A8%D9%87-%DB%B2-%D8%AA%DB%8C%D8%B1-%DB%B1%DB%B3%DB%B9%DB%B7-76784990-823.jpg',
        text: 'متن تست',
        time: '10:11:00',
        price: 50000
    },
    {
        id: 1,
        title: 'دوره Linux',
        imageUrl:
            'https://toplearn.com/img/course/img-course-%D8%B4%D9%86%D8%A8%D9%87-%DB%B9-%D8%AF%DB%8C-%DB%B1%DB%B3%DB%B9%DB%B6-86429735-684.jpg',
        text: 'متن تست',
        time: '10:11:00',
        price: 100000
    },
    {
        id: 1,
        title: 'دوره ReactJs',
        imageUrl:
            'https://toplearn.com/img/course/img-course-%D9%BE%D9%86%D8%AC-%D8%B4%D9%86%D8%A8%D9%87-%DB%B4-%D9%85%D8%B1%D8%AF%D8%A7%D8%AF-%DB%B1%DB%B3%DB%B9%DB%B7-67580934-1036.jpg',
        text: 'متن تست',
        time: '10:11:00',
        price: 80000
    },
    {
        id: 1,
        title: 'دوره ReactNative',
        imageUrl:
            'https://toplearn.com/img/course/img-course-%D8%B4%D9%86%D8%A8%D9%87-%DB%B2-%D8%AA%DB%8C%D8%B1-%DB%B1%DB%B3%DB%B9%DB%B7-76784990-823.jpg',
        text: 'متن تست',
        time: '10:11:00',
        price: 80000
    }
];

const getCourses = () => {
    return [...courses];
};

export default getCourses;
