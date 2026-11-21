import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../wayfinder'
/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::show
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:36
 * @route '/admin-dashboard/filemanager'
 */
export const show = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::show
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:36
 * @route '/admin-dashboard/filemanager'
 */
show.url = (options?: RouteQueryOptions) => {
    return show.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::show
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:36
 * @route '/admin-dashboard/filemanager'
 */
show.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::show
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:36
 * @route '/admin-dashboard/filemanager'
 */
show.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::show
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:36
 * @route '/admin-dashboard/filemanager'
 */
    const showForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::show
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:36
 * @route '/admin-dashboard/filemanager'
 */
        showForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::show
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:36
 * @route '/admin-dashboard/filemanager'
 */
        showForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::getErrors
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:47
 * @route '/admin-dashboard/filemanager/errors'
 */
export const getErrors = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getErrors.url(options),
    method: 'get',
})

getErrors.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/errors',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::getErrors
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:47
 * @route '/admin-dashboard/filemanager/errors'
 */
getErrors.url = (options?: RouteQueryOptions) => {
    return getErrors.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::getErrors
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:47
 * @route '/admin-dashboard/filemanager/errors'
 */
getErrors.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getErrors.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::getErrors
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:47
 * @route '/admin-dashboard/filemanager/errors'
 */
getErrors.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getErrors.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::getErrors
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:47
 * @route '/admin-dashboard/filemanager/errors'
 */
    const getErrorsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getErrors.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::getErrors
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:47
 * @route '/admin-dashboard/filemanager/errors'
 */
        getErrorsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getErrors.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\LfmController::getErrors
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/LfmController.php:47
 * @route '/admin-dashboard/filemanager/errors'
 */
        getErrorsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getErrors.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getErrors.form = getErrorsForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
export const upload = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upload.url(options),
    method: 'get',
})

upload.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin-dashboard/filemanager/upload',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.url = (options?: RouteQueryOptions) => {
    return upload.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upload.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: upload.url(options),
    method: 'head',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload.url(options),
    method: 'post',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: upload.url(options),
    method: 'put',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: upload.url(options),
    method: 'patch',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: upload.url(options),
    method: 'delete',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: upload.url(options),
    method: 'options',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
    const uploadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: upload.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        uploadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: upload.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        uploadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: upload.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        uploadForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url(options),
            method: 'post',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        uploadForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        uploadForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        uploadForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        uploadForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: upload.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    upload.form = uploadForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
export const getItems = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getItems.url(options),
    method: 'get',
})

getItems.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/jsonitems',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
getItems.url = (options?: RouteQueryOptions) => {
    return getItems.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
getItems.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getItems.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
getItems.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getItems.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
    const getItemsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getItems.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
        getItemsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getItems.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::getItems
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:18
 * @route '/admin-dashboard/filemanager/jsonitems'
 */
        getItemsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getItems.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getItems.form = getItemsForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
export const move = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: move.url(options),
    method: 'get',
})

move.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/move',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
move.url = (options?: RouteQueryOptions) => {
    return move.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
move.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: move.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
move.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: move.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
    const moveForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: move.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
        moveForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: move.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::move
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:46
 * @route '/admin-dashboard/filemanager/move'
 */
        moveForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: move.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    move.form = moveForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
export const doMove = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doMove.url(options),
    method: 'get',
})

doMove.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/domove',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
doMove.url = (options?: RouteQueryOptions) => {
    return doMove.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
doMove.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: doMove.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
doMove.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: doMove.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
    const doMoveForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: doMove.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
        doMoveForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: doMove.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ItemsController::doMove
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ItemsController.php:68
 * @route '/admin-dashboard/filemanager/domove'
 */
        doMoveForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: doMove.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    doMove.form = doMoveForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getAddfolder
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:42
 * @route '/admin-dashboard/filemanager/newfolder'
 */
export const getAddfolder = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAddfolder.url(options),
    method: 'get',
})

getAddfolder.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/newfolder',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getAddfolder
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:42
 * @route '/admin-dashboard/filemanager/newfolder'
 */
getAddfolder.url = (options?: RouteQueryOptions) => {
    return getAddfolder.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getAddfolder
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:42
 * @route '/admin-dashboard/filemanager/newfolder'
 */
getAddfolder.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getAddfolder.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getAddfolder
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:42
 * @route '/admin-dashboard/filemanager/newfolder'
 */
getAddfolder.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getAddfolder.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getAddfolder
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:42
 * @route '/admin-dashboard/filemanager/newfolder'
 */
    const getAddfolderForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getAddfolder.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getAddfolder
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:42
 * @route '/admin-dashboard/filemanager/newfolder'
 */
        getAddfolderForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAddfolder.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getAddfolder
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:42
 * @route '/admin-dashboard/filemanager/newfolder'
 */
        getAddfolderForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getAddfolder.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getAddfolder.form = getAddfolderForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getFolders
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:16
 * @route '/admin-dashboard/filemanager/folders'
 */
export const getFolders = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getFolders.url(options),
    method: 'get',
})

getFolders.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/folders',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getFolders
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:16
 * @route '/admin-dashboard/filemanager/folders'
 */
getFolders.url = (options?: RouteQueryOptions) => {
    return getFolders.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getFolders
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:16
 * @route '/admin-dashboard/filemanager/folders'
 */
getFolders.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getFolders.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getFolders
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:16
 * @route '/admin-dashboard/filemanager/folders'
 */
getFolders.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getFolders.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getFolders
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:16
 * @route '/admin-dashboard/filemanager/folders'
 */
    const getFoldersForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getFolders.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getFolders
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:16
 * @route '/admin-dashboard/filemanager/folders'
 */
        getFoldersForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getFolders.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\FolderController::getFolders
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/FolderController.php:16
 * @route '/admin-dashboard/filemanager/folders'
 */
        getFoldersForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getFolders.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getFolders.form = getFoldersForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCrop
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:26
 * @route '/admin-dashboard/filemanager/crop'
 */
export const getCrop = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCrop.url(options),
    method: 'get',
})

getCrop.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/crop',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCrop
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:26
 * @route '/admin-dashboard/filemanager/crop'
 */
getCrop.url = (options?: RouteQueryOptions) => {
    return getCrop.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCrop
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:26
 * @route '/admin-dashboard/filemanager/crop'
 */
getCrop.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCrop.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCrop
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:26
 * @route '/admin-dashboard/filemanager/crop'
 */
getCrop.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCrop.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCrop
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:26
 * @route '/admin-dashboard/filemanager/crop'
 */
    const getCropForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCrop.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCrop
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:26
 * @route '/admin-dashboard/filemanager/crop'
 */
        getCropForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCrop.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCrop
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:26
 * @route '/admin-dashboard/filemanager/crop'
 */
        getCropForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCrop.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCrop.form = getCropForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:38
 * @route '/admin-dashboard/filemanager/cropimage'
 */
export const getCropImage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCropImage.url(options),
    method: 'get',
})

getCropImage.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/cropimage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:38
 * @route '/admin-dashboard/filemanager/cropimage'
 */
getCropImage.url = (options?: RouteQueryOptions) => {
    return getCropImage.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:38
 * @route '/admin-dashboard/filemanager/cropimage'
 */
getCropImage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getCropImage.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:38
 * @route '/admin-dashboard/filemanager/cropimage'
 */
getCropImage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getCropImage.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:38
 * @route '/admin-dashboard/filemanager/cropimage'
 */
    const getCropImageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getCropImage.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:38
 * @route '/admin-dashboard/filemanager/cropimage'
 */
        getCropImageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCropImage.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:38
 * @route '/admin-dashboard/filemanager/cropimage'
 */
        getCropImageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getCropImage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getCropImage.form = getCropImageForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getNewCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:73
 * @route '/admin-dashboard/filemanager/cropnewimage'
 */
export const getNewCropImage = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getNewCropImage.url(options),
    method: 'get',
})

getNewCropImage.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/cropnewimage',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getNewCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:73
 * @route '/admin-dashboard/filemanager/cropnewimage'
 */
getNewCropImage.url = (options?: RouteQueryOptions) => {
    return getNewCropImage.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getNewCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:73
 * @route '/admin-dashboard/filemanager/cropnewimage'
 */
getNewCropImage.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getNewCropImage.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getNewCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:73
 * @route '/admin-dashboard/filemanager/cropnewimage'
 */
getNewCropImage.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getNewCropImage.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getNewCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:73
 * @route '/admin-dashboard/filemanager/cropnewimage'
 */
    const getNewCropImageForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getNewCropImage.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getNewCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:73
 * @route '/admin-dashboard/filemanager/cropnewimage'
 */
        getNewCropImageForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getNewCropImage.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\CropController::getNewCropImage
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/CropController.php:73
 * @route '/admin-dashboard/filemanager/cropnewimage'
 */
        getNewCropImageForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getNewCropImage.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getNewCropImage.form = getNewCropImageForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
export const getRename = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRename.url(options),
    method: 'get',
})

getRename.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/rename',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
getRename.url = (options?: RouteQueryOptions) => {
    return getRename.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
getRename.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getRename.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
getRename.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getRename.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
    const getRenameForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getRename.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
        getRenameForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRename.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\RenameController::getRename
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/RenameController.php:16
 * @route '/admin-dashboard/filemanager/rename'
 */
        getRenameForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getRename.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getRename.form = getRenameForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::getResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:26
 * @route '/admin-dashboard/filemanager/resize'
 */
export const getResize = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResize.url(options),
    method: 'get',
})

getResize.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/resize',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::getResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:26
 * @route '/admin-dashboard/filemanager/resize'
 */
getResize.url = (options?: RouteQueryOptions) => {
    return getResize.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::getResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:26
 * @route '/admin-dashboard/filemanager/resize'
 */
getResize.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getResize.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::getResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:26
 * @route '/admin-dashboard/filemanager/resize'
 */
getResize.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getResize.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::getResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:26
 * @route '/admin-dashboard/filemanager/resize'
 */
    const getResizeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getResize.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::getResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:26
 * @route '/admin-dashboard/filemanager/resize'
 */
        getResizeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResize.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::getResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:26
 * @route '/admin-dashboard/filemanager/resize'
 */
        getResizeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getResize.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getResize.form = getResizeForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:65
 * @route '/admin-dashboard/filemanager/doresize'
 */
export const performResize = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performResize.url(options),
    method: 'get',
})

performResize.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/doresize',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:65
 * @route '/admin-dashboard/filemanager/doresize'
 */
performResize.url = (options?: RouteQueryOptions) => {
    return performResize.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:65
 * @route '/admin-dashboard/filemanager/doresize'
 */
performResize.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performResize.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:65
 * @route '/admin-dashboard/filemanager/doresize'
 */
performResize.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: performResize.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:65
 * @route '/admin-dashboard/filemanager/doresize'
 */
    const performResizeForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: performResize.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:65
 * @route '/admin-dashboard/filemanager/doresize'
 */
        performResizeForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performResize.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResize
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:65
 * @route '/admin-dashboard/filemanager/doresize'
 */
        performResizeForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performResize.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    performResize.form = performResizeForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResizeNew
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:97
 * @route '/admin-dashboard/filemanager/doresizenew'
 */
export const performResizeNew = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performResizeNew.url(options),
    method: 'get',
})

performResizeNew.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/doresizenew',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResizeNew
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:97
 * @route '/admin-dashboard/filemanager/doresizenew'
 */
performResizeNew.url = (options?: RouteQueryOptions) => {
    return performResizeNew.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResizeNew
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:97
 * @route '/admin-dashboard/filemanager/doresizenew'
 */
performResizeNew.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: performResizeNew.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResizeNew
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:97
 * @route '/admin-dashboard/filemanager/doresizenew'
 */
performResizeNew.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: performResizeNew.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResizeNew
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:97
 * @route '/admin-dashboard/filemanager/doresizenew'
 */
    const performResizeNewForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: performResizeNew.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResizeNew
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:97
 * @route '/admin-dashboard/filemanager/doresizenew'
 */
        performResizeNewForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performResizeNew.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\ResizeController::performResizeNew
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/ResizeController.php:97
 * @route '/admin-dashboard/filemanager/doresizenew'
 */
        performResizeNewForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: performResizeNew.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    performResizeNew.form = performResizeNewForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
export const getDownload = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDownload.url(options),
    method: 'get',
})

getDownload.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/download',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
getDownload.url = (options?: RouteQueryOptions) => {
    return getDownload.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
getDownload.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDownload.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
getDownload.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDownload.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
    const getDownloadForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getDownload.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
        getDownloadForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDownload.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DownloadController::getDownload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DownloadController.php:9
 * @route '/admin-dashboard/filemanager/download'
 */
        getDownloadForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDownload.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getDownload.form = getDownloadForm
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DeleteController::getDelete
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DeleteController.php:20
 * @route '/admin-dashboard/filemanager/delete'
 */
export const getDelete = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(options),
    method: 'get',
})

getDelete.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/filemanager/delete',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DeleteController::getDelete
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DeleteController.php:20
 * @route '/admin-dashboard/filemanager/delete'
 */
getDelete.url = (options?: RouteQueryOptions) => {
    return getDelete.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\DeleteController::getDelete
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DeleteController.php:20
 * @route '/admin-dashboard/filemanager/delete'
 */
getDelete.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: getDelete.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\DeleteController::getDelete
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DeleteController.php:20
 * @route '/admin-dashboard/filemanager/delete'
 */
getDelete.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: getDelete.url(options),
    method: 'head',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\DeleteController::getDelete
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DeleteController.php:20
 * @route '/admin-dashboard/filemanager/delete'
 */
    const getDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: getDelete.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DeleteController::getDelete
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DeleteController.php:20
 * @route '/admin-dashboard/filemanager/delete'
 */
        getDeleteForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDelete.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\DeleteController::getDelete
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/DeleteController.php:20
 * @route '/admin-dashboard/filemanager/delete'
 */
        getDeleteForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: getDelete.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    getDelete.form = getDeleteForm
const lfm = {
    show: Object.assign(show, show),
getErrors: Object.assign(getErrors, getErrors),
upload: Object.assign(upload, upload),
getItems: Object.assign(getItems, getItems),
move: Object.assign(move, move),
doMove: Object.assign(doMove, doMove),
getAddfolder: Object.assign(getAddfolder, getAddfolder),
getFolders: Object.assign(getFolders, getFolders),
getCrop: Object.assign(getCrop, getCrop),
getCropImage: Object.assign(getCropImage, getCropImage),
getNewCropImage: Object.assign(getNewCropImage, getNewCropImage),
getRename: Object.assign(getRename, getRename),
getResize: Object.assign(getResize, getResize),
performResize: Object.assign(performResize, performResize),
performResizeNew: Object.assign(performResizeNew, performResizeNew),
getDownload: Object.assign(getDownload, getDownload),
getDelete: Object.assign(getDelete, getDelete),
}

export default lfm