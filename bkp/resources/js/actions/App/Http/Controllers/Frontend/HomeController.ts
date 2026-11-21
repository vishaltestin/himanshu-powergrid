import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\HomeController::homeActivities
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
export const homeActivities = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: homeActivities.url(options),
    method: 'get',
})

homeActivities.definition = {
    methods: ["get","head"],
    url: '/api/home-activities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\HomeController::homeActivities
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
homeActivities.url = (options?: RouteQueryOptions) => {
    return homeActivities.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\HomeController::homeActivities
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
homeActivities.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: homeActivities.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\HomeController::homeActivities
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
homeActivities.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: homeActivities.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\HomeController::homeActivities
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
    const homeActivitiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: homeActivities.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\HomeController::homeActivities
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
        homeActivitiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: homeActivities.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\HomeController::homeActivities
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
        homeActivitiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: homeActivities.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    homeActivities.form = homeActivitiesForm
const HomeController = { homeActivities }

export default HomeController