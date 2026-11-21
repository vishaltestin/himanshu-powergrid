import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Frontend\MasterTrainerController::index
 * @see app/Http/Controllers/Frontend/MasterTrainerController.php:12
 * @route '/api/master-trainers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/api/master-trainers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Frontend\MasterTrainerController::index
 * @see app/Http/Controllers/Frontend/MasterTrainerController.php:12
 * @route '/api/master-trainers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Frontend\MasterTrainerController::index
 * @see app/Http/Controllers/Frontend/MasterTrainerController.php:12
 * @route '/api/master-trainers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Frontend\MasterTrainerController::index
 * @see app/Http/Controllers/Frontend/MasterTrainerController.php:12
 * @route '/api/master-trainers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Frontend\MasterTrainerController::index
 * @see app/Http/Controllers/Frontend/MasterTrainerController.php:12
 * @route '/api/master-trainers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Frontend\MasterTrainerController::index
 * @see app/Http/Controllers/Frontend/MasterTrainerController.php:12
 * @route '/api/master-trainers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Frontend\MasterTrainerController::index
 * @see app/Http/Controllers/Frontend/MasterTrainerController.php:12
 * @route '/api/master-trainers'
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
const master_trainers = {
    index: Object.assign(index, index),
}

export default master_trainers