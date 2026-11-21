import activities from './activities'
import partners from './partners'
import videos from './videos'
import testimonials from './testimonials'
import enquiries from './enquiries'
import subscribe from './subscribe'
import blogs from './blogs'
import master_trainers from './master_trainers'
import home_activities from './home_activities'
import activity_submissions from './activity_submissions'
const api = {
    activities: Object.assign(activities, activities),
partners: Object.assign(partners, partners),
videos: Object.assign(videos, videos),
testimonials: Object.assign(testimonials, testimonials),
enquiries: Object.assign(enquiries, enquiries),
subscribe: Object.assign(subscribe, subscribe),
blogs: Object.assign(blogs, blogs),
master_trainers: Object.assign(master_trainers, master_trainers),
home_activities: Object.assign(home_activities, home_activities),
activity_submissions: Object.assign(activity_submissions, activity_submissions),
}

export default api