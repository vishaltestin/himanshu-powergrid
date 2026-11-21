import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
const getItems1f714b5c8874d36f4e26cc1d0cca499c = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getItems1f714b5c8874d36f4e26cc1d0cca499c.url(options),
    method: 'get',
})

getItems1f714b5c8874d36f4e26cc1d0cca499c.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/jsonitems',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
getItems1f714b5c8874d36f4e26cc1d0cca499c.url = (options?: RouteQueryOptions) => {
    return getItems1f714b5c8874d36f4e26cc1d0cca499c.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
getItems1f714b5c8874d36f4e26cc1d0cca499c.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getItems1f714b5c8874d36f4e26cc1d0cca499c.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
getItems1f714b5c8874d36f4e26cc1d0cca499c.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getItems1f714b5c8874d36f4e26cc1d0cca499c.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
    const getItems1f714b5c8874d36f4e26cc1d0cca499cForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getItems1f714b5c8874d36f4e26cc1d0cca499c.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
        getItems1f714b5c8874d36f4e26cc1d0cca499cForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getItems1f714b5c8874d36f4e26cc1d0cca499c.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
        getItems1f714b5c8874d36f4e26cc1d0cca499cForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getItems1f714b5c8874d36f4e26cc1d0cca499c.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getItems1f714b5c8874d36f4e26cc1d0cca499c.form = getItems1f714b5c8874d36f4e26cc1d0cca499cForm
    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/laravel-filemanager/jsonitems'
 */
const getItems0693a166bd788d57415d0112fb297ed3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getItems0693a166bd788d57415d0112fb297ed3.url(options),
    method: 'get',
})

getItems0693a166bd788d57415d0112fb297ed3.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/laravel-filemanager/jsonitems',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/laravel-filemanager/jsonitems'
 */
getItems0693a166bd788d57415d0112fb297ed3.url = (options?: RouteQueryOptions) => {
    return getItems0693a166bd788d57415d0112fb297ed3.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/laravel-filemanager/jsonitems'
 */
getItems0693a166bd788d57415d0112fb297ed3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getItems0693a166bd788d57415d0112fb297ed3.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/laravel-filemanager/jsonitems'
 */
getItems0693a166bd788d57415d0112fb297ed3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getItems0693a166bd788d57415d0112fb297ed3.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/laravel-filemanager/jsonitems'
 */
    const getItems0693a166bd788d57415d0112fb297ed3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getItems0693a166bd788d57415d0112fb297ed3.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/laravel-filemanager/jsonitems'
 */
        getItems0693a166bd788d57415d0112fb297ed3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getItems0693a166bd788d57415d0112fb297ed3.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/laravel-filemanager/jsonitems'
 */
        getItems0693a166bd788d57415d0112fb297ed3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getItems0693a166bd788d57415d0112fb297ed3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getItems0693a166bd788d57415d0112fb297ed3.form = getItems0693a166bd788d57415d0112fb297ed3Form

export const getItems = {
    '/admin-dashboard/filemanager/jsonitems': getItems1f714b5c8874d36f4e26cc1d0cca499c,
    '/admin-dashboard/laravel-filemanager/jsonitems': getItems0693a166bd788d57415d0112fb297ed3,
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
const moveb92f5956447734bcb310319789d4cfa3 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: moveb92f5956447734bcb310319789d4cfa3.url(options),
    method: 'get',
})

moveb92f5956447734bcb310319789d4cfa3.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/move',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
moveb92f5956447734bcb310319789d4cfa3.url = (options?: RouteQueryOptions) => {
    return moveb92f5956447734bcb310319789d4cfa3.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
moveb92f5956447734bcb310319789d4cfa3.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: moveb92f5956447734bcb310319789d4cfa3.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
moveb92f5956447734bcb310319789d4cfa3.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: moveb92f5956447734bcb310319789d4cfa3.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
    const moveb92f5956447734bcb310319789d4cfa3Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: moveb92f5956447734bcb310319789d4cfa3.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
        moveb92f5956447734bcb310319789d4cfa3Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: moveb92f5956447734bcb310319789d4cfa3.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
        moveb92f5956447734bcb310319789d4cfa3Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: moveb92f5956447734bcb310319789d4cfa3.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    moveb92f5956447734bcb310319789d4cfa3.form = moveb92f5956447734bcb310319789d4cfa3Form
    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/laravel-filemanager/move'
 */
const move28f16be35575c64b4df4d62a84719425 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: move28f16be35575c64b4df4d62a84719425.url(options),
    method: 'get',
})

move28f16be35575c64b4df4d62a84719425.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/laravel-filemanager/move',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/laravel-filemanager/move'
 */
move28f16be35575c64b4df4d62a84719425.url = (options?: RouteQueryOptions) => {
    return move28f16be35575c64b4df4d62a84719425.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/laravel-filemanager/move'
 */
move28f16be35575c64b4df4d62a84719425.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: move28f16be35575c64b4df4d62a84719425.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/laravel-filemanager/move'
 */
move28f16be35575c64b4df4d62a84719425.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: move28f16be35575c64b4df4d62a84719425.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/laravel-filemanager/move'
 */
    const move28f16be35575c64b4df4d62a84719425Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: move28f16be35575c64b4df4d62a84719425.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/laravel-filemanager/move'
 */
        move28f16be35575c64b4df4d62a84719425Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: move28f16be35575c64b4df4d62a84719425.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/laravel-filemanager/move'
 */
        move28f16be35575c64b4df4d62a84719425Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: move28f16be35575c64b4df4d62a84719425.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    move28f16be35575c64b4df4d62a84719425.form = move28f16be35575c64b4df4d62a84719425Form

export const move = {
    '/admin-dashboard/filemanager/move': moveb92f5956447734bcb310319789d4cfa3,
    '/admin-dashboard/laravel-filemanager/move': move28f16be35575c64b4df4d62a84719425,
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
const doMove1bc89b98f6d7a5d22eeaff31d01c6495 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doMove1bc89b98f6d7a5d22eeaff31d01c6495.url(options),
    method: 'get',
})

doMove1bc89b98f6d7a5d22eeaff31d01c6495.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/domove',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
doMove1bc89b98f6d7a5d22eeaff31d01c6495.url = (options?: RouteQueryOptions) => {
    return doMove1bc89b98f6d7a5d22eeaff31d01c6495.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
doMove1bc89b98f6d7a5d22eeaff31d01c6495.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doMove1bc89b98f6d7a5d22eeaff31d01c6495.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
doMove1bc89b98f6d7a5d22eeaff31d01c6495.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: doMove1bc89b98f6d7a5d22eeaff31d01c6495.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
    const doMove1bc89b98f6d7a5d22eeaff31d01c6495Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: doMove1bc89b98f6d7a5d22eeaff31d01c6495.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
        doMove1bc89b98f6d7a5d22eeaff31d01c6495Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: doMove1bc89b98f6d7a5d22eeaff31d01c6495.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
        doMove1bc89b98f6d7a5d22eeaff31d01c6495Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: doMove1bc89b98f6d7a5d22eeaff31d01c6495.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    doMove1bc89b98f6d7a5d22eeaff31d01c6495.form = doMove1bc89b98f6d7a5d22eeaff31d01c6495Form
    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/laravel-filemanager/domove'
 */
const doMove654ea0528bf9ccc7d94fff09bd2d31e9 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doMove654ea0528bf9ccc7d94fff09bd2d31e9.url(options),
    method: 'get',
})

doMove654ea0528bf9ccc7d94fff09bd2d31e9.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/laravel-filemanager/domove',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/laravel-filemanager/domove'
 */
doMove654ea0528bf9ccc7d94fff09bd2d31e9.url = (options?: RouteQueryOptions) => {
    return doMove654ea0528bf9ccc7d94fff09bd2d31e9.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/laravel-filemanager/domove'
 */
doMove654ea0528bf9ccc7d94fff09bd2d31e9.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doMove654ea0528bf9ccc7d94fff09bd2d31e9.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/laravel-filemanager/domove'
 */
doMove654ea0528bf9ccc7d94fff09bd2d31e9.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: doMove654ea0528bf9ccc7d94fff09bd2d31e9.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/laravel-filemanager/domove'
 */
    const doMove654ea0528bf9ccc7d94fff09bd2d31e9Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: doMove654ea0528bf9ccc7d94fff09bd2d31e9.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/laravel-filemanager/domove'
 */
        doMove654ea0528bf9ccc7d94fff09bd2d31e9Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: doMove654ea0528bf9ccc7d94fff09bd2d31e9.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/laravel-filemanager/domove'
 */
        doMove654ea0528bf9ccc7d94fff09bd2d31e9Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: doMove654ea0528bf9ccc7d94fff09bd2d31e9.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    doMove654ea0528bf9ccc7d94fff09bd2d31e9.form = doMove654ea0528bf9ccc7d94fff09bd2d31e9Form

export const doMove = {
    '/admin-dashboard/filemanager/domove': doMove1bc89b98f6d7a5d22eeaff31d01c6495,
    '/admin-dashboard/laravel-filemanager/domove': doMove654ea0528bf9ccc7d94fff09bd2d31e9,
}

const ItemsController = { getItems, move, doMove }

export default ItemsController