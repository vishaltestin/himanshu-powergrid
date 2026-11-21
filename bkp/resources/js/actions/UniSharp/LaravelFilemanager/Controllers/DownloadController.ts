import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
const getDownload8c47f11e05120d92d53c240c99615fb4 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDownload8c47f11e05120d92d53c240c99615fb4.url(options),
    method: 'get',
})

getDownload8c47f11e05120d92d53c240c99615fb4.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
getDownload8c47f11e05120d92d53c240c99615fb4.url = (options?: RouteQueryOptions) => {
    return getDownload8c47f11e05120d92d53c240c99615fb4.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
getDownload8c47f11e05120d92d53c240c99615fb4.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDownload8c47f11e05120d92d53c240c99615fb4.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
getDownload8c47f11e05120d92d53c240c99615fb4.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDownload8c47f11e05120d92d53c240c99615fb4.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
    const getDownload8c47f11e05120d92d53c240c99615fb4Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getDownload8c47f11e05120d92d53c240c99615fb4.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
        getDownload8c47f11e05120d92d53c240c99615fb4Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDownload8c47f11e05120d92d53c240c99615fb4.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
        getDownload8c47f11e05120d92d53c240c99615fb4Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDownload8c47f11e05120d92d53c240c99615fb4.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getDownload8c47f11e05120d92d53c240c99615fb4.form = getDownload8c47f11e05120d92d53c240c99615fb4Form
    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/laravel-filemanager/download'
 */
const getDownloadd3d8aa70e1e5b74f6b82e93b955c3533 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.url(options),
    method: 'get',
})

getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/laravel-filemanager/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/laravel-filemanager/download'
 */
getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.url = (options?: RouteQueryOptions) => {
    return getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/laravel-filemanager/download'
 */
getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/laravel-filemanager/download'
 */
getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/laravel-filemanager/download'
 */
    const getDownloadd3d8aa70e1e5b74f6b82e93b955c3533Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/laravel-filemanager/download'
 */
        getDownloadd3d8aa70e1e5b74f6b82e93b955c3533Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/laravel-filemanager/download'
 */
        getDownloadd3d8aa70e1e5b74f6b82e93b955c3533Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getDownloadd3d8aa70e1e5b74f6b82e93b955c3533.form = getDownloadd3d8aa70e1e5b74f6b82e93b955c3533Form

export const getDownload = {
    '/admin-dashboard/filemanager/download': getDownload8c47f11e05120d92d53c240c99615fb4,
    '/admin-dashboard/laravel-filemanager/download': getDownloadd3d8aa70e1e5b74f6b82e93b955c3533,
}

const DownloadController = { getDownload }

export default DownloadController