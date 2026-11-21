import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\EnquiryController::store
 * @see app/Http/Controllers/Frontend/EnquiryController.php:12
 * @route '/api/enquiries'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/api/enquiries',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Frontend\EnquiryController::store
 * @see app/Http/Controllers/Frontend/EnquiryController.php:12
 * @route '/api/enquiries'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\EnquiryController::store
 * @see app/Http/Controllers/Frontend/EnquiryController.php:12
 * @route '/api/enquiries'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Frontend\EnquiryController::store
 * @see app/Http/Controllers/Frontend/EnquiryController.php:12
 * @route '/api/enquiries'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Frontend\EnquiryController::store
 * @see app/Http/Controllers/Frontend/EnquiryController.php:12
 * @route '/api/enquiries'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
const EnquiryController = { store }

export default EnquiryController