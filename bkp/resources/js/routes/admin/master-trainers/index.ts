import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../wayfinder'
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::index
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:13
 * @route '/admin-dashboard/master-trainers'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/master-trainers',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::index
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:13
 * @route '/admin-dashboard/master-trainers'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::index
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:13
 * @route '/admin-dashboard/master-trainers'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::index
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:13
 * @route '/admin-dashboard/master-trainers'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::index
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:13
 * @route '/admin-dashboard/master-trainers'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::index
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:13
 * @route '/admin-dashboard/master-trainers'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::index
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:13
 * @route '/admin-dashboard/master-trainers'
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
* @see \App\Http\Controllers\Backend\MasterTrainerController::create
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:27
 * @route '/admin-dashboard/master-trainers/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/master-trainers/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::create
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:27
 * @route '/admin-dashboard/master-trainers/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::create
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:27
 * @route '/admin-dashboard/master-trainers/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::create
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:27
 * @route '/admin-dashboard/master-trainers/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::create
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:27
 * @route '/admin-dashboard/master-trainers/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::create
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:27
 * @route '/admin-dashboard/master-trainers/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::create
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:27
 * @route '/admin-dashboard/master-trainers/create'
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
* @see \App\Http\Controllers\Backend\MasterTrainerController::store
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:32
 * @route '/admin-dashboard/master-trainers'
 */
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/admin-dashboard/master-trainers',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::store
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:32
 * @route '/admin-dashboard/master-trainers'
 */
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::store
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:32
 * @route '/admin-dashboard/master-trainers'
 */
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::store
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:32
 * @route '/admin-dashboard/master-trainers'
 */
    const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: store.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::store
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:32
 * @route '/admin-dashboard/master-trainers'
 */
        storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: store.url(options),
            method: 'post',
        })
    
    store.form = storeForm
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::show
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:0
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
export const show = (args: { master_trainer: string | number } | [master_trainer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/master-trainers/{master_trainer}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::show
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:0
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
show.url = (args: { master_trainer: string | number } | [master_trainer: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { master_trainer: args }
    }

    
    if (Array.isArray(args)) {
        args = {
                    master_trainer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        master_trainer: args.master_trainer,
                }

    return show.definition.url
            .replace('{master_trainer}', parsedArgs.master_trainer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::show
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:0
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
show.get = (args: { master_trainer: string | number } | [master_trainer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::show
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:0
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
show.head = (args: { master_trainer: string | number } | [master_trainer: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::show
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:0
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
    const showForm = (args: { master_trainer: string | number } | [master_trainer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: show.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::show
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:0
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
        showForm.get = (args: { master_trainer: string | number } | [master_trainer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::show
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:0
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
        showForm.head = (args: { master_trainer: string | number } | [master_trainer: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: show.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    show.form = showForm
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::edit
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:47
 * @route '/admin-dashboard/master-trainers/{master_trainer}/edit'
 */
export const edit = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/admin-dashboard/master-trainers/{master_trainer}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::edit
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:47
 * @route '/admin-dashboard/master-trainers/{master_trainer}/edit'
 */
edit.url = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { master_trainer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { master_trainer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    master_trainer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        master_trainer: typeof args.master_trainer === 'object'
                ? args.master_trainer.id
                : args.master_trainer,
                }

    return edit.definition.url
            .replace('{master_trainer}', parsedArgs.master_trainer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::edit
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:47
 * @route '/admin-dashboard/master-trainers/{master_trainer}/edit'
 */
edit.get = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::edit
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:47
 * @route '/admin-dashboard/master-trainers/{master_trainer}/edit'
 */
edit.head = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::edit
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:47
 * @route '/admin-dashboard/master-trainers/{master_trainer}/edit'
 */
    const editForm = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: edit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::edit
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:47
 * @route '/admin-dashboard/master-trainers/{master_trainer}/edit'
 */
        editForm.get = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::edit
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:47
 * @route '/admin-dashboard/master-trainers/{master_trainer}/edit'
 */
        editForm.head = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: edit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    edit.form = editForm
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::update
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:52
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
export const update = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/admin-dashboard/master-trainers/{master_trainer}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::update
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:52
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
update.url = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { master_trainer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { master_trainer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    master_trainer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        master_trainer: typeof args.master_trainer === 'object'
                ? args.master_trainer.id
                : args.master_trainer,
                }

    return update.definition.url
            .replace('{master_trainer}', parsedArgs.master_trainer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::update
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:52
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
update.put = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::update
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:52
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
update.patch = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::update
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:52
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
    const updateForm = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: update.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'PUT',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::update
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:52
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
        updateForm.put = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PUT',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::update
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:52
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
        updateForm.patch = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: update.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'PATCH',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'post',
        })
    
    update.form = updateForm
/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::destroy
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:67
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
export const destroy = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/admin-dashboard/master-trainers/{master_trainer}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::destroy
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:67
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
destroy.url = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { master_trainer: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { master_trainer: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    master_trainer: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        master_trainer: typeof args.master_trainer === 'object'
                ? args.master_trainer.id
                : args.master_trainer,
                }

    return destroy.definition.url
            .replace('{master_trainer}', parsedArgs.master_trainer.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::destroy
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:67
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
destroy.delete = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::destroy
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:67
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
    const destroyForm = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: destroy.url(args, {
                    [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                        _method: 'DELETE',
                        ...(options?.query ?? options?.mergeQuery ?? {}),
                    }
                }),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::destroy
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:67
 * @route '/admin-dashboard/master-trainers/{master_trainer}'
 */
        destroyForm.delete = (args: { master_trainer: number | { id: number } } | [master_trainer: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
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
* @see \App\Http\Controllers\Backend\MasterTrainerController::importMethod
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:73
 * @route '/admin-dashboard/master-trainers/import'
 */
export const importMethod = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

importMethod.definition = {
    methods: ["post"],
    url: '/admin-dashboard/master-trainers/import',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::importMethod
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:73
 * @route '/admin-dashboard/master-trainers/import'
 */
importMethod.url = (options?: RouteQueryOptions) => {
    return importMethod.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\Backend\MasterTrainerController::importMethod
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:73
 * @route '/admin-dashboard/master-trainers/import'
 */
importMethod.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: importMethod.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::importMethod
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:73
 * @route '/admin-dashboard/master-trainers/import'
 */
    const importMethodForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: importMethod.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\Backend\MasterTrainerController::importMethod
 * @see app/Http/Controllers/Backend/MasterTrainerController.php:73
 * @route '/admin-dashboard/master-trainers/import'
 */
        importMethodForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: importMethod.url(options),
            method: 'post',
        })
    
    importMethod.form = importMethodForm
const masterTrainers = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
store: Object.assign(store, store),
show: Object.assign(show, show),
edit: Object.assign(edit, edit),
update: Object.assign(update, update),
destroy: Object.assign(destroy, destroy),
import: Object.assign(importMethod, importMethod),
}

export default masterTrainers