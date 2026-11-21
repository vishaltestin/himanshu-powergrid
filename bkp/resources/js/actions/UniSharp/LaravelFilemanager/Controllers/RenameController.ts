import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
const getRenamebfd956d078a6f39d360f702a4ead7421 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRenamebfd956d078a6f39d360f702a4ead7421.url(options),
    method: 'get',
})

getRenamebfd956d078a6f39d360f702a4ead7421.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/rename',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
getRenamebfd956d078a6f39d360f702a4ead7421.url = (options?: RouteQueryOptions) => {
    return getRenamebfd956d078a6f39d360f702a4ead7421.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
getRenamebfd956d078a6f39d360f702a4ead7421.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRenamebfd956d078a6f39d360f702a4ead7421.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
getRenamebfd956d078a6f39d360f702a4ead7421.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRenamebfd956d078a6f39d360f702a4ead7421.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
    const getRenamebfd956d078a6f39d360f702a4ead7421Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getRenamebfd956d078a6f39d360f702a4ead7421.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
        getRenamebfd956d078a6f39d360f702a4ead7421Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRenamebfd956d078a6f39d360f702a4ead7421.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
        getRenamebfd956d078a6f39d360f702a4ead7421Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRenamebfd956d078a6f39d360f702a4ead7421.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getRenamebfd956d078a6f39d360f702a4ead7421.form = getRenamebfd956d078a6f39d360f702a4ead7421Form
    /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/laravel-filemanager/rename'
 */
const getRenameaa4eba3de8894d18fcb37eaf7359b998 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRenameaa4eba3de8894d18fcb37eaf7359b998.url(options),
    method: 'get',
})

getRenameaa4eba3de8894d18fcb37eaf7359b998.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/laravel-filemanager/rename',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/laravel-filemanager/rename'
 */
getRenameaa4eba3de8894d18fcb37eaf7359b998.url = (options?: RouteQueryOptions) => {
    return getRenameaa4eba3de8894d18fcb37eaf7359b998.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/laravel-filemanager/rename'
 */
getRenameaa4eba3de8894d18fcb37eaf7359b998.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRenameaa4eba3de8894d18fcb37eaf7359b998.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/laravel-filemanager/rename'
 */
getRenameaa4eba3de8894d18fcb37eaf7359b998.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRenameaa4eba3de8894d18fcb37eaf7359b998.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/laravel-filemanager/rename'
 */
    const getRenameaa4eba3de8894d18fcb37eaf7359b998Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getRenameaa4eba3de8894d18fcb37eaf7359b998.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/laravel-filemanager/rename'
 */
        getRenameaa4eba3de8894d18fcb37eaf7359b998Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRenameaa4eba3de8894d18fcb37eaf7359b998.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/laravel-filemanager/rename'
 */
        getRenameaa4eba3de8894d18fcb37eaf7359b998Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRenameaa4eba3de8894d18fcb37eaf7359b998.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getRenameaa4eba3de8894d18fcb37eaf7359b998.form = getRenameaa4eba3de8894d18fcb37eaf7359b998Form

export const getRename = {
    '/admin-dashboard/filemanager/rename': getRenamebfd956d078a6f39d360f702a4ead7421,
    '/admin-dashboard/laravel-filemanager/rename': getRenameaa4eba3de8894d18fcb37eaf7359b998,
}

const RenameController = { getRename }

export default RenameController