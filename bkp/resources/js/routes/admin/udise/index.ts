import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\UdiseController::index
 * @see app/Http/Controllers/Backend/UdiseController.php:19
 * @route '/admin-dashboard/udise-codes'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/udise-codes',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UdiseController::index
 * @see app/Http/Controllers/Backend/UdiseController.php:19
 * @route '/admin-dashboard/udise-codes'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UdiseController::index
 * @see app/Http/Controllers/Backend/UdiseController.php:19
 * @route '/admin-dashboard/udise-codes'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\UdiseController::index
 * @see app/Http/Controllers/Backend/UdiseController.php:19
 * @route '/admin-dashboard/udise-codes'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\UdiseController::index
 * @see app/Http/Controllers/Backend/UdiseController.php:19
 * @route '/admin-dashboard/udise-codes'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\UdiseController::index
 * @see app/Http/Controllers/Backend/UdiseController.php:19
 * @route '/admin-dashboard/udise-codes'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\UdiseController::index
 * @see app/Http/Controllers/Backend/UdiseController.php:19
 * @route '/admin-dashboard/udise-codes'
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
/**
* @see \App\Http\Controllers\Backend\UdiseController::create
 * @see app/Http/Controllers/Backend/UdiseController.php:45
 * @route '/admin-dashboard/udise-codes/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/udise-codes/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\UdiseController::create
 * @see app/Http/Controllers/Backend/UdiseController.php:45
 * @route '/admin-dashboard/udise-codes/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UdiseController::create
 * @see app/Http/Controllers/Backend/UdiseController.php:45
 * @route '/admin-dashboard/udise-codes/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\UdiseController::create
 * @see app/Http/Controllers/Backend/UdiseController.php:45
 * @route '/admin-dashboard/udise-codes/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\UdiseController::create
 * @see app/Http/Controllers/Backend/UdiseController.php:45
 * @route '/admin-dashboard/udise-codes/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\UdiseController::create
 * @see app/Http/Controllers/Backend/UdiseController.php:45
 * @route '/admin-dashboard/udise-codes/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\UdiseController::create
 * @see app/Http/Controllers/Backend/UdiseController.php:45
 * @route '/admin-dashboard/udise-codes/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\Backend\UdiseController::store
 * @see app/Http/Controllers/Backend/UdiseController.php:52
 * @route '/admin-dashboard/udise-codes'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin-dashboard/udise-codes',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\UdiseController::store
 * @see app/Http/Controllers/Backend/UdiseController.php:52
 * @route '/admin-dashboard/udise-codes'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UdiseController::store
 * @see app/Http/Controllers/Backend/UdiseController.php:52
 * @route '/admin-dashboard/udise-codes'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\UdiseController::store
 * @see app/Http/Controllers/Backend/UdiseController.php:52
 * @route '/admin-dashboard/udise-codes'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\UdiseController::store
 * @see app/Http/Controllers/Backend/UdiseController.php:52
 * @route '/admin-dashboard/udise-codes'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\UdiseController::toggle
 * @see app/Http/Controllers/Backend/UdiseController.php:79
 * @route '/admin-dashboard/udise-codes/{udise}/toggle'
 */
export const toggle = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

toggle.definition = {
    methods: ["patch"],
    url: '/admin-dashboard/udise-codes/{udise}/toggle',
} satisfies RouteDefinition<["patch"]>

/**
* @see \App\Http\Controllers\Backend\UdiseController::toggle
 * @see app/Http/Controllers/Backend/UdiseController.php:79
 * @route '/admin-dashboard/udise-codes/{udise}/toggle'
 */
toggle.url = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { udise: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { udise: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    udise: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        udise: typeof args.udise === 'object'
                ? args.udise.id
                : args.udise,
                }

    return toggle.definition.url
            .replace('{udise}', parsedArgs.udise.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UdiseController::toggle
 * @see app/Http/Controllers/Backend/UdiseController.php:79
 * @route '/admin-dashboard/udise-codes/{udise}/toggle'
 */
toggle.patch = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: toggle.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Backend\UdiseController::toggle
 * @see app/Http/Controllers/Backend/UdiseController.php:79
 * @route '/admin-dashboard/udise-codes/{udise}/toggle'
 */
    const toggleForm = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: toggle.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PATCH',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\UdiseController::toggle
 * @see app/Http/Controllers/Backend/UdiseController.php:79
 * @route '/admin-dashboard/udise-codes/{udise}/toggle'
 */
        toggleForm.patch = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: toggle.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    toggle.form = toggleForm
/**
* @see \App\Http\Controllers\Backend\UdiseController::destroy
 * @see app/Http/Controllers/Backend/UdiseController.php:92
 * @route '/admin-dashboard/udise-codes/{udise}'
 */
export const destroy = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/udise-codes/{udise}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\UdiseController::destroy
 * @see app/Http/Controllers/Backend/UdiseController.php:92
 * @route '/admin-dashboard/udise-codes/{udise}'
 */
destroy.url = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { udise: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { udise: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    udise: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        udise: typeof args.udise === 'object'
                ? args.udise.id
                : args.udise,
                }

    return destroy.definition.url
            .replace('{udise}', parsedArgs.udise.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UdiseController::destroy
 * @see app/Http/Controllers/Backend/UdiseController.php:92
 * @route '/admin-dashboard/udise-codes/{udise}'
 */
destroy.delete = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\UdiseController::destroy
 * @see app/Http/Controllers/Backend/UdiseController.php:92
 * @route '/admin-dashboard/udise-codes/{udise}'
 */
    const destroyForm = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\UdiseController::destroy
 * @see app/Http/Controllers/Backend/UdiseController.php:92
 * @route '/admin-dashboard/udise-codes/{udise}'
 */
        destroyForm.delete = (args: { udise: number | { id: number } } | [udise: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: destroy.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    destroy.form = destroyForm
/**
* @see \App\Http\Controllers\Backend\UdiseController::importMethod
 * @see app/Http/Controllers/Backend/UdiseController.php:130
 * @route '/admin-dashboard/udise-codes/import'
 */
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/admin-dashboard/udise-codes/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\UdiseController::importMethod
 * @see app/Http/Controllers/Backend/UdiseController.php:130
 * @route '/admin-dashboard/udise-codes/import'
 */
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UdiseController::importMethod
 * @see app/Http/Controllers/Backend/UdiseController.php:130
 * @route '/admin-dashboard/udise-codes/import'
 */
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\UdiseController::importMethod
 * @see app/Http/Controllers/Backend/UdiseController.php:130
 * @route '/admin-dashboard/udise-codes/import'
 */
    const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMethod.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\UdiseController::importMethod
 * @see app/Http/Controllers/Backend/UdiseController.php:130
 * @route '/admin-dashboard/udise-codes/import'
 */
        importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMethod.url(options),
            method: 'post',
        })
    
    importMethod.form = importMethodForm
/**
* @see \App\Http\Controllers\Backend\UdiseController::bulkDelete
 * @see app/Http/Controllers/Backend/UdiseController.php:106
 * @route '/admin-dashboard/udise/bulk-delete'
 */
export const bulkDelete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

bulkDelete.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/udise/bulk-delete',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\UdiseController::bulkDelete
 * @see app/Http/Controllers/Backend/UdiseController.php:106
 * @route '/admin-dashboard/udise/bulk-delete'
 */
bulkDelete.url = (options?: RouteQueryOptions) => {
    return bulkDelete.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\UdiseController::bulkDelete
 * @see app/Http/Controllers/Backend/UdiseController.php:106
 * @route '/admin-dashboard/udise/bulk-delete'
 */
bulkDelete.delete = (options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: bulkDelete.url(options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\UdiseController::bulkDelete
 * @see app/Http/Controllers/Backend/UdiseController.php:106
 * @route '/admin-dashboard/udise/bulk-delete'
 */
    const bulkDeleteForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: bulkDelete.url({
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\UdiseController::bulkDelete
 * @see app/Http/Controllers/Backend/UdiseController.php:106
 * @route '/admin-dashboard/udise/bulk-delete'
 */
        bulkDeleteForm.delete = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: bulkDelete.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'DELETE',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    bulkDelete.form = bulkDeleteForm
const udise = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
toggle: Object.assign(toggle, toggle),
destroy: Object.assign(destroy, destroy),
import: Object.assign(importMethod, importMethod),
bulkDelete: Object.assign(bulkDelete, bulkDelete),
}

export default udise