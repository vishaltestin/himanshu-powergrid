import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\SubscriberController::store
 * @see app/Http/Controllers/Frontend/SubscriberController.php:12
 * @route '/api/subscribe'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/subscribe',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\SubscriberController::store
 * @see app/Http/Controllers/Frontend/SubscriberController.php:12
 * @route '/api/subscribe'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\SubscriberController::store
 * @see app/Http/Controllers/Frontend/SubscriberController.php:12
 * @route '/api/subscribe'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Frontend\SubscriberController::store
 * @see app/Http/Controllers/Frontend/SubscriberController.php:12
 * @route '/api/subscribe'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Frontend\SubscriberController::store
 * @see app/Http/Controllers/Frontend/SubscriberController.php:12
 * @route '/api/subscribe'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const SubscriberController = { store }

export default SubscriberController