import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\HomeController::index
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/home-activities',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\HomeController::index
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\HomeController::index
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\HomeController::index
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\HomeController::index
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\HomeController::index
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\HomeController::index
 * @see app/Http/Controllers/Frontend/HomeController.php:12
 * @route '/api/home-activities'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
const home_activities = {
    index: Object.assign(index, index),
}

export default home_activities