import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
const upload3d76ebfdf2b14ecbfe880b54e96193a2 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'get',
})

upload3d76ebfdf2b14ecbfe880b54e96193a2.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin-dashboard/filemanager/upload',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.url = (options?: RouteQueryOptions) => {
    return upload3d76ebfdf2b14ecbfe880b54e96193a2.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'head',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'post',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'put',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'patch',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'delete',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
upload3d76ebfdf2b14ecbfe880b54e96193a2.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
    method: 'options',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
    const upload3d76ebfdf2b14ecbfe880b54e96193a2Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        upload3d76ebfdf2b14ecbfe880b54e96193a2Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        upload3d76ebfdf2b14ecbfe880b54e96193a2Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url({
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
        upload3d76ebfdf2b14ecbfe880b54e96193a2Form.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url(options),
            method: 'post',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/filemanager/upload'
 */
        upload3d76ebfdf2b14ecbfe880b54e96193a2Form.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url({
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
        upload3d76ebfdf2b14ecbfe880b54e96193a2Form.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url({
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
        upload3d76ebfdf2b14ecbfe880b54e96193a2Form.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url({
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
        upload3d76ebfdf2b14ecbfe880b54e96193a2Form.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: upload3d76ebfdf2b14ecbfe880b54e96193a2.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    upload3d76ebfdf2b14ecbfe880b54e96193a2.form = upload3d76ebfdf2b14ecbfe880b54e96193a2Form
    /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
const uploadbab4658768544d76a694966c527600cb = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'get',
})

uploadbab4658768544d76a694966c527600cb.definition = {
    methods: ["get","head","post","put","patch","delete","options"],
    url: '/admin-dashboard/laravel-filemanager/upload',
} satisfies RouteDefinition<["get","head","post","put","patch","delete","options"]>

/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.url = (options?: RouteQueryOptions) => {
    return uploadbab4658768544d76a694966c527600cb.definition.url + queryParams(options)
}

/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'get',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'head',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'post',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.put = (options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'put',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.patch = (options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'patch',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'delete',
})
/**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
uploadbab4658768544d76a694966c527600cb.options = (options?: RouteQueryOptions): RouteDefinition<'options'> => ({
    url: uploadbab4658768544d76a694966c527600cb.url(options),
    method: 'options',
})

    /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
    const uploadbab4658768544d76a694966c527600cbForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: uploadbab4658768544d76a694966c527600cb.url(options),
        method: 'get',
    })

            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
        uploadbab4658768544d76a694966c527600cbForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: uploadbab4658768544d76a694966c527600cb.url(options),
            method: 'get',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
        uploadbab4658768544d76a694966c527600cbForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: uploadbab4658768544d76a694966c527600cb.url({
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
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
        uploadbab4658768544d76a694966c527600cbForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadbab4658768544d76a694966c527600cb.url(options),
            method: 'post',
        })
            /**
* @see \UniSharp\LaravelFilemanager\Controllers\UploadController::upload
 * @see vendor/unisharp/laravel-filemanager/src/Controllers/UploadController.php:27
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
        uploadbab4658768544d76a694966c527600cbForm.put = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadbab4658768544d76a694966c527600cb.url({
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
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
        uploadbab4658768544d76a694966c527600cbForm.patch = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadbab4658768544d76a694966c527600cb.url({
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
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
        uploadbab4658768544d76a694966c527600cbForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: uploadbab4658768544d76a694966c527600cb.url({
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
 * @route '/admin-dashboard/laravel-filemanager/upload'
 */
        uploadbab4658768544d76a694966c527600cbForm.options = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: uploadbab4658768544d76a694966c527600cb.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'OPTIONS',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    uploadbab4658768544d76a694966c527600cb.form = uploadbab4658768544d76a694966c527600cbForm

export const upload = {
    '/admin-dashboard/filemanager/upload': upload3d76ebfdf2b14ecbfe880b54e96193a2,
    '/admin-dashboard/laravel-filemanager/upload': uploadbab4658768544d76a694966c527600cb,
}

const UploadController = { upload }

export default UploadController