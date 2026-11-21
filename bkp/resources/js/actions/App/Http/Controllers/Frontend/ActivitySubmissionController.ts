import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\ActivitySubmissionController::store
 * @see app/Http/Controllers/Frontend/ActivitySubmissionController.php:13
 * @route '/activity-submissions'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/activity-submissions',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\ActivitySubmissionController::store
 * @see app/Http/Controllers/Frontend/ActivitySubmissionController.php:13
 * @route '/activity-submissions'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\ActivitySubmissionController::store
 * @see app/Http/Controllers/Frontend/ActivitySubmissionController.php:13
 * @route '/activity-submissions'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Frontend\ActivitySubmissionController::store
 * @see app/Http/Controllers/Frontend/ActivitySubmissionController.php:13
 * @route '/activity-submissions'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Frontend\ActivitySubmissionController::store
 * @see app/Http/Controllers/Frontend/ActivitySubmissionController.php:13
 * @route '/activity-submissions'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const ActivitySubmissionController = { store }

export default ActivitySubmissionController