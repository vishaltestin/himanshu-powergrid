import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
import loginDf2c2a from './login'
import dashboard from './dashboard'
import roles from './roles'
import users from './users'
import udise from './udise'
import activityCategories from './activity-categories'
import activities from './activities'
import activitySubmissions from './activity-submissions'
import grades from './grades'
import menus from './menus'
import partners from './partners'
import videos from './videos'
import testimonials from './testimonials'
import enquiries from './enquiries'
import subscribers from './subscribers'
import blogs from './blogs'
import badges from './badges'
import masterTrainers from './master-trainers'
import unisharp from './unisharp'
/**
 * @see routes/web.php:87
 * @route '/admin-dashboard/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})

login.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/login',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:87
 * @route '/admin-dashboard/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:87
 * @route '/admin-dashboard/login'
 */
login.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: login.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:87
 * @route '/admin-dashboard/login'
 */
login.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: login.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:87
 * @route '/admin-dashboard/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: login.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:87
 * @route '/admin-dashboard/login'
 */
        loginForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:87
 * @route '/admin-dashboard/login'
 */
        loginForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: login.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\Backend\LoginController::logout
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
export const logout = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

logout.definition = {
    methods: ["post"],
    url: '/admin-dashboard/logout',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\LoginController::logout
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
logout.url = (options?: RouteQueryOptions) => {
    return logout.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\LoginController::logout
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
logout.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: logout.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\LoginController::logout
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
    const logoutForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: logout.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\LoginController::logout
 * @see app/Http/Controllers/Backend/LoginController.php:45
 * @route '/admin-dashboard/logout'
 */
        logoutForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: logout.url(options),
            method: 'post',
        })
    
    logout.form = logoutForm
/**
 * @see routes/web.php:183
 * @route '/admin-dashboard/form-elements'
 */
export const formElements = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: formElements.url(options),
    method: 'get',
})

formElements.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/form-elements',
} satisfies RouteDefinition<["get","head"]>

/**
 * @see routes/web.php:183
 * @route '/admin-dashboard/form-elements'
 */
formElements.url = (options?: RouteQueryOptions) => {
    return formElements.definition.url + queryParams(options)
}

/**
 * @see routes/web.php:183
 * @route '/admin-dashboard/form-elements'
 */
formElements.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: formElements.url(options),
    method: 'get',
})
/**
 * @see routes/web.php:183
 * @route '/admin-dashboard/form-elements'
 */
formElements.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: formElements.url(options),
    method: 'head',
})

    /**
 * @see routes/web.php:183
 * @route '/admin-dashboard/form-elements'
 */
    const formElementsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: formElements.url(options),
        method: 'get',
    })

            /**
 * @see routes/web.php:183
 * @route '/admin-dashboard/form-elements'
 */
        formElementsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: formElements.url(options),
            method: 'get',
        })
            /**
 * @see routes/web.php:183
 * @route '/admin-dashboard/form-elements'
 */
        formElementsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: formElements.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    formElements.form = formElementsForm
const admin = {
    login: Object.assign(login, loginDf2c2a),
logout: Object.assign(logout, logout),
dashboard: Object.assign(dashboard, dashboard),
roles: Object.assign(roles, roles),
users: Object.assign(users, users),
udise: Object.assign(udise, udise),
activityCategories: Object.assign(activityCategories, activityCategories),
activities: Object.assign(activities, activities),
activitySubmissions: Object.assign(activitySubmissions, activitySubmissions),
grades: Object.assign(grades, grades),
menus: Object.assign(menus, menus),
partners: Object.assign(partners, partners),
videos: Object.assign(videos, videos),
testimonials: Object.assign(testimonials, testimonials),
enquiries: Object.assign(enquiries, enquiries),
subscribers: Object.assign(subscribers, subscribers),
blogs: Object.assign(blogs, blogs),
badges: Object.assign(badges, badges),
masterTrainers: Object.assign(masterTrainers, masterTrainers),
formElements: Object.assign(formElements, formElements),
unisharp: Object.assign(unisharp, unisharp),
}

export default admin