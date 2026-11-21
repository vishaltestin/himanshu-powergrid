import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\TestimonialController::index
 * @see app/Http/Controllers/Frontend/TestimonialController.php:12
 * @route '/api/testimonials'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/testimonials',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\TestimonialController::index
 * @see app/Http/Controllers/Frontend/TestimonialController.php:12
 * @route '/api/testimonials'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\TestimonialController::index
 * @see app/Http/Controllers/Frontend/TestimonialController.php:12
 * @route '/api/testimonials'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\TestimonialController::index
 * @see app/Http/Controllers/Frontend/TestimonialController.php:12
 * @route '/api/testimonials'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\TestimonialController::index
 * @see app/Http/Controllers/Frontend/TestimonialController.php:12
 * @route '/api/testimonials'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\TestimonialController::index
 * @see app/Http/Controllers/Frontend/TestimonialController.php:12
 * @route '/api/testimonials'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\TestimonialController::index
 * @see app/Http/Controllers/Frontend/TestimonialController.php:12
 * @route '/api/testimonials'
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
const TestimonialController = { index }

export default TestimonialController