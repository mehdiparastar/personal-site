const navLinks = [
    { id: 1, text: 'صفحه اصلی', link: '/', icon: 'fa fa-home feather' },
    { id: 2, text: 'دوره ها', link: '/courses', count: 5, icon: 'fa fa-graduation-cap feather' },
    { id: 3, text: 'تحصیلات', link: '/education', icon: 'fa fa-university feather' },
    { id: 4, text: 'مهارت', link: '/skill', icon: 'fa fa-briefcase feather' },
    { id: 5, text: 'درباره', link: '/about', icon: 'fa fa-user feather' },
    { id: 6, text: 'تماس', link: '/contact', icon: 'fa fa-envelope feather' }
];

const getNavLinks = () => {
    return [...navLinks];
};

export default getNavLinks;
