import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/filemanager/demo'
 */
const indexa79e445fbe8a0aa7a30493f784ac315b = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa79e445fbe8a0aa7a30493f784ac315b.url(options),
    method: 'get',
})

indexa79e445fbe8a0aa7a30493f784ac315b.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/demo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/filemanager/demo'
 */
indexa79e445fbe8a0aa7a30493f784ac315b.url = (options?: RouteQueryOptions) => {
    return indexa79e445fbe8a0aa7a30493f784ac315b.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/filemanager/demo'
 */
indexa79e445fbe8a0aa7a30493f784ac315b.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: indexa79e445fbe8a0aa7a30493f784ac315b.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/filemanager/demo'
 */
indexa79e445fbe8a0aa7a30493f784ac315b.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: indexa79e445fbe8a0aa7a30493f784ac315b.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/filemanager/demo'
 */
    const indexa79e445fbe8a0aa7a30493f784ac315bForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: indexa79e445fbe8a0aa7a30493f784ac315b.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/filemanager/demo'
 */
        indexa79e445fbe8a0aa7a30493f784ac315bForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexa79e445fbe8a0aa7a30493f784ac315b.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/filemanager/demo'
 */
        indexa79e445fbe8a0aa7a30493f784ac315bForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: indexa79e445fbe8a0aa7a30493f784ac315b.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    indexa79e445fbe8a0aa7a30493f784ac315b.form = indexa79e445fbe8a0aa7a30493f784ac315bForm
    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/laravel-filemanager/demo'
 */
const index7dd1ab6931a6e43fca443b0325706423 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7dd1ab6931a6e43fca443b0325706423.url(options),
    method: 'get',
})

index7dd1ab6931a6e43fca443b0325706423.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/laravel-filemanager/demo',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/laravel-filemanager/demo'
 */
index7dd1ab6931a6e43fca443b0325706423.url = (options?: RouteQueryOptions) => {
    return index7dd1ab6931a6e43fca443b0325706423.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/laravel-filemanager/demo'
 */
index7dd1ab6931a6e43fca443b0325706423.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index7dd1ab6931a6e43fca443b0325706423.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/laravel-filemanager/demo'
 */
index7dd1ab6931a6e43fca443b0325706423.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index7dd1ab6931a6e43fca443b0325706423.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/laravel-filemanager/demo'
 */
    const index7dd1ab6931a6e43fca443b0325706423Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index7dd1ab6931a6e43fca443b0325706423.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/laravel-filemanager/demo'
 */
        index7dd1ab6931a6e43fca443b0325706423Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7dd1ab6931a6e43fca443b0325706423.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DemoController::index
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DemoController.php:7
 * @route '/admin-dashboard/laravel-filemanager/demo'
 */
        index7dd1ab6931a6e43fca443b0325706423Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index7dd1ab6931a6e43fca443b0325706423.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index7dd1ab6931a6e43fca443b0325706423.form = index7dd1ab6931a6e43fca443b0325706423Form

export const index = {
    '/admin-dashboard/filemanager/demo': indexa79e445fbe8a0aa7a30493f784ac315b,
    '/admin-dashboard/laravel-filemanager/demo': index7dd1ab6931a6e43fca443b0325706423,
}

const DemoController = { index }

export default DemoController